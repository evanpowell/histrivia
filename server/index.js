const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const db = require('../database/index');
let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static(__dirname + '/../client/dist'))

app.get('/signup', (req, res) => {
  const username = req.query.username;
  console.log(req.query.username)
  console.log(`Adding ${username} to the database`);
  db('users').insert({username: username, score:0})
    .then(() => {
      res.send('Success');
    })
    .catch(err => {
      res.send('Unsuccess');
    });
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Listening on ${PORT}`));