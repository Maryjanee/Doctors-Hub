import axios, { handleError } from './axios';

export default class AuthService {
  static async signUp(userDetails) {
    try {
      const { data } = await axios.post('/users', userDetails);
      return data;
    } catch (err) {
      return handleError(err);
    }
  }

  static async login(loginDetails) {
    try {
      const { data } = await axios.post('/tokens', loginDetails);
      return data;
    } catch (err) {
      return handleError(err);
    }
  }
}
