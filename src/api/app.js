const express = require('express');
const UsersRoutes = require('./routes/Users');
const LoginRoutes = require('./routes/Login');
const RecipesRoutes = require('./routes/Recipes');
const middleware = require('./middlewares/middlewareError');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.use(bodyParser.json());
app.use('/images', express.static(path.join(__dirname, '..', 'uploads')));


app.use(express.json());
app.use('/users',UsersRoutes);
app.use('/login',LoginRoutes);
app.use('/recipes',RecipesRoutes);
app.use(middleware.error);
// Não remover esse end-point, ele é necessário para o avaliador
app.get('/', (request, response) => {
  response.send();
});
// Não remover esse end-point, ele é necessário para o avaliador

module.exports = app;
