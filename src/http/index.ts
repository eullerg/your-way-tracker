import axios, { AxiosInstance } from "axios";

const httpClient: AxiosInstance = axios.create({
  baseURL: "https://register-api-rosy.vercel.app/",
  headers: {
    "Content-type": "application/json",
  },
});

export default httpClient;