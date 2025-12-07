import axios from "axios";

console.log(import.meta.env.VITE_API_URL_PRODUCTION, "uri")

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL_PRODUCTION,
  withCredentials: false // add only if you ever use cookies
});

export default api;
