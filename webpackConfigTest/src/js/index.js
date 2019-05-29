require('../css/main.css');
var $ = require('jquery');

var sub = require('./sub');
var app  = document.createElement('div');
app.innerHTML = '<h1>Hello World11122</h1>';

app.appendChild(sub());
document.body.appendChild(app);

require.ensure([],function(require) {
  require('angular');
});

