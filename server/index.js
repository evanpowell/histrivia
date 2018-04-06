const express = require('express');
const db = require('../database/index');


let app = express();

app.use(express.static(__dirname, '../client/dist'))

.get('/', (req, res) => {
  res.send('Hello World');
})


app.listen(process.env.PORT, () => console.log(`Listening on ${process.env.PORT}`));