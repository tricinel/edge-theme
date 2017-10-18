import tinycolor from 'tinycolor2';

const toColor = color => tinycolor(color);

const toRgbArray = color => [color.r, color.g, color.b];

const toRgb = hex => toRgbArray(toColor(hex).toRgb());

const toRgba = (hex, alpha) => [...toRgbArray(toColor(hex).toRgb()), alpha];

const darken = (hex, amount = 20) =>
  toRgbArray(
    toColor(hex)
      .darken(amount)
      .toRgb()
  );

const lighten = (hex, amount = 20) =>
  toRgbArray(
    toColor(hex)
      .lighten(amount)
      .toRgb()
  );

const hover = hex => darken(hex);

export { toRgb, toRgba, hover, darken, lighten };
