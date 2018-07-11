import gulp from 'gulp';

import { paths } from './config';

gulp.task('watch', ['build'], () => {
  gulp.watch([`${paths.src.config}/**/*.{nunjucks,json,js}`], ['build']);

  gulp.watch('gulpfile.babel.js').on('change', () => process.exit(0));
});
