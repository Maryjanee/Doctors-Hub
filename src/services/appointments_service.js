import { securedAxios, handleError } from './axios';

export default class AppointmentService {
  static async getAppointment() {
    try {
      const { data } = await securedAxios.get('/appointments');
      return data;
    } catch (err) {
      const handledError = handleError(err);
      throw handledError;
    }
  }
}
