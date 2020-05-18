# nodejs-docker

- A basic example to create an api with [Nodejs](https://nodejs.org/en/) and containering with [Docker](https://www.docker.com/).

- Pizza API. :P

## Docker

- On command line, do as follow:

```sh
$ sudo docker build # > rebuild image
```

```sh
$ sudo docker-compose up # > up container
```

## Packages

- uuidv4;
- nodemon;
- express;
- cors;
- body-parser;

## HTTP methods

- GET
- POST
- PUT
- DELETE

## API Reference

All requests require a key parameter, eg `/api/`

---

|Endpoint|Method|
|:--|:--|
|/api/pizzas|GET|

Sample Response
```json
[
  { "name": "Basca", "flavor": "meat and vegetables", "price": 50.40 },
  { "name": "Pepperoni", "flavor": "Pepperoni and herbs", "price": 44.70 }
]
```
---
|Endpoint|Method|
|:--|:--|
|/api/pizzas|POST|

Sample Response
```json
{
  "id": "uuid()",
  "name": "Pepperoni",
  "flavor": "Pepperoni and herbs",
  "price": 44.70
}
```
---

|Endpoint|Method|
|:--|:--|
|/api/pizzas/:id|PUT|

Sample Response
```json
{
  "id": "uuid()",
  "name": "Chesse",
  "flavor": "Cheese and Pepperoni",
  "price": 51.20
}
```
---

|Endpoint|Method|
|:--|:--|
|/api/pizzas/:id|DELETE|

Sample Response
```json
{
  "status": 204
}
```