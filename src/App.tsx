import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Services from "./Pages/Services/Services";
import Contact from "./Pages/Contact/Contact";
import Product from "./Pages/Product/Product";
import "./index.css";
import "./responsive.css";
import { ToastProvider } from "react-toast-notifications";

function App() {
  return (
    <>
      <ToastProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/services" component={Services} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/products" component={Product} />
          </Switch>
        </Router>
      </ToastProvider>
    </>
  );
}

export default App;
