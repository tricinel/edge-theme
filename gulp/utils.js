import tinycolor from 'tinycolor2';

const toColor = color => tinycolor(color);

const toRgbArray = color => [color.r, color.g, color.b];

const toRgb = hex => toRgbArray(toColor(hex).toRgb());

const hover = hex =>
  toRgbArray(
    toColor(hex)
      .darken(20)
      .toRgb()
  );

export { toRgb, hover };
