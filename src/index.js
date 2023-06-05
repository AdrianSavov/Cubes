const express = require('express');
const app = express();
const PORT = 5000;

const expressConfig = require('./config/expressConfig');
const handlebarsConfig = require('./config/handlebarsConfig');
const dbConnect = require('./config/mongooseConfig');
const routes = require('./routes');

expressConfig(app);
handlebarsConfig(app);

dbConnect()
.then(() => console.log('DB connected successfuly'))
.catch(err => {
    console.log('DB error:', err.message);
})

app.use(routes)
app.listen(PORT, () => console.log('Server is listening...'))

