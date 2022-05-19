const { createUser } = require('../services/createUser');

exports.putRegister = (request, response) => {
  try {
    const { login, password } = request.body;
    const user = createUser(login, password);

    if (!user) {
      return response.status(409).json({
        message: 'Użytkownik o podanym loginie już istnieje',
      });
    }

    return response.status(201).json({
      message: 'Ok',
      user,
    });
  } catch (error) {
    return response.status(500).json({
      error,
      message: 'Coś poszło nie tak w metodzie PUT endpointu /register',
    });
  }
};
