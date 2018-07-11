import gulp from 'gulp';
import flatmap from 'gulp-flatmap';
import nunjucksRender from 'gulp-nunjucks-render';

import { createFile } from './create';

import { paths, themes } from './config';
import common from '../src/config/common.json';

const colors = require(`../src/config/colors.js`);
const settings = require(`../src/config/settings.js`);

gulp.task('copy:iterm2');

gulp.task('create:iterm2', ['clean:tmp'], () => {
  themes.forEach(theme => {
    const path = `${paths.src.config}/iterm2`;

    gulp
      .src(`${path}/config.nunjucks`)
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
            src: `${path}/scheme.nunjucks`,
            dest: `${paths.dist}/iterm2`
          })
        )
      );
  });
});
