module.exports = {
  lintOnSave: false,
  configureWebpack: {
    devServer: {
      proxy: {
        "/api": {
          "target": "http://localhost:8080/",
          "changeOrigin": true,
        },
        "/others": {
          "target": "http://localhost:8080/",
          "changeOrigin": true,
        },
        "/img": {
          "target": "http://localhost:8080/",
          "changeOrigin": true,
        },
        "/upload": {
          "target": "http://localhost:8080/",
          "changeOrigin": true,
        }
      }
    }
  }
};
