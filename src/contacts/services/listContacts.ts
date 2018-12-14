import parameters from '@parameters/parameters';
import axios, { AxiosResponse } from 'axios';

type ContactsData = any;
const { apiUrl } = parameters;

export async function listContacts(): Promise<ContactsData> {
  return axios.get('contact/list', {
    baseURL: apiUrl
  });
}
