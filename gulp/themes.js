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
import { toRgb, toRgba, hover, darken, lighten } from './utils';
import common from '../src/settings/common.json';

gulp.task('build:themes', cb => {
  runSequence('process:sublime-themes', error => {
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

gulp.task('process:sublime-themes', ['clean:themes'], () =>
  gulp
    .src([`${paths.src.settings}/*.json`, `!${paths.src.settings}/common.json`])
    .pipe(
      flatmap((stream, file) => {
        const basename = path.basename(file.path, path.extname(file.path));

        return gulp
          .src(templates.sublimeTheme)
          .pipe(
            include({
              includePaths: `${paths.src.settings}/include`
            })
          )
          .pipe(
            data(() => {
              /* eslint-disable global-require */
              const settings = require(file.path);
              /* eslint-enable */

              return {
                ...common,
                ...settings,
                toRgb,
                toRgba,
                hover,
                darken,
                lighten
              };
            })
          )
          .pipe(nunjucksRender({ path: [paths.tmp], ext: '.sublime-theme' }))
          .pipe(
            rename(theme => {
              theme.basename = basename;
            })
          )
          .pipe(gulp.dest(paths.dist.sublimetext));
      })
    )
);
