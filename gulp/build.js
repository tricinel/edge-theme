import gulp from 'gulp';
import chalk from 'chalk';
import runSequence from 'run-sequence';

gulp.task('build', cb => {
  runSequence('build:themes', 'build:schemes', error => {
    if (error) {
      console.log(
        chalk.red(`\nThere was an issue building your theme:\n${error.message}`)
      );
    } else {
      console.log(chalk.green('Theme sucessfully built!'));
    }
    cb(error);
  });
});
