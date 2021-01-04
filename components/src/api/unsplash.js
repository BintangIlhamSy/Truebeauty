import axios from 'axios';

export default axios.create({
  headers: {
    Authorization: 'Client-ID w6yAvt8kvkVO7R7T_9c8KHjmFca9zNNo7FSHtP-e2Ew',
  },
  baseURL: 'https://api.unsplash.com',
});
