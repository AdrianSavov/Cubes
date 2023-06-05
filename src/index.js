const express = require('express');
const app = express();
const PORT = 5000;

const expressConfig = require('./config/expressConfig');
const handlebarsConfig = require('./config/handlebarsConfig');
const dbConnect = require('./config/mongooseConfig');
const routes = require('./routes');

app.use(routes)

dbConnect()
    .then(() => console.log('DB connected successfuly'))
    .catch(err => {
        console.log('DB error:', err);
    })

expressConfig(app);
handlebarsConfig(app);

app.listen(PORT, () => console.log('Server is listening...'))

