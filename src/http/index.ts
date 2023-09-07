import axios, { AxiosInstance } from "axios";

const httpClient: AxiosInstance = axios.create({
  baseURL: "https://your-way-tracker.vercel.app/",
  headers: {
    "Content-type": "application/json",
  },
});

export default httpClient;