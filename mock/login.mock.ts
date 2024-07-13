import { defineMock } from 'vite-plugin-mock-dev-server';

const formatMock = (list) => {
  return list.map(({ url, body }) => ({ body, url: '/mock' + url }));
};

export default defineMock(
  formatMock([
    {
      url: '/login',
      body: { token: new Date().getTime() },
    },
    {
      url: '/verify-token',
      body: { user: { first_name: 'Mock', role: 1 } },
    },
    {
      url: '/logout',
      body: { user: {} },
    },
  ]),
);
