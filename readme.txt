Base url: http://localhost:8000

Endpoint: '/users/:login'

1. Metoda GET (pobranie użytkownika o loginie):

  responses:
    - status: 200, user(object)
    - status: 402, message: 'Nie znaleziono użytkownika o podanym loginie',
    - status: 404, message: 'Nie znaleziono żądanej metody dla endpointu /users'
    - status: 500, message: 'Wystpił błąd podczas wykonywania żądania GET w endpoincie /users/:login'

Endpoint: '/users

1. Metoda GET (pobranie wszystkich użytkowników):

  responses:
    - status: 200, user(object[])
    - status: 401, message: 'Nie znaleziono użytkowników',
    - status: 404, message: 'Nie znaleziono żądanej metody dla endpointu /users'
    - status: 500, message: 'Wystpił błąd podczas wykonywania żądania GET w endpoincie /users'

Endpoint: '/register'

1. Metoda PUT (przesłanie nowego użytkownika)
  body: {
    login: string,
    password: string,
  }

  responses:
    - status: 201, { message(string), user(object) }
    - status: 404, message: 'Nie znaleziono kursu o podanym id'
    - status: 409, message: 'Użytkownik o podanym loginie już istnieje'
    - status: 500, message: 'Coś poszło nie tak w metodzie PUT endpointu /register'

Endpoint: '/login'

1. Metoda POST (logowanie użytkownika)
  body: {
    login: string,
    password: string,
  }

  responses:
    - status: 401, message: 'Błędny login lub hasło'
    - status: 404, message: 'Nie znaleziono żądanej metody dla endpointu /login'
    - status: 201, user(object)
    - status: 500, message: 'Wystpił błąd podczas wykonywania żądania POST w endpoincie /login'

