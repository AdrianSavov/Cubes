const express = require('express');
const app = express();
const PORT = 5000;

const expressConfig = require('./config/expressConfig');
const handlebarsConfig = require('./config/handlebarsConfig');

expressConfig(app);
handlebarsConfig(app);

app.use('/', (req, res) => {
    res.render('index')
});

// app.use('/about', (req, res) => {
//     res.render('about')
// });

app.listen(PORT, () => console.log('Server is listening...'))

