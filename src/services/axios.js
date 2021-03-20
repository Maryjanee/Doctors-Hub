/* eslint-disable no-param-reassign */
// eslint-disable-next-line no-param-reassign
import axios from 'axios';

export default axios.create({
  baseURL: process.env.REACT_APP_BASE_URL || 'https://doctors-hub-api.herokuapp.com/api/v1',
});

export const securedAxios = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL || 'https://doctors-hub-api.herokuapp.com/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },
});

securedAxios.interceptors.request.use(config => {
  const method = config.method.toUpperCase();
  if (method !== 'OPTIONS') {
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${localStorage.getItem('auth-token')}`,
    };
  }
  return config;
});

export function handleError(error) {
  if (axios.isAxiosError(error)) {
    const { data, status } = error.response;
    return { error: data.error, status };
  }
  return { error: error.message, status: 500 };
}
