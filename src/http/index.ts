import axios, { AxiosInstance } from "axios";

const httpClient: AxiosInstance = axios.create({
  baseURL: "https://register-api-chi.vercel.app/",
  headers: {
    "Content-type": "application/json",
  },
});

export default httpClient;