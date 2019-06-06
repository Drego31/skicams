module.exports = {
  chainWebpack: config => {
    config.module
      .rule('import-glob')
      .test(/\.sass$/)
      .use('import-glob-loader')
      .loader('import-glob-loader')
      .end()
  }
}