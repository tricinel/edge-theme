import path from 'path';
import chalk from 'chalk';
import gulp from 'gulp';
import plumber from 'gulp-plumber';
import template from 'gulp-template';
import include from 'gulp-include';
import rename from 'gulp-rename';
import data from 'gulp-data';

import { paths } from './config';
import common from '../src/settings/common.json';

gulp.task('build:themes', ['clean:themes'], () =>
  gulp
    .src(`${paths.src.themes}/*.json`)
    .pipe(
      plumber(error => {
        chalk.red(`\nThere was an issue building themes:\n${error.message}`);
        this.emit('end');
      })
    )
    .pipe(include())
    .pipe(
      data(file => {
        const specific = require(`${paths.src.settings}/${path.basename(
          file.path
        )}`);
        return { ...common, ...specific };
      })
    )
    .pipe(template())
    .pipe(
      rename(filePath => {
        filePath.extname = '.sublime-theme';
      })
    )
    .pipe(gulp.dest(paths.dest))
    .on('end', () => {
      console.log(chalk.green('Themes sucessfully built!'));
    })
);
