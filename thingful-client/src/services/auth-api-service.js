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
}

export default AuthApiService;