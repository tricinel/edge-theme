import gulp from 'gulp';
import chalk from 'chalk';
import runSequence from 'run-sequence';

import { paths, deploy } from './config';

gulp.task('release', cb => {
  runSequence('release:copy:sublimetext', 'release:copy:iterm2', error => {
    if (error) {
      console.log(
        chalk.red(
          `There was an issue releasing your themes and schemes:\n${error.message}`
        )
      );
    } else {
      console.log(
        chalk.green(
          "Release copy successful! Don't forget to bump, tag and release each package as needed!"
        )
      );
    }
    cb(error);
  });
});

gulp.task('release:copy:sublimetext', cb => {
  runSequence(
    'release:copy:sublimetext:main',
    'release:copy:sublimetext:files',
    error => {
      if (error) {
        console.log(
          chalk.red(
            `There was an issue copying the files for Sublime Text:\n${error.message}`
          )
        );
      }
      cb(error);
    }
  );
});

// Copy the main release files for Sublime Text
gulp.task('release:copy:sublimetext:main', () =>
  gulp
    .src(deploy.sublimetext, { base: './' })
    .pipe(gulp.dest(`${paths.dist.releases}/sublimetext`))
);

// Copy the specific release files for Sublime Text
gulp.task('release:copy:sublimetext:files', () =>
  gulp
    .src(
      [
        `${paths.dist.sublimetext}/**/*`,
        `!${paths.dist.sublimetext}/**/*.{gitignore,DS_Store,version}`
      ],
      { dot: true }
    )
    .pipe(gulp.dest(`${paths.dist.releases}/sublimetext`))
);

// Copy the specific release files for iTerm2
gulp.task('release:copy:iterm2', () =>
  gulp
    .src(`${paths.dist.iterm2}/**/*`)
    .pipe(gulp.dest(`${paths.dist.releases}/iterm2`))
);
