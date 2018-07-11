import gulp from 'gulp';
import runSequence from 'run-sequence';

import { createTaskNames } from './create';
import { error, success } from '../src/utils/logger';

const taskNames = [...createTaskNames('create'), ...createTaskNames('copy')];

gulp.task('build', _cb => {
  runSequence([...taskNames, 'create:common'], err => {
    if (err) {
      error('There was an issue building your themes:', err.message);
    } else {
      success('Themes sucessfully built!');
    }
  });
});
