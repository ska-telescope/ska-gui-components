const vitePreprocessor = require('cypress-vite')

module.exports = (on, config) => {
  require('@cypress/code-coverage/task')(on, config);
  on('file:preprocessor', vitePreprocessor());
  return config;
};
