import axios from 'axios';

const token = sessionStorage.getItem('token');

const api = axios.create({

  baseURL: 'http://localhost:4000',
  headers: {
    'Content-Type': 'application/json',
    authorization: token,
  },
});

export default api;
