const express = require('express');
const app = express();
const PORT = 5000;

const expressConfig = require('./config/expressConfig');
const handlebarsConfig = require('./config/handlebarsConfig');

const homeController = require('./controllers/homeController');
const cubeController = require('./controllers/cubeController');


expressConfig(app);
handlebarsConfig(app);

app.use(homeController);
app.use('/cubes', cubeController);



app.listen(PORT, () => console.log('Server is listening...'))

