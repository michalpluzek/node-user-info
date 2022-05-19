const { getUserFromDatabase } = require('../services/getUserFromDatabase');

exports.postLogin = (request, response) => {
  try {
    const { login, password } = request.body;
    const user = { ...getUserFromDatabase(login) };

    if (!user || (user && user.password !== password)) {
      return response.status(401).json({
        message: 'Błędny login lub hasło',
      });
    }

    delete user.password;

    return response.status(200).json({
      user,
    });
  } catch (error) {
    return response.status(500).json({
      error,
      message:
        'Wystpił błąd podczas wykonywania żądania POST w endpoincie /login',
    });
  }
};
