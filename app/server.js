'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.set('view engine', 'pug');


app.get('/', (request, response) => {
  response.render('index', { title: 'Home', message: 'Welcome! This is the home page.' });
});

app.get('/user/:user_id', (request, response) => {
  response.send('<h1>User</h1>'+request.params.user_id);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
