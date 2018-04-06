const express = require('express');


let app = express();

app.listen(process.env.PORT, () => console.log(`Listening on ${process.env.PORT}`));