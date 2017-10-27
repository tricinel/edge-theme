import {
  toRgb,
  toRgba,
  darken,
  splitColorToRgbComponents
} from '../../gulp/utils';

const color = '#fc6821';

test('Get the RGB values of a Hex color as an array', () => {
  expect(toRgb(color)).toEqual([252, 104, 33]);
});

test('Get the RGB values of a Hex color and set its alpha', () => {
  expect(toRgba(color, 0.5)).toEqual([252, 104, 33, 0.5]);
});

test('Darken a color', () => {
  expect(darken(color)).toEqual([181, 60, 2]);
  expect(darken(color, 50)).toEqual([30, 10, 0]);
});

test('Split a color into RGB components for iterm2', () => {
  expect(splitColorToRgbComponents(color)).toEqual([
    {
      key: 'Red Component',
      value: 0.9882352941176471
    },
    {
      key: 'Green Component',
      value: 0.40784313725490196
    },
    {
      key: 'Blue Component',
      value: 0.12941176470588237
    }
  ]);
});
