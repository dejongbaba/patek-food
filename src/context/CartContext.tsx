import React, { ReactNode, useContext, useReducer, useState } from "react";
import catFishProduct from "../assets/png/catfDryFish.png";
import { CartAction, CartInitialState, ObjProp } from "../type";
import { initOrder, payOrder, verifyOrder } from "../services/OrderService";
import { AppearanceTypes, useToasts } from "react-toast-notifications";
import { useHistory } from "react-router";

const CartContext = React.createContext({});

const Storage = (cartItems: { [key: string]: any }) => {
  localStorage.setItem("cart", JSON.stringify(cartItems));
};
const retrieveCart = () => {
  const items = localStorage.getItem("cart");
  if (items) {
    return JSON.parse(items);
  }
  console.log("initial state", initialState);
  return initialState;
};

const initialState: CartInitialState = {
  cartItems: [],
  totalItems: 0,
  total: 0,
};

export const sumItems = (cartItems: Array<any>) => {
  let itemCount = cartItems.reduce(
    (total: number, product: { [key: string]: string }) =>
      total + product.quantity,
    0
  );
  let total = cartItems
    .reduce((total, product) => total + product.amount * product.quantity, 0)
    .toFixed(2);

  Storage({ cartItems, itemCount, total });

  return { itemCount, total };
};

enum cartActions {
  ADD_ITEM = "ADD_ITEM",
  REMOVE_ITEM = "REMOVE_ITEM",
  INCREASE = "INCREASE",
  DECREASE = "DECREASE",
  CHECKOUT = "CHECKOUT",
  CLEAR = "CLEAR",
}

const CartReducer = (state: CartInitialState, action: CartAction) => {
  switch (action.type) {
    case cartActions.ADD_ITEM:
      const prod = state?.cartItems?.find(
        (item: { [key: string]: string }) => item.id === action.payload.id
      );
      if (!prod) {
        state?.cartItems?.push({
          ...action.payload,
        });
      } else {
        const newCart = [...state.cartItems];
        const index = newCart.findIndex((p) => p.id === prod.id);
        newCart[index] = {
          ...prod,
          quantity: prod.quantity + action.payload.quantity,
        };

        return { ...state, ...sumItems(newCart), cartItems: [...newCart] };
      }

      return {
        ...state,
        ...sumItems(state.cartItems),
        cartItems: [...state.cartItems],
      };

    case cartActions.REMOVE_ITEM:
      return {
        ...state,
        ...sumItems(
          state.cartItems.filter(
            (item: ObjProp) => item.id !== action.payload.id
          )
        ),
        cartItems: [
          ...state.cartItems.filter(
            (item: ObjProp) => item.id !== action.payload.id
          ),
        ],
      };
    case cartActions.INCREASE:
      state.cartItems[
        state.cartItems.findIndex(
          (item: ObjProp) => item.id === action.payload.id
        )
      ].quantity++;
      return {
        ...state,
        ...sumItems(state.cartItems),
        cartItems: [...state.cartItems],
      };
    case cartActions.DECREASE:
      state.cartItems[
        state.cartItems.findIndex(
          (item: ObjProp) => item.id === action.payload.id
        )
      ].quantity--;
      return {
        ...state,
        ...sumItems(state.cartItems),
        cartItems: [...state.cartItems],
      };
    case cartActions.CHECKOUT:
      return {
        cartItems: [],
        checkout: true,
        ...sumItems([]),
      };
    case cartActions.CLEAR:
      return {
        cartItems: [],
        ...sumItems([]),
      };
    default:
      return state;
  }
};

export function CartContextProvider(props: { children: ReactNode }) {
  // @ts-ignore
  const [state, dispatch] = useReducer(CartReducer, retrieveCart());
  const { addToast } = useToasts();
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [paymentUrl, setPaymentUrl] = useState("");
  const [email, setEmail] = useState("");
  const [orderId, setOrderId] = useState("");
  const history = useHistory();

  const onCloseModal = () => {
    setShow(!show);
  };

  const productImages: string[] | undefined = [
    catFishProduct,
    catFishProduct,
    catFishProduct,
  ];

  const onChangeEmail = (e: any) => {
    setEmail(e.target.value);
  };

  const onAddItem = (prod: any, quantity: number) => {
    // @ts-ignore
    dispatch({ type: cartActions.ADD_ITEM, payload: { ...prod, quantity } });
    toastMessage(`${quantity} items added to cart`, "success");
  };

  const toastMessage = (content: string, type: AppearanceTypes | undefined) => {
    addToast(content, {
      appearance: type,
      autoDismiss: true,
    });
  };

  const onRemoveItem = (prod: any) => {
    // @ts-ignore
    dispatch({ type: cartActions.REMOVE_ITEM, payload: prod });
    toastMessage(`${prod.quantity} items removed from cart`, "success");
  };

  // you can call this function anything
  const handleSuccess = (reference: any) => {
    // Implementation for whatever you want to do with reference and after success call.
    console.log(reference);
    setShow(false);
    // @ts-ignore
    dispatch({ type: cartActions.CLEAR, payload: {} });
    history.push("/order/" + orderId);
    toastMessage(`A Payment Reference has been sent to your email`, "success");
  };

  // you can call this function anything
  const handleClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log("closed");
    toastMessage(`Closed Payment`, "success");
  };

  const payStackProps = {
    email,
    amount: state.total * 100,
    publicKey: process.env.REACT_APP_PAYSTACK_SK_KEY,
    onSuccess: (reference: any) => handleSuccess(reference),
    onClose: handleClose,
  };

  const productWithIds = (products: Array<any>) => {
    return products?.length
      ? products.map((p) => {
          return { id: p.id, quantity: p.quantity };
        })
      : [];
  };
  const onCheckout = (initializePayment: any) => {
    setLoading(true);
    const products = productWithIds(state.cartItems);

    const pl = {
      productId: products,
      amount: state.total * 100,
      email,
    };
    initOrder(pl)
      .then((res) => {
        return verifyOrder(res?.data?.id);
      })
      .then((res) => {
        // @ts-ignore
        delete pl.productId;
        setOrderId(res?.data?.[0]?.id);
        return payOrder(res?.data?.[0]?.id, {
          ...pl,
          userId: res?.data?.[0]?.userId,
        });
      })
      .then((res) => {
        setLoading(false);
        setPaymentUrl(res?.url);
        initializePayment(handleSuccess, handleClose);
      })
      .catch((e) => console.log(e));
  };

  const value = {
    ...state,
    productImages,
    onAddItem,
    onRemoveItem,
    onCloseModal,
    show,
    loading,
    paymentUrl,
    email,
    onChangeEmail,
    onCheckout,
    payStackProps,
    handleClose,
    handleSuccess,
  };

  console.log("log", value);

  return (
    <CartContext.Provider value={value}>{props.children}</CartContext.Provider>
  );
}

export const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) {
    return "Please wrap your component in the context provider";
  } else {
    return context;
  }
};

export default CartContextProvider;
