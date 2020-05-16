const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/routes.js');

const app = express();

app.get('/', (req, res) => res.send({ message: 'Hello world!'}));

app.listen(3000, () => {
  console.log('Running on port 3000!')
})