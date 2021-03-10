import { securedAxios, handleError } from './axios';

export default class DoctorsService {
  static async getDoctors() {
    try {
      const { data } = await securedAxios.get('/doctors');
      return data;
    } catch (err) {
      const handledError = handleError(err);
      throw handledError;
    }
  }
}
