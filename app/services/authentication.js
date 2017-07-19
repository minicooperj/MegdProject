import { apiEndpoint } from '../../config/app';
import createRestApiClient from '../utils/createRestApiClient';

export default () => {
  const client = createRestApiClient().withConfig({ baseURL: apiEndpoint });
  return {
    login: ({ email, password }) => client.request({
      method: 'POST',
      url: '/sessions',
      data: {
        email,
        password
      }
    }),
    signUp: ({ email, password, username, phone }) => client.request({
      method: 'POST',
      url: '/users',
      data: {
        email,
        password,
        username,
        phone
      }
    }),
    logOut: () => client.request({
      method: 'DELETE',
      url: '/sessions'
    })
  };
};
