'use strict';

var loopback = require('loopback');
var boot = require('loopback-boot');

var app = module.exports = loopback();

app.start = function() {
  // start the web server
  return app.listen(function() {
    app.emit('started');
    var baseUrl = app.get('url').replace(/\/$/, '');
    console.log('Web server listening at: %s', baseUrl);
    if (app.get('loopback-component-explorer')) {
      var explorerPath = app.get('loopback-component-explorer').mountPath;
      console.log('Browse your REST API at %s%s', baseUrl, explorerPath);
    }
  });
};

// Bootstrap the application, configure models, datasources and middleware.
// Probando el controlm de versiones 
// Otra lirna
// Nureva Bersion del codigo
//Una nueva version ASASAS
//DESDE SUBLIMEASASAS
//des sublimeAS
//Desde SublomeAS
//DES DE SUBLIME 

boot(app, __dirname, function(err) {
  if (err) throw err;

  // start the server if `$ node server.js`
  //SOPNI
  if (require.main === module)
    app.start();
});
