import config from '../config';

const AuthApiService = {
  postLogin(credentials) {
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(credentials),
    };
    return fetch(`${config.API_ENDPOINT}/auth/login`, options)
      .then(res => {
        return (!res.ok) 
          ? res.json().then(e => Promise.reject(e))
          : res.json();
      });
  },
  postUser(user) {
    return fetch(`${config.API_ENDPOINT}/users`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user),
    })
      .then(resp => {
        return (!resp.ok)
          ? resp.json().then(e => Promise.reject(e))
          : resp.json();
      });
  },
}

export default AuthApiService;