const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/hola-mundo', (req, res) => {
    res.send('Hello World, en su ruta');
});

app.listen(3000);
