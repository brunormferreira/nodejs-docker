# nodejs-docker

<p align="center">
  <img src="https://d262ilb51hltx0.cloudfront.net/max/1600/1*_MtS4HqN2srTcrSyet61DQ.jpeg" width="700">
  <div align="center">
  <a href="https://insomnia.rest/run/"><img src="https://img.shields.io/badge/insomnia-run--in--insomnia-purple.svg?logo=insomnia&style=flat-square&color=6a57d5" alt="run-in-insomnia" /></a>
  <img src="https://camo.githubusercontent.com/2485e7b2f51f9b6bd3e5e216cb2bd1c159cd21b4/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f636f7665726167652d3130302532352d677265656e2e737667" alt="100% coverage" />
  <img src="https://img.shields.io/github/stars/brunormferreira/nodejs-docker?style=social" alt="stars" />
  </div>
</p>

- A basic example to create an api with [Nodejs](https://nodejs.org/en/) and containering with [Docker](https://www.docker.com/).

- Tests API Calls with [Insomnia REST Client](https://insomnia.rest/).

- Pizza API. :P


## Table of Contents

- [Docker](#docker)
- [Packages](#packages)
- [HTTP Methods](#http-methods)
- [API Reference](#api-reference)

## Docker

- On command line, do as follow:

```sh
$ sudo docker build # > rebuild image
```

```sh
$ sudo docker-compose up # > up container
```

- Or run only

```sh
$ docker-compose up --build
```

## Packages

- uuidv4;
- nodemon;
- express;
- cors;

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
  "id": "01dac858-cf38-4b8a-885d-ad2af6c03653",
  "name": "Pepperoni",
  "flavor": "Pepperoni and herbs",
  "price": 44.80
}
```
---

|Endpoint|Method|
|:--|:--|
|/api/pizzas/:id|PUT|

Sample Response
```json
{
  "id": "01dac858-cf38-4b8a-885d-ad2af6c03653",
  "name": "Chesse",
  "flavor": "Cheese and Pepperoni",
  "price": 51.20
}
```
---

|Endpoint|Method|
|:--|:--|
|/api/pizzas/:id|DELETE|

No Response
```js
Only status 204.
```
