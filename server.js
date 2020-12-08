'use strict';

require('dotenv').config();
const express = require('express');
const app = express();

// const PORT = process.env.PORT || 3000;

const notFoundHandler = require('./handlers/404');
const errorHandler = require('./handlers/500');

app.get('/', renderHome);
app.get('/data', renderData);
app.get('/bad', (req, res, next) => {
  next('you messed up');
});

app.use(errorHandler);
app.use('*',notFoundHandler);

function renderHome(request, response){
  response.status(200).send('Hello World');
}
function renderData(request,response,next){
  const carObj = {
    color: "red",
    style: "sport",
    model: "Aventador",
    make: "Lamborghini",
    speed:"fast",
    "time": new Date()
  };

  response.status(200).json(carObj);

}

function start(port){
  app.listen(port, () => console.log(`Dragons rawring on ${port}`));
}
module.exports = {
  app: app,
  start: start
};
