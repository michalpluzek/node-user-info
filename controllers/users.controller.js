const { getUserFromDatabase } = require('../services/getUserFromDatabase');
const {
  getAllUsersFromDatabase,
} = require('../services/getAllUsersFromDatabase');

exports.getUser = (request, response) => {
  try {
    const { login } = request.params;
    const user = getUserFromDatabase(login);

    if (!user) {
      return response.status(404).json({
        message: 'Nie znaleziono użytkownika o podanym loginie',
      });
    }

    return response.status(200).json({
      login: user.login,
      accessLevel: user.accessLevel,
    });
  } catch (error) {
    return response.status(500).json({
      error,
      message:
        'Wystpił błąd podczas wykonywania żądania GET w endpoincie /users',
    });
  }
};

exports.getUsers = (request, response) => {
  try {
    const users = getAllUsersFromDatabase();

    if (users.length === 0) {
      return response.status(404).json({
        message: 'Nie znaleziono użytkowników',
      });
    }

    return response.status(200).json({
      users,
    });
  } catch (error) {
    return response.status(500).json({
      error,
      message:
        'Wystpił błąd podczas wykonywania żądania GET w endpoincie /users',
    });
  }
};
