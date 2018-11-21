const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = express();
const randomstring = require("randomstring");

const moment = require('moment')
const chrono = require('chrono-node')


let now = moment()
console.log(now)
let yrsAgo = chrono.fr.parseDate("mon enfant est née il y a 12 ans", new Date())
console.log(yrsAgo)
let yrsAgoMoment = moment(yrsAgo)
console.log(yrsAgoMoment)


app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'pug')

app.get('/', function (req, res) {
  const fullUrl = 'https://' + req.get('host') + req.originalUrl;
  res.render('index', { id: randomstring.generate(), origin: fullUrl});
})

app.listen(8888, function () {
    console.log('Example app listening on port 8080!')
  })