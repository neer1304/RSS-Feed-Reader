var RSSModel = require('./RSS_model');

var RSSController = function(app) {
  app.get('/', function(req, res) {
    RSSModel.fetchData(function(xml) {
      res.render('./index', {
        xml: xml
      });
    });
  });
  
  app.get('/refresh', function(req, res) {
    RSSModel.fetchData(function(xml) {
      res.set('Content-Type', 'text/xml');
      res.send(xml);
    });
  });
  
}

module.exports.controller = RSSController;