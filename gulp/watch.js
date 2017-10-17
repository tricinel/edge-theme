import gulp from 'gulp';

import { paths } from './config';

gulp.task('watch', ['build'], () => {
  gulp.watch(`${paths.src.templates}/*.nunjucks`, [
    'build:schemes',
    'build:themes'
  ]);
  gulp.watch(`${paths.src.settings}/**/*.json`, [
    'build:schemes',
    'build:themes'
  ]);

  gulp.watch('gulpfile.babel.js').on('change', () => process.exit(0));
});
