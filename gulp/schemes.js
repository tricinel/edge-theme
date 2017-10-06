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

gulp.task('build:schemes', ['clean:schemes'], cb => {
  runSequence('process:schemes', error => {
    if (error) {
      console.log(
        chalk.red(`There was an issue building the schemes:\n${error.message}`)
      );
    } else {
      console.log(chalk.green('Schemes built successfully!'));
    }
    cb(error);
  });
});

gulp.task('process:schemes', () =>
  gulp.src(`${paths.src.schemes}/*.json`).pipe(
    flatmap((stream, file) => {
      const basename = path.basename(file.path, path.extname(file.path));

      return gulp
        .src(templates.scheme)
        .pipe(
          data(() => {
            const specific = require(file.path);
            return { ...common, ...specific };
          })
        )
        .pipe(nunjucksRender({ path: [paths.tmp], ext: '.tmTheme' }))
        .pipe(
          rename(scheme => {
            scheme.basename = basename;
          })
        )
        .pipe(gulp.dest(paths.dist.schemes));
    })
  )
);
