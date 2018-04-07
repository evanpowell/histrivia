const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const retrieveQuestion = require('../trivia.js');
const db = require('../database/index');

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static(__dirname + '/../client/dist'))



const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Listening on ${PORT}`));