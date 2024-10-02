import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: "https://airbnb-yfut.onrender.com/",
  withCredentials: true,
});

export default axiosInstance;
