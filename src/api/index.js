import axios from 'axios';

export default axios.create({
  baseURL: 'BASE_API_DOMAIN',
  timeout: 30000,
});
