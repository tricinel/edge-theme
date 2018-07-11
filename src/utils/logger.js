import consola from 'consola';

const { compose, join } = require('ramda');

const argsToArray = (...args) => [...args];

const formatMessage = compose(
  join('\n'),
  argsToArray
);

const success = compose(
  consola.success,
  formatMessage
);

const error = compose(
  consola.error,
  formatMessage
);

const warning = compose(
  consola.warn,
  formatMessage
);

const start = compose(
  consola.start,
  formatMessage
);

module.exports = { success, error, warning, start };
