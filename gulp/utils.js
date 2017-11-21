import R from 'ramda';
import tinycolor from 'tinycolor2';
import x256 from 'x256';

const toColor = color => tinycolor(color);
const getRgba = color => color.toRgb();

const toRgb = R.compose(R.values, R.pick(['r', 'g', 'b']), getRgba, toColor);

const toRgba = (hex, alpha) => R.append(alpha, toRgb(hex));

const darken = (hex, amount = 20) => toRgb(toColor(hex).darken(amount));

const lighten = (hex, amount = 20) => toRgb(toColor(hex).lighten(amount));

const hover = hex => darken(hex);

const transformToXrdb = R.curry((fn, obj) =>
  R.compose(
    R.map(pair => ({ key: pair[0], value: pair[1] })),
    R.map(pair => [R.apply(fn, pair), R.divide(pair[1], 255)]),
    R.toPairs
  )(obj)
);

const splitColorToRgbComponents = R.compose(
  transformToXrdb(k =>
    R.compose(
      R.concat(R.__, ' Component'),
      R.cond([
        [R.equals('r'), R.always('Red')],
        [R.equals('g'), R.always('Green')],
        [R.equals('b'), R.always('Blue')]
      ])
    )(k)
  ),
  R.pick(['r', 'g', 'b']),
  getRgba,
  toColor
);

const transformToColorCode = hex =>
  toColor(hex).isValid() ? R.compose(x256, toRgb)(hex) : hex;

const transformToCtermKey = key => key.replace('gui', 'cterm');

const transformFileName = name => name.replace(/\s/g, '').toLowerCase();

export {
  toRgb,
  toRgba,
  hover,
  darken,
  lighten,
  splitColorToRgbComponents,
  transformToColorCode,
  transformToCtermKey,
  transformFileName
};
