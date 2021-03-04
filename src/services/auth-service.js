import axios from './axios';

export default class AuthService {
  static async signUp(userDetails) {
    try {
      const { data } = await axios.post('/users', userDetails);
      return data;
    } catch (err) {
      console.error(err);
      return err.data;
    }
  }
}
