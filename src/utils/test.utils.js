import { compose, lensPath, view, map, unnest, isNil } from 'ramda';

const backgroundLens = lensPath(['colors', 'backgrounds', 'background']);
const accentsLens = lensPath(['colors', 'text', 'accents']);
const scopeLens = lensPath(['colors', 'scope']);

const lenses = [accentsLens, scopeLens];

const passLensPath = lensPath(['aa', 'normal', 'pass']);

const makePairs = theme => {
  const bg = view(backgroundLens, theme);

  return map(l => {
    const colors = view(l, theme);
    return Object.keys(colors).reduce(
      (pairs, color) => [...pairs, [bg, colors[color], color]],
      []
    );
  }, lenses);
};

const getPairs = compose(
  unnest,
  makePairs
);

const cases = (themes, name) =>
  isNil(themes[name].colors) ? [] : getPairs(themes[name]);

export { cases, passLensPath };
