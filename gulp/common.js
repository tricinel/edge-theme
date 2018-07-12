import gulp from 'gulp';
import flatmap from 'gulp-flatmap';

import { createFile } from './create';
import { paths, editors } from './config';

const settings = require(`../src/config/settings.js`);

const themeNames = Object.values(settings).reduce(
  (names, theme) => [...names, theme.name],
  []
);

gulp.task('create:common', () => {
  editors.forEach(editor =>
    gulp.src(`${paths.src.config}/common.json`).pipe(
      flatmap((_stream, file) => {
        return createFile({
          file,
          ext: 'md',
          basename: 'CONTRIBUTING',
          src: `${paths.src.config}/CONTRIBUTING.nunjucks`,
          dest: `${paths.dist}/${editor}`,
          extraData: {
            themes: themeNames
          }
        });
      })
    )
  );
});
