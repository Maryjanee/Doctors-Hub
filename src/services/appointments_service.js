import { securedAxios, handleError } from './axios';

export default class AppointmentService {
  static async getAppointment(userId) {
    try {
      const { data } = await securedAxios.get(`/appointments/${userId}`);
      return data;
    } catch (err) {
      const handledError = handleError(err);
      throw handledError;
    }
  }

  static async createAppointment(appointmentdetails) {
    try {
      const { data } = await securedAxios.post('/appointments', {
        ...appointmentdetails,
      });
      return data;
    } catch (error) {
      const handledError = handleError(error);
      throw handledError;
    }
  }
}
