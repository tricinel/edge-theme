import gulp from 'gulp';
import del from 'del';

import { paths } from './config';

gulp.task('clean:themes', () => del([`${paths.dist.themes}/*.sublime-theme`]));

gulp.task('clean:schemes', () => del([`${paths.dist.schemes}/*.tmTheme`]));

gulp.task('clean:releases', () =>
  del([
    `${paths.dist.releases}/st3/**`,
    `!${paths.dist.releases}/st3`,
    `!${paths.dist.releases}/st3/.git`
  ])
);
