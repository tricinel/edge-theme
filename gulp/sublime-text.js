import gulp from 'gulp';
import flatmap from 'gulp-flatmap';
import nunjucksRender from 'gulp-nunjucks-render';
import mergeStream from 'merge-stream';

import { createFile } from './create';

import { paths, themes } from './config';
import common from '../src/config/common.json';

const colors = require(`../src/config/colors.js`);
const settings = require(`../src/config/settings.js`);

const themeNames = Object.values(settings).reduce(
  (names, theme) => [...names, theme.name],
  []
);

gulp.task('copy:sublime-text', () =>
  gulp
    .src(['./assets/icons/**/*.png', './icons/**/*.png'], { base: './' })
    .pipe(gulp.dest(`${paths.dist}/sublime-text`))
);

gulp.task('create:sublime-text', () => {
  themes.forEach(theme => {
    const path = `${paths.src.config}/sublime-text`;

    gulp
      .src(`${path}/config.nunjucks`)
      .pipe(
        nunjucksRender({
          ext: '.json',
          data: {
            ...common,
            ...colors[theme],
            ...settings[theme]
          }
        })
      )
      .pipe(
        flatmap((_stream, file) =>
          mergeStream(
            createFile({
              file,
              ext: 'tmTheme',
              basename: settings[theme].name,
              src: `${path}/scheme.nunjucks`,
              dest: `${paths.dist}/sublime-text`
            }),
            createFile({
              file,
              ext: 'sublime-theme',
              basename: settings[theme].name,
              includePaths: `${path}/theme`,
              src: `${path}/theme.nunjucks`,
              dest: `${paths.dist}/sublime-text`
            }),
            createFile({
              file,
              ext: 'skins',
              basename: common.package.shortName,
              src: `${path}/skins.nunjucks`,
              dest: `${paths.dist}/sublime-text`,
              extraData: {
                themes: themeNames,
                package: common.package
              }
            })
          )
        )
      );
  });
});
