const path = require('path');
const reactHotReloadPlugin = require('craco-plugin-react-hot-reload');

module.exports = {
  plugins: [{ plugin: reactHotReloadPlugin }],
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
      '@global-types': path.resolve(__dirname, './src/types.js'),
      '@app': path.resolve(__dirname, './src/app/'),
      '@contacts': path.resolve(__dirname, './src/contacts/'),
      '@parameters': path.resolve(__dirname, './src/parameters/')
    },
    configure: (config, { env, paths }) => {
      if (env === 'production') {
        config.devtool = false;
      }
      return config;
    }
  },
  jest: {
    configure: {
      moduleNameMapper: {
        '^@global-types': '<rootDir>/src/types.js',
        '^@app(.*)$': '<rootDir>/src/app$1',
        '^@contacts(.*)$': '<rootDir>/src/contacts$1',
        '^@parameters(.*)$': '<rootDir>/src/parameters$1'
      },
      moduleDirectories: ['node_modules', 'src']
    }
  }
};
