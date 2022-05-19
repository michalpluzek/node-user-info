const { Router } = require('express');

const { getUser, getUsers } = require('../controllers/users.controller');

const router = Router();

router.get('/:login', getUser);
router.get('/', getUsers);

router.use((request, response) =>
  response
    .status(404)
    .json({ message: 'Nie znaleziono żądanej metody dla endpointu /users' })
);

module.exports = router;
