import React, { ReactNode, useContext, useEffect, useState } from "react";
import catFishProduct from "../assets/png/catfDryFish.png";
import {
  getProductFromParentId,
  getProducts,
} from "../services/ProductService";

const ProductContext = React.createContext({});

export function ProductContextProvider(props: { children: ReactNode }) {
  const [state, setState] = useState({
    data: [],
    page: 1,
    pages: 1,
    total: 1,
  });
  const [loading, setLoading] = useState(true);
  const [size, setSize]: any = useState(null);
  const [selectedProduct, setSelectedProduct]: any = useState({});
  const [quantity, setQuantity] = useState(1);
  const [subProducts, setSubProducts]: any = useState([]);

  //get all the products from api
  useEffect(() => {
    getProducts().then((res) => {
      setLoading(false);
      setState({ ...state, ...res });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getProductFromParentId(selectedProduct?.id).then((res) => {
      console.log("res", res);
      setSubProducts(res);
    });
  }, [selectedProduct]);
  const productImages: string[] | undefined = [
    catFishProduct,
    catFishProduct,
    catFishProduct,
  ];

  const onPlus = () => {
    setQuantity((q) => q + 1);
  };
  const onMinus = () => {
    if (quantity > 1) {
      setQuantity((q) => q - 1);
    }
  };

  const onSizeChange = (e: { [key: string]: any }) => {
    console.log(e.target.value, subProducts);
    const prodId = e.target.value;
    const prods = subProducts?.data;
    const prod = prods?.length
      ? prods?.find((p: any) => {
          console.log("p", p.id, prodId, p.id === prodId);
          return p.id === prodId;
        })
      : null;
    console.log("prod", prod);
    setSize(prod);
  };
  const onClickProduct = (p: { [key: string]: string }) => {
    setLoading(true);
    setTimeout(() => {
      setSelectedProduct(p);
      setLoading(false);
    }, 1000);
    console.log("p ", p);
  };

  const value = {
    ...state,
    productImages,
    loading,
    quantity,
    onSizeChange,
    onClickProduct,
    subProducts,
    selectedProduct,
    onPlus,
    onMinus,
    size,
  };

  return (
    <ProductContext.Provider value={value}>
      {props.children}
    </ProductContext.Provider>
  );
}

export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (!context) {
    return "Please wrap your component in the context provider";
  } else {
    return context;
  }
};
export default ProductContextProvider;
