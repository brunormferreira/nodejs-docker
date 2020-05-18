const express = require('express');
const cors = require('cors');
const { uuid } = require('uuidv4');
const app = express();

const PORT = 3333;
const HOST = '0.0.0.0';

app.use(express.json());
app.use(cors());

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

app.get('/api/pizzas', (req, res) => {
  return res.json(pizzas);
});

app.post('/api/pizzas', (req, res) => {
  const { name, flavor, price } = req.body;

  const payload = {
    id: uuid(),
    name,
    flavor,
    price,
  };

  pizzas.push(payload);
  return res.json(payload);
});

app.put('/api/pizzas/:id', validateId, (req, res) => {
  const { index } = res
  const { name, flavor, price } = req.body

  const payload = {
    ...pizzas[index],
    name,
    flavor,
    price,
  };

  pizzas[index] = payload;

  return res.json(payload);
});

app.delete('/api/pizzas/:id', validateId, (req, res) => {
  const { index } = res
  pizzas.splice(index, 1);
  return res.status(204).send();
});

app.listen(PORT, HOST, () => {
  console.log(`Server is listening on ${PORT} port`);
});