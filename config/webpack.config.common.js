const path = require('path');

const root = process.cwd();

module.exports.dirnameAlias = {
  '~': path.resolve(root, './src'),
  '$components': path.resolve(root, './src/components'),
  '$pages': path.resolve(root, './src/pages'),
  '$store': path.resolve(root, './src/store'),
  '$utils': path.resolve(root, './src/utils'),
  '$service': path.resolve(root, './src/service')
};
