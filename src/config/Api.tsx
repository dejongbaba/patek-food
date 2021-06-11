import axios from "axios";

const url = process.env.REACT_APP_URL;
const auth_url = process.env.REACT_APP_AUTH_URL;
const data_url = process.env.REACT_APP_DATA_URL;

export const GET = (endpoint: string) => {
  return axios.get(`${url}${endpoint}`);
};
export const GET_AUTH = (endpoint: string) => {
  return axios.get(`${auth_url}${endpoint}`);
};

export const POST = (endpoint: string, data: any) => {
  return axios.post(`${url}${endpoint}`, data);
};
export const POST_DATA = (endpoint: string, data: any, config: any) => {
  return axios.post(`${data_url}${endpoint}`, data, config);
};

export const AUTH_POST = (endpoint: string, data: any) => {
  return axios.post(`${auth_url}${endpoint}`, data);
};

export const PUT = (endpoint: string, data: any) => {
  return axios.put(`${url}${endpoint}`, data);
};
export const AUTH_PUT = (endpoint: string, data: any) => {
  return axios.put(`${auth_url}${endpoint}`, data);
};
