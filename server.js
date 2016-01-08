var express = require('express');
var cors = require('cors');
var url = require('url');

var lib = require('./lib');

var app = express();

app.disable('x-powered-by');

function identity(value) {
  return value;
}

// Allow any cross-origin request from any host belonging to mixmax.com
app.use(cors({
  origin: function(origin, callback) {
    if (!origin) {
      console.warn('no origin provided for filtering');
      return callback(null, false);
    }

    var originObj = url.parse(origin);
    var labels = originObj.hostname.split('.').filter(identity);
    callback(null, labels[labels.length - 2] === 'mixmax' &&
      labels[labels.length - 1] === 'com');
  },
  credentials: true
}));

app.get('/typeahead', function(req, res, next) {
  var text = req.query.text && req.query.text.trim();

  if (!text) {
    return res.json([{
      title: 'Enter a math expression using TeX notation',
      text: ''
    }]);
  }

  lib.render(text, function(err, html) {
    if (err) {
      return res.status(400)
        .send('Malformed math expression: ' + err.message);
    }

    res.json([{
      title: html,
      text: text
    }]);
  });
});

app.get('/resolver', function(req, res) {
  var text = req.query.text && req.query.text.trim();

  if (!text) {
    return res.status(400)
      .send('No math expression');
  }

  lib.render(text, function(err, html) {
    if (err) {
      return res.status(400)
        .send('Malformed math expression: ' + err.message);
    }

    res.json({
      body: html
    });
  });
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log('App listening on port', port);
});
