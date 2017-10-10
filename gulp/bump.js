import gulp from 'gulp';
import chalk from 'chalk';
import yrgv from 'yargs';
import runSequence from 'run-sequence';
import bump from 'gulp-bump';

const { argv } = yrgv;

gulp.task('bump', cb => {
  runSequence('bump:pkgJson', error => {
    if (error) {
      console.log(
        chalk.red(
          `There was an issue bumping the version number:\n${error.message}`
        )
      );
    } else {
      console.log(chalk.green('Bump successful!'));
    }
    cb(error);
  });
});

gulp.task('bump:pkgJson', () => {
  let type;

  if (Object.keys(argv).length === 2 || argv.patch) {
    type = 'patch';
  } else if (argv.minor) {
    type = 'minor';
  } else if (argv.major) {
    type = 'major';
  } else {
    type = 'patch';
  }

  return gulp
    .src('./package.json')
    .pipe(bump({ type }))
    .pipe(gulp.dest('./'));
});
