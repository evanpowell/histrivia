const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const db = require('../database/index');
let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static(__dirname + '/../client/dist'));

app.post('/login', (req, res) => {
  const username = req.body.username;
  db('users')
    .where({
      username: username
    })
    .then(result => {
      console.log(result);
      res.send(result[0]);
    })
    .catch(err => {
      console.log(err);
      res.status(404);
      res.send(err);
    });
})

app.post('/signup', (req, res) => {
  const username = req.body.username;
  console.log(`Adding ${username} to the database`);
  db('users')
    .insert({username: username, score:0})
    .then(() => {
      console.log(`${username} successfully added`);
      res.send(`Welcome, ${username}! You have been add to the database!`);
    })
    .catch(err => {
      console.log(err);
      res.send('Unsuccess');
    });
})

app.post('/addPoints', (req, res) => {
  const username = req.body.username;
  db('users')
  .where('username', '=', username)
  .increment('score', 1)
  .then(result => {
    res.send('you earned a point!');
  })
  .catch(err => {
    console.log(err);
    res.send('something went wrong');
  })
})


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Listening on ${PORT}`));