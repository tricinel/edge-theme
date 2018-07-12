import gulp from 'gulp';
import flatmap from 'gulp-flatmap';
import nunjucksRender from 'gulp-nunjucks-render';

import { createFile } from './create';

import { paths, themes } from './config';
import common from '../src/config/common.json';

const colors = require(`../src/config/colors.js`);
const settings = require(`../src/config/settings.js`);

const editorPath = `${paths.src.config}/iterm2`;

gulp.task('copy:iterm2');

gulp.task('create:iterm2', () => {
  themes.forEach(theme => {
    gulp
      .src(`${editorPath}/config.nunjucks`)
      .pipe(
        nunjucksRender({
          ext: '.json',
          data: { ...common, ...colors[theme], ...settings[theme] }
        })
      )
      .pipe(
        flatmap((_stream, file) =>
          createFile({
            file,
            ext: 'itermcolors',
            basename: settings[theme].name,
            src: `${editorPath}/scheme.nunjucks`,
            dest: `${paths.dist}/iterm2`
          })
        )
      );
  });
});
