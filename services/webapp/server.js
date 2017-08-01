'use strict';

const express = require('express');

var request = require('sync-request');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  var greet = req.query['greet'];
  var id = req.query['id'];

  console.log('greet: ' + greet);
  console.log('id: ' + id);

  res.send(get("http://greeter:8080?greet=" + greet)
  	+ ' '  
  	+ get("http://name:8080?id=" + id));
});

function get(url) {
	return require('sync-request')('GET', url).getBody();

}

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

