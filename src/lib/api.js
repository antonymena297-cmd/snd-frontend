import axios from "axios";

export const api = axios.create({
  baseURL: "https://snd-backend-a0zc.onrender.com"
});
