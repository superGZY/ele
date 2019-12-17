const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(proxy('/api', { 
       target: 'https://h5.ele.me' ,
       secure: false,
       changeOrigin: true,
       pathRewrite: {
        "^/api": "/"
       }
  })),
  app.use(proxy('/restapi', { 
    target: 'http://localhost:3001',
    secure: false,
    changeOrigin: true
  }))
}