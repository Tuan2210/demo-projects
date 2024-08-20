import axios from "axios";

const api = axios.create({
  baseURL: "/api", // use proxy in vite config
});

export default api;
