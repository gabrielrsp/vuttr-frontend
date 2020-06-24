import axios from 'axios';

const api = axios.create({
  baseURL: 'https://apivuttr.work'
});

export default api;
