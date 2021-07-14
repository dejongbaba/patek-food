import axios from "axios";

const product_url = process.env.REACT_APP_URL;
const order_url = process.env.REACT_APP_ORDER_URL;
const email_url = process.env.REACT_APP_EMAIL_URL;

console.log("product", product_url, order_url);
const secret = process.env.REACT_APP_PATEK_CLIENT_SECRET;
const clientId = process.env.REACT_APP_PATEK_CLIENT_ID;

//setting up instances
const productAxios = axios.create({ baseURL: product_url });
const orderAxios = axios.create({ baseURL: order_url });
const emailAxios = axios.create({ baseURL: email_url });

//setting headers
productAxios.defaults.headers.common["client-id"] = clientId;
productAxios.defaults.headers.common["client-secret"] = secret;
orderAxios.defaults.headers.common["client-id"] = clientId;
orderAxios.defaults.headers.common["client-secret"] = secret;
emailAxios.defaults.headers.common["client-id"] = clientId;
emailAxios.defaults.headers.common["client-secret"] = secret;

//service type
export const PRODUCT_CONFIG = "product";
export const ORDER_CONFIG = "order";
export const EMAIL_CONFIG = "email";

export const GET = (endpoint: string, type: string) => {
  if (type === PRODUCT_CONFIG) {
    return productAxios.get(`${endpoint}`);
  } else if (type === EMAIL_CONFIG) {
    return emailAxios.get(`${endpoint}`);
  }
  return orderAxios.get(`${endpoint}`);
};

export const POST = (endpoint: string, data: any, type: string) => {
  if (type === PRODUCT_CONFIG) {
    return productAxios.post(`${endpoint}`, data);
  } else if (type === EMAIL_CONFIG) {
    return emailAxios.post(`${endpoint}`, data);
  }
  return orderAxios.post(`${endpoint}`, data);
};

export const PUT = (endpoint: string, data: any, type: string) => {
  if (type === PRODUCT_CONFIG) {
    return productAxios.put(`${endpoint}`, data);
  } else if (type === EMAIL_CONFIG) {
    return emailAxios.put(`${endpoint}`, data);
  }
  return orderAxios.put(`${endpoint}`, data);
};
