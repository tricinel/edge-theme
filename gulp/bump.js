import gulp from 'gulp';
import bump from 'gulp-bump';

import { paths } from './config';

const argv = require('yargs-parser')(process.argv.slice(2));

gulp.task('bump', () =>
  gulp
    .src(`${paths.dist[argv.editor]}/.version`)
    .pipe(bump({ type: argv.type || 'patch' }))
    .pipe(gulp.dest(`${paths.dist[argv.editor]}`))
);
