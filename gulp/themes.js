/* eslint-disable import/no-dynamic-require */

import path from 'path';
import gulp from 'gulp';
import include from 'gulp-include';
import rename from 'gulp-rename';
import data from 'gulp-data';
import flatmap from 'gulp-flatmap';
import nunjucksRender from 'gulp-nunjucks-render';
import runSequence from 'run-sequence';
import chalk from 'chalk';

import { paths, templates } from './config';
import { toRgb, hover, darken, lighten } from './utils';
import common from '../src/settings/common.json';

gulp.task('build:themes', cb => {
  runSequence('process:themes', error => {
    if (error) {
      console.log(
        chalk.red(`There was an issue building the themes:\n${error.message}`)
      );
    } else {
      console.log(chalk.green('Themes built successfully!'));
    }
    cb(error);
  });
});

gulp.task('process:themes', ['clean:themes'], () =>
  gulp.src(`${paths.src.themes}/*.json`).pipe(
    flatmap((stream, file) => {
      const basename = path.basename(file.path, path.extname(file.path));
      const filename = path.basename(file.path);

      return gulp
        .src(templates.theme)
        .pipe(
          include({
            includePaths: `${paths.src.themes}/include`
          })
        )
        .pipe(
          data(() => {
            /* eslint-disable global-require */
            const settings = require(`.${paths.src.settings}/${filename}`);
            const theme = require(file.path);
            /* eslint-enable */

            return { ...common, ...settings, ...theme, toRgb, hover, darken, lighten };
          })
        )
        .pipe(nunjucksRender({ path: [paths.tmp], ext: '.sublime-theme' }))
        .pipe(
          rename(theme => {
            theme.basename = basename;
          })
        )
        .pipe(gulp.dest(paths.dist.themes));
    })
  )
);
