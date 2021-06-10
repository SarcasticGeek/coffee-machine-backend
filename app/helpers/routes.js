var app = require('../../app');

var machines = require('../routes/machines.router');
var pods = require('../routes/pods.router');

module.exports = function (app) {
  app.use('/api/machines', machines);
  app.use('/api/pods', pods);
  
};