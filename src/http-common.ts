import axios from "axios";

export const http = axios.create({
  baseURL: "https://api.tvmaze.com",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});
