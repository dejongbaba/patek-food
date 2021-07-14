import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Services from "./Pages/Services/Services";
import Contact from "./Pages/Contact/Contact";
import Product from "./Pages/Product/Product";
import "./index.css";
import "./responsive.css";
import { ToastProvider } from "react-toast-notifications";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { ProductContextProvider } from "./context/ProductContext";
import CartContextProvider from "./context/CartContext";
import Order from "./Pages/Order/Order";
import Spinner from "./Components/Spinner/Spinner";

function App() {
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    window.addEventListener("load", () => {
      setLoader(false);
    });
  }, []);

  if (loader) {
    return (
      <div className="mh-100-vh page-loader position-fixed bg-light-yellow w-100 d-flex align-center justify-center ">
        <Spinner />
      </div>
    );
  }

  return (
    <>
      <ToastProvider>
        <ProductContextProvider>
          <CartContextProvider>
            <Router>
              <Switch>
                <ScrollToTop>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/about" component={About} />
                  <Route exact path="/order/:id" component={Order} />
                  <Route exact path="/services" component={Services} />
                  <Route exact path="/contact" component={Contact} />
                  <Route exact path="/products" component={Product} />
                </ScrollToTop>
              </Switch>
            </Router>
          </CartContextProvider>
        </ProductContextProvider>
      </ToastProvider>
    </>
  );
}

export default App;
