import gulp from 'gulp';

import checkColors from '../src/utils/a11y';
import * as themes from '../src/config/colors';

const argv = require('yargs-parser')(process.argv.slice(2));

gulp.task('a11y:colors', () =>
  checkColors(argv.theme ? { [argv.theme]: themes[argv.theme] } : themes)
);
