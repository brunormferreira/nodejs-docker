const express = require('express');
const cors = require("cors");
const bodyParser = require('body-parser');
// const routes = require('./routes/routes.js');
const { uuid } = require('uuidv4');
const app = express();

const PORT = 3333;
const HOST = "0.0.0.0";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use('/api/');

const pizzas = [
  { name: 'Basca', flavor: 'meat and vegetables', price: 50.40 },
  { name: 'Pepperoni', flavor: 'Pepperoni and herbs', price: 44.70 }
];

const validateId = (req, res, next) => {
  const { id } = req.params;

  const index = pizzas.findIndex((pizza) => pizza.id === id);

  if (index < 0) {
    return res.status(400).json({ message: "Pizza not found" });
  }

  res.index = index;

  return next();
}

app.get('/pizzas', (req, res) => {
  return res(pizzas);
});

app.post('/pizzas', (req, res) => {
  const { name, flavor, price } = req.body;

  const payload = {
    id: uuid(),
    name,
    flavor,
    price,
  };

  pizzas.push(payload);
  return res(payload);
});

app.put('/pizzas/:id', validateId, (req, res) => {
  const { index } = res
  const { name, flavor, price } = req.body

  const payload = {
    ...pizzas[index],
    name,
    flavor,
    price,
  };

  pizzas[index] = payload;

  return res(payload);
});

app.delete('/pizzas/:id', validateId, (req, res) => {
  const { index } = res
  pizzas.splice(index, 1);
  return res.status(204);
});

app.listen(PORT, HOST);