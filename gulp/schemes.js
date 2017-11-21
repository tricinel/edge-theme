/* eslint-disable import/no-dynamic-require */

import gulp from 'gulp';
import chalk from 'chalk';
import path from 'path';
import runSequence from 'run-sequence';
import flatmap from 'gulp-flatmap';
import data from 'gulp-data';
import rename from 'gulp-rename';
import nunjucksRender from 'gulp-nunjucks-render';

import common from '../src/settings/common.json';
import { paths, templates } from './config';

import {
  splitColorToRgbComponents,
  transformToColorCode,
  transformToCtermKey,
  transformFileName
} from './utils';

gulp.task('build:schemes', ['clean:schemes'], cb => {
  runSequence(
    'process:sublime-schemes',
    'process:iterm2',
    'process:vim',
    error => {
      if (error) {
        console.log(
          chalk.red(
            `There was an issue building the schemes:\n${error.message}`
          )
        );
      } else {
        console.log(chalk.green('Schemes built successfully!'));
      }
      cb(error);
    }
  );
});

gulp.task('process:sublime-schemes', () =>
  gulp
    .src([`${paths.src.settings}/*.json`, `!${paths.src.settings}/common.json`])
    .pipe(
      flatmap((stream, file) => {
        const basename = path.basename(file.path, path.extname(file.path));

        return gulp
          .src(templates.sublimeScheme)
          .pipe(
            data(() => {
              /* eslint-disable global-require */
              const settings = require(file.path);
              /* eslint-enable global-require */

              return { ...common, ...settings };
            })
          )
          .pipe(nunjucksRender({ path: [paths.tmp], ext: '.tmTheme' }))
          .pipe(
            rename(scheme => {
              scheme.basename = basename;
            })
          )
          .pipe(gulp.dest(paths.dist.sublimetext));
      })
    )
);

gulp.task('process:iterm2', () =>
  gulp
    .src([`${paths.src.settings}/*.json`, `!${paths.src.settings}/common.json`])
    .pipe(
      flatmap((stream, file) => {
        const basename = path.basename(file.path, path.extname(file.path));

        return gulp
          .src(templates.iterm2)
          .pipe(
            data(() => {
              /* eslint-disable global-require */
              const settings = require(file.path);
              /* eslint-enable global-require */

              return { ...common, ...settings, splitColorToRgbComponents };
            })
          )
          .pipe(nunjucksRender({ path: [paths.tmp], ext: '.itermcolors' }))
          .pipe(
            rename(scheme => {
              scheme.basename = basename;
            })
          )
          .pipe(gulp.dest(paths.dist.iterm2));
      })
    )
);

gulp.task('process:vim', () =>
  gulp
    .src([`${paths.src.settings}/*.json`, `!${paths.src.settings}/common.json`])
    .pipe(
      flatmap((stream, file) => {
        const basename = path.basename(file.path, path.extname(file.path));

        return gulp
          .src(templates.vim)
          .pipe(
            data(() => {
              /* eslint-disable global-require */
              const settings = require(file.path);
              /* eslint-enable global-require */

              return {
                ...common,
                ...settings,
                transformToColorCode,
                transformToCtermKey,
                transformFileName
              };
            })
          )
          .pipe(nunjucksRender({ path: [paths.tmp], ext: '.vim' }))
          .pipe(
            rename(scheme => {
              scheme.basename = transformFileName(basename);
            })
          )
          .pipe(gulp.dest(paths.dist.vim));
      })
    )
);
