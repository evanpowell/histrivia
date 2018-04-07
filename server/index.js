const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const cors = require('cors');

const db = require('../database/index');

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

app.use(express.static(__dirname + '/../client/dist'))

app.post('/signup', (req, res) => {
  const username = req.query.username;
  console.log(`Adding ${username} to the database`);
  db.addUser(username, err => {
    if(err) {
      console.error('Error: ' + err);
      res.send('Error: ' + err);
    } else {
      console.log(`Successfully added ${username} to our database`);
      res.send(`Welcome ${username}! You have been entered into our database!`);
    }
  });
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Listening on ${PORT}`));