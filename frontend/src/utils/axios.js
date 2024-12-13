import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000/', // Adjust the URL if your backend runs on a different port
});

export default axiosInstance;
