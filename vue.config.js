module.exports = {
  lintOnSave: false,
  configureWebpack: {
    devServer: {
    }
  },
  pluginOptions: {
    mock: { entry: "./mock/", debug: true }
  }
};
