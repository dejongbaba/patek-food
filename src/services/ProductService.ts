import { GET, PRODUCT_CONFIG } from "../config/Api";

export const getProducts = () => {
  return GET(`product`, PRODUCT_CONFIG).then((res) => res.data);
};

export const getProduct = (id: string) => {
  return GET(`product/${id}`, PRODUCT_CONFIG).then((res) => res.data);
};
export const getProductFromParentId = (id: string) => {
  return GET(`product?parent_id=${id}`, PRODUCT_CONFIG).then((res) => res.data);
};
