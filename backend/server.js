var express = require('express');
var postgraphql = require('postgraphql');
var Ddos = require('ddos');
var toobusy = require('toobusy-js');
var salesforce = require('./salesforce');
const app = express();
var promise = require('bluebird');
var fs = require('fs');

var options = {
  // Initialization Options
  promiseLib: promise
};

var pgp = require('pg-promise')(options);
const schema = 'exposed';

var config = {
  user: 'postgres', //env var: PGUSER 
  database: 'atlas', //env var: PGDATABASE 
  password: process.env.PGPASSWORD, //env var: PGPASSWORD 
  host: process.env.NODE_ENV == 'production' ? 'localhost' : 'geonode', // Server hosting the postgres database 
  port: 5432, //env var: PGPORT 
  max: 10, // max number of clients in the pool 
  idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed 
};


var db = pgp(config);

app.use(function (req, res, next) {
  if (toobusy()) {
    res.send(503, "I'm busy right now, sorry.");
  } else {
    next();
  }
});

app.use((new Ddos()).express);

app.use(function (req, res, next) {
  // res.header('Access-Control-Allow-Origin', {production: 'http://www.imaflora.org', local: '*', network: "*"}[process.env.NODE_ENV]);
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.options('/*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')
  next();
})


app.post('/insertOrUpdateUser', function (req, res) {
  req.on('data', (data) => {
    req = JSON.parse(data.toString());
    db.oneOrNone("SELECT 1 res FROM feedback.usuario WHERE email=$1", [req.email]).then((data) => {
      if (!data) {
        console.log('will insert');
        salesforce.createUser(req.email, req.nome, req.instituicao, req.departamento, req.telefone);
      }
      db.oneOrNone(`SELECT exposed.insert_or_update_user(
    $1,
    $2,
    $3,
    $4,
    $5
)`, [req.email, req.nome, req.instituicao, req.departamento, req.telefone]).then();
      res.status(200)
        .json({
          status: 'success',
          message: 'Updated'
        });
      return;
    })
  }
  )
})

app.use(postgraphql.postgraphql(config, schema, { graphiql: true }));




app.get('/translation/:lcid', (req, res, next) => {
  db.one(`
    SELECT conf.get_translation($1) json`, req.params.lcid)
    .then((data) => {
      var results = data.json;
      db.none(`UPDATE exposed.numAccess SET num = num + 1;`).then(() => { }).catch((err) => console.log(err));
      res.status(200).json({ status: 'success', data: results, message: "Worked!" });
    });
});

app.listen(9000);
