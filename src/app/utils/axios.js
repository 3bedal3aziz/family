// utils/axios.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://your-base-url.com', // Replace with your base URL
});

export default instance;