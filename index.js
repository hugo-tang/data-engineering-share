const express = require('express')
const mysql = require('mysql2');

const mysqlConfig = {
  host: "mysql_server",
  user: "hugo",
  password: "hugo",
  database: "test"
}

let con = null

const app = express()

app.get('/', function (req, res) {
  res.send('hello - route : /connect')
})

app.get('/connect', function (req, res) {
  con =  mysql.createConnection(mysqlConfig);
  con.connect(function(err) {
    if (err) throw err;
    res.send('connected')
  });
})

app.listen(3000)
console.log("app port 3000")

