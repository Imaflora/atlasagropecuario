var express = require('express');
var postgraphql = require('postgraphql');
var Ddos = require('ddos');
var toobusy = require('toobusy-js');
const app = express();

var config = {
  user: 'postgres', //env var: PGUSER 
  database: 'atlas', //env var: PGDATABASE 
  password: '', //env var: PGPASSWORD 
  host: process.env.NODE_ENV == 'production' ? 'localhost' : 'geonode', // Server hosting the postgres database 
  port: 5432, //env var: PGPORT 
  max: 10, // max number of clients in the pool 
  idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed 
};

app.use(function(req, res, next) {
  if (toobusy()) {
    res.send(503, "I'm busy right now, sorry.");
  } else {
    next();
  }
});

app.use((new Ddos()).express);

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', {production: 'http://www.imaflora.org', local: '*', network: "*"}[process.env.NODE_ENV]);
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.options('/*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')
  next();
})

app.use(postgraphql.postgraphql(config, 'feedback', { graphiql: true }));


app.listen(9000);
