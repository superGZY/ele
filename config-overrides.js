
const { 
    override,
    fixBabelImports,
    addWebpackAlias
  } = require('customize-cra');
  
  const path = require('path')
  
  module.exports = override(
    fixBabelImports('import', {
      libraryName: 'antd-mobile',
      style: 'css',
    }),
  
    addWebpackAlias({
      assets: path.resolve(__dirname, './src/assets'),
      component: path.resolve(__dirname, './src/component'),
      pages: path.resolve(__dirname, './src/pages'),
      '@': path.resolve(__dirname, './src/components'),
    })
  );