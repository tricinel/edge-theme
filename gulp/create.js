import gulp from 'gulp';
import data from 'gulp-data';
import rename from 'gulp-rename';
import nunjucksRender from 'gulp-nunjucks-render';
import include from 'gulp-include';

import * as fns from '../src/utils/colors';
import { editors } from './config';

const createFile = ({
  file,
  ext,
  basename,
  src,
  dest,
  includePaths = '',
  extraData = {}
}) =>
  gulp
    .src(src)
    .pipe(include({ includePaths }))
    .pipe(
      data(() => ({
        ...JSON.parse(file.contents.toString('utf8')),
        ...fns,
        ...extraData
      }))
    )
    .pipe(
      nunjucksRender({
        ext: `.${ext}`
      })
    )
    .pipe(
      rename(s => {
        s.basename = basename;
      })
    )
    .pipe(gulp.dest(dest));

const createTaskNames = prefix => editors.map(editor => `${prefix}:${editor}`);

module.exports = { createFile, createTaskNames };
