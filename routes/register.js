const { Router } = require('express');

const { putRegister } = require('../controllers/register.controller');

const router = Router();

router.put('/', putRegister);

router.use((request, response) =>
  response
    .status(404)
    .json({ message: 'Nie znaleziono żądanej metody dla endpointu /register' })
);

module.exports = router;
