import gulp from 'gulp';
import flatmap from 'gulp-flatmap';

import { createFile } from './create';

import { paths, themes } from './config';

const colors = require(`../src/config/colors.js`);
const settings = require(`../src/config/settings.js`);

const editorPath = `${paths.src.config}/alfred`;

gulp.task('copy:alfred');

gulp.task('create:alfred', _cb => {
  themes.forEach(theme => {
    gulp.src(`${paths.src.config}/common.json`).pipe(
      flatmap((_stream, file) =>
        createFile({
          file,
          ext: 'alfredappearance',
          basename: settings[theme].name,
          src: `${editorPath}/appearance.nunjucks`,
          dest: `${paths.dist}/alfred`,
          templatePath: paths.src.config,
          extraData: {
            ...colors[theme],
            ...settings[theme]
          }
        })
      )
    );
  });
});
