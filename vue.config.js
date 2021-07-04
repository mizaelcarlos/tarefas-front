module.exports = {
    devServer: {
        proxy: {
          "/": {
            target: "http://127.0.0.1:8080",
            timeout: 6000,
            secure: false,
            changeOrigin: true
          }
        }
      }
   
}