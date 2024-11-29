import axios from 'axios';

const baseUrl = 'https://boasorte.teddybackoffice.com.br';

export const api = axios.create({
  baseURL: baseUrl,
});
