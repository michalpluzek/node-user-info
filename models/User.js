const { accessLevels } = require('../consts/accessLevels');

exports.users = [
  {
    accessLevel: accessLevels.USER,
    login: 'Michal',
    password: '1234',
    budget: 5000,
  },
  {
    accessLevel: accessLevels.ADMIN,
    login: 'Kasia',
    password: '0000',
    budget: 10000,
  },
];

exports.User = class {
  constructor(login, password) {
    this.login = login;
    this.password = password;
    this.accessLevel = accessLevels.USER;
    this.budget = 0;
  }
};
