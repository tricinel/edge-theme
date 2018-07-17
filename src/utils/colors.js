import {
  __,
  always,
  append,
  apply,
  compose,
  concat,
  cond,
  curry,
  divide,
  equals,
  map,
  pick,
  toPairs,
  values
} from 'ramda';
import tinycolor from 'tinycolor2';
import x256 from 'x256';

const toColor = color => tinycolor(color);
const getRgba = color => color.toRgb();

const toRgb = compose(
  values,
  pick(['r', 'g', 'b']),
  getRgba,
  toColor
);

const toRgba = (hex, alpha) => append(alpha, toRgb(hex));

const toHex = color => toColor(color).toHexString();

const toHex8 = (hex, alpha = 1) =>
  toColor(hex)
    .setAlpha(alpha)
    .toHex8String();

const darken = (hex, amount = 20) => toRgb(toColor(hex).darken(amount));

const lighten = (hex, amount = 20) => toRgb(toColor(hex).lighten(amount));

const hover = hex => darken(hex);

const transformToXrdb = curry((fn, obj) =>
  compose(
    map(pair => ({ key: pair[0], value: pair[1] })),
    map(pair => [apply(fn, pair), divide(pair[1], 255)]),
    toPairs
  )(obj)
);

const splitColorToRgbComponents = compose(
  transformToXrdb(k =>
    compose(
      concat(__, ' Component'), // eslint-disable-line no-underscore-dangle
      cond([
        [equals('r'), always('Red')],
        [equals('g'), always('Green')],
        [equals('b'), always('Blue')]
      ])
    )(k)
  ),
  pick(['r', 'g', 'b']),
  getRgba,
  toColor
);

const transformToColorCode = hex =>
  toColor(hex).isValid()
    ? compose(
        x256,
        toRgb
      )(hex)
    : hex;

const transformToCtermKey = key => key.replace('gui', 'cterm');

export {
  toRgb,
  toRgba,
  toHex,
  toHex8,
  hover,
  darken,
  lighten,
  splitColorToRgbComponents,
  transformToColorCode,
  transformToCtermKey
};
