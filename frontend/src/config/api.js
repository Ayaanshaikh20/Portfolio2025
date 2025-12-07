import axios from "axios";

console.log(import.meta.env.VITE_API_URL, "uri")

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: false // add only if you ever use cookies
});

export default api;
