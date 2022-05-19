const { users } = require('../models/User');

exports.getUserFromDatabase = (login) => {
  const isUserExist = users.some((user) => user.login === login);
  const user = users.find((user) => user.login === login);

  if (!isUserExist) {
    return null;
  }

  return user;
};
