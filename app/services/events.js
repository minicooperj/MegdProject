import { apiEndpoint } from '../../config/app';
import createRestApiClient from '../utils/createRestApiClient';

export default () => {
  const client = createRestApiClient().withConfig({ baseURL: apiEndpoint });
  return {
    getEvents: () => client.request({
      method: 'GET',
      url: '/event'
    }),
    deleteEvent: ({ id }) => client.request({
      method: 'DELETE',
      url: `/event/${id}`
    }),
    updateEvent: ({ id, data }) => client.request({
      method: 'PUT',
      url: `/event/${id}`,
      data
    }),
    createEvent: ({ id, data }) => client.request({
      method: 'POST',
      url: `/event/${id}`,
      data
    })
  };
};
