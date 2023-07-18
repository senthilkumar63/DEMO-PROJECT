/* eslint-disable no-undef */
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Products from "./Pages/Products";
import PageNotFound from "./Pages/PageNotFound";
import Login from "./Pages/Login";
import Cart from "./Pages/Cart";
import { Provider } from "react-redux";
import Store from "./Store/Store";
import ProductDetails from "./Pages/ProductDetails";

function App() {
  return (
    <>
      <div>
        <Provider store={Store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/*" element={<PageNotFound />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
        </Provider>
        
      </div>
    </>
  );
}

export default App;
