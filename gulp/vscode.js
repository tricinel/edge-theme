import gulp from 'gulp';
import flatmap from 'gulp-flatmap';
import runSequence from 'run-sequence';

import { createFile } from './create';

import { paths, themes } from './config';

const colors = require(`../src/config/colors.js`);
const settings = require(`../src/config/settings.js`);

const editorPath = `${paths.src.config}/vscode`;

const themesWithProps = Object.values(settings).reduce(
  (names, theme) => [
    ...names,
    { name: theme.name, backgroundType: theme.backgroundType }
  ],
  []
);

gulp.task('copy:vscode');

gulp.task('create:vscode', _cb =>
  runSequence(['create:vscode:themes', 'create:vscode:packagejson'])
);

gulp.task('create:vscode:themes', () => {
  themes.forEach(theme => {
    gulp.src(`${paths.src.config}/common.json`).pipe(
      flatmap((_stream, file) =>
        createFile({
          file,
          ext: 'json',
          basename: settings[theme].name,
          src: `${editorPath}/theme.nunjucks`,
          dest: `${paths.dist}/vscode`,
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

gulp.task('create:vscode:packagejson', () =>
  gulp.src(`${paths.src.config}/common.json`).pipe(
    flatmap((_stream, file) =>
      createFile({
        file,
        ext: 'json',
        basename: 'package',
        src: `${editorPath}/packagejson.nunjucks`,
        dest: `${paths.dist}/vscode`,
        extraData: {
          themes: themesWithProps
        }
      })
    )
  )
);
