import { GET, ORDER_CONFIG, POST } from "../config/Api";

export const initOrder = (params: { [key: string]: any }) => {
  return POST(`order/init`, params, ORDER_CONFIG).then((res) => res.data.data);
};

export const verifyOrder = (id: string) => {
  return GET(`order/verify/${id}`, ORDER_CONFIG).then((res) => res.data.data);
};

export const payOrder = (id: string, param: { [key: string]: any }) => {
  return POST(`order/pay/${id}`, param, ORDER_CONFIG).then(
    (res) => res.data.data
  );
};
