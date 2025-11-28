import axios from "axios";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;
console.log("BASE_URL", BASE_URL);
export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true, // send cookies with the request
});
