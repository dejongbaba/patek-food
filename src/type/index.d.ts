import { ContextType, MouseEventHandler } from "react";

export type ProductContextType = ContextType & {
  prod: Array;
  productImages: Array;
};
export type CartContextType = ContextType & {
  onAddItem: () => void;
  productImages: Array;
};

export type ProductAction = {
  type: "SET_LOADER" | "ADD_TO_CART" | "REMOVE_FROM_CART" | "GET_PRODUCTS";
  payload: { [key: string]: any };
};
export type CartAction = {
  type:
    | "ADD_TO_CART"
    | "REMOVE_FROM_CART"
    | "RESET_CART"
    | "ADD_ITEM"
    | "REMOVE_ITEM"
    | "DECREASE"
    | "CHECKOUT"
    | "CLEAR"
    | "INCREASE";
  payload: { [key: string]: any };
};
export type ProductInitialState = {
  products: Array;
  loading: boolean;
  cart: Array;
  total: number;
};

export type CartInitialState = {
  cartItems: Array;
  totalItems: number;
  total: number;
};

export type FooterProps = {
  onClickCart: MouseEventHandler<HTMLButtonElement>;
};

export type CartButtonProps = {
  onClick: MouseEventHandler<HTMLButtonElement>;
  cartItems: number;
};

export type ObjProp = { [key: string]: string };

export type CartItemProp = {
  type: string;
  quantity: number;
  title: string;
  price: number;
  image: string;
  onDelete: MouseEventHandler<HTMLElement>;
};
