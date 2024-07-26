import { defineMock } from 'vite-plugin-mock-dev-server';
import { formatMock } from './login.mock';

export default defineMock(
  formatMock([
    {
      url: '/leagues',
      body: [
        {
          id: '1',
          key: '1',
          name: 'Mike',
          date: 'Date',
          pramoterName: 'Mike',
          location: '10 Downing Street',
          edit: 1,
        },
        {
          id: '2',
          key: '2',

          date: 'Date',
          name: 'John',
          pramoterName: 32,
          location: '10 Downing Street',
          edit: 2,
        },
        {
          id: '3',
          key: '3',
          name: 'Mike',
          date: 'Date',
          pramoterName: 'Mike',
          location: '10 Downing Street',
          past: true,
        },
      ],
    },
  ]),
);
