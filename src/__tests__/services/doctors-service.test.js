// import axios from 'axios';
// import DoctorsService from '../../services/doctors-service';

// /* eslint-disable no-use-before-define */
// jest.mock('axios', () => ({
//   create: jest.fn().mockImplementation(() => ({
//     get: jest.fn(),
//     post: jest.fn(),
//     put: jest.fn(),
//     patch: jest.fn(),
//     delete: jest.fn(),
//     interceptors: {
//       request: {
//         use: jest.fn(config => config),
//       },
//     },
//   })),
//   get: jest.fn(),
//   post: jest.fn(),
//   put: jest.fn(),
//   patch: jest.fn(),
//   delete: jest.fn(),
//   isAxiosError: jest.fn(error => {
//     console.log('error', error);
//     return true;
//   }),
// }));
// describe('DoctorsService', () => {
//   describe('getDoctors', () => {
//     beforeEach(() => {
//     });
//     test('fetches all doctors', async () => {
//       axios.create.mockImplementationOnce(() => ({
//         get: jest.fn(() => ({ data: [{ id: 1, doctor_name: 'Maryjane' }] })),
//       }));
//       let result;
//       try {
//         result = await DoctorsService.getDoctors();
//       } catch (err) {
//         console.log(err);
//       }
//       expect(result).toEqual([{ id: 1, doctor_name: 'Maryjane' }]);
//     });
//   });
// });
