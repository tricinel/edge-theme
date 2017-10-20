import gulp from 'gulp';
import chalk from 'chalk';
import runSequence from 'run-sequence';
import git from 'gulp-git';
import debug from 'gulp-debug';

import { paths, deploy } from './config';

gulp.task('release', cb => {
  runSequence(
    'release:copy:dist',
    'release:copy:targets',
    'release:prerelease',
    // 'release:st3',
    error => {
      if (error) {
        console.log(
          chalk.red(
            `There was an issue releasing your themes and schemes:\n${error.message}`
          )
        );
      } else {
        console.log(chalk.green('Release successful!'));
      }
      cb(error);
    }
  );
});

// Copy the release files
gulp.task('release:copy:dist', () =>
  gulp
    .src(deploy.st3.files, { base: './' })
    .pipe(gulp.dest(`${paths.dist.releases}/st3`))
);

// Copy the individual target files
gulp.task('release:copy:targets', () =>
  gulp.src(deploy.st3.docs).pipe(gulp.dest(`${paths.dist.releases}/st3`))
);

// We need to add all the releases to the
gulp.task('release:prerelease', () => {
  /* eslint-disable global-require */
  const pkgJson = require('./../package.json');
  /* eslint-enable */
  const version = `v${pkgJson.version}`;
  const message = `Release ${version}`;

  return gulp
    .src('./releases/st3/*') // We need to change this when we have VSCode support
    .pipe(debug())
    .pipe(git.add())
    // .pipe(git.commit(message))
    // .pipe(git.tag(version));
});

// gulp.task('release:st3', () => gulp.src());
