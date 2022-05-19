const { Router } = require('express');

const { postLogin } = require('../controllers/login.controller');

const router = Router();

router.post('/', postLogin);

router.use((request, response) =>
  response
    .status(404)
    .json({ message: 'Nie znaleziono żądanej metody dla endpointu /login' })
);

module.exports = router;
