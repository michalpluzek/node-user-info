const express = require('express');
const { json, urlencoded } = require('body-parser');
const cors = require('cors');

const server = express();

server.use(cors());
server.use(json());
server.use(urlencoded({ extended: true }));

server.listen(8000, () => console.log('Server wystartował'));
