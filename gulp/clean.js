import gulp from 'gulp';
import del from 'del';

import { paths } from './config';

gulp.task('clean:tmp', () => del([paths.tmp]));
