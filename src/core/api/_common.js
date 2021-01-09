import axios from 'axios';

export const api = axios.create({
  baseURL: process.env.REACT_APP_API_HOST,
  timeout: 120000,
  withCredentials: true,
});