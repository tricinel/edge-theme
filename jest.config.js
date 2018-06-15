const { jest: jestConfig } = require('frontwerk/config');

module.exports = Object.assign(jestConfig, {
  roots: ['src', 'gulp']
});
