/* eslint-disable no-param-reassign */
// eslint-disable-next-line no-param-reassign
import axios from 'axios';

export default axios.create({
  baseURL: process.env.REACT_APP_BASE_URL || 'http://localhost:3001/api/v1',
});

export const securedAxios = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL || 'http://localhost:3001/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },
});

securedAxios.interceptors.request.use(config => {
  const method = config.method.toUpperCase();
  const token = localStorage.getItem('auth-token');

  if (!token) {
    window.location.reload();
    return false;
  }

  if (method !== 'OPTIONS') {
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${token}`,
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
