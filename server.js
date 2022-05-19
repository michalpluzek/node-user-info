const express = require('express');
const { json, urlencoded } = require('body-parser');
const cors = require('cors');

const registerRoutes = require('./routes/register');

const server = express();

server.use(cors());
server.use(json());
server.use(urlencoded({ extended: true }));

server.use('/register', registerRoutes);

server.listen(8000, () => console.log('Server wystartował'));
