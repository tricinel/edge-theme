import {
  toRgb,
  toRgba,
  darken,
  splitColorToRgbComponents,
  transformToColorCode,
  transformToCtermKey
} from '../colors';

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

test('Get the nearest xterm 256 color code for a hex code', () => {
  expect(transformToColorCode(color)).toEqual(202);
  expect(transformToColorCode('NONE')).toEqual('NONE');
});

test('Get the cterm key for the corresponding gui key', () => {
  expect(transformToCtermKey('gui')).toEqual('cterm');
  expect(transformToCtermKey('guibg')).toEqual('ctermbg');
  expect(transformToCtermKey('guifg')).toEqual('ctermfg');
  expect(transformToCtermKey('someotherkey')).toEqual('someotherkey');
});
