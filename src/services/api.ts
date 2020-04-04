/* eslint-disable no-param-reassign */
import axios, { AxiosRequestConfig } from 'axios';

const token = sessionStorage.getItem('token');

const { CancelToken } = axios;
export const abort = CancelToken.source();
export const api = axios.create({
  baseURL: 'http://localhost:4000',
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use((config: AxiosRequestConfig) => {
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
