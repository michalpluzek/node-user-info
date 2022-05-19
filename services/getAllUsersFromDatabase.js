const { users } = require('../models/User');

exports.getAllUsersFromDatabase = () =>
  users.map((user) => {
    const { login, accessLevel } = user;
    return { login, accessLevel };
  });
