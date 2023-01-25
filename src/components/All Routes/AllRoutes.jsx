import { Route, Routes } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import React from "react";
import Home from "../Home/Home";
import Products from "../Products/Products";

import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import Address from "../Address/Address";
import Payment from "../Payment/Payment";
import Summary from "../Summary/Summary";
import Profile from "../Profile/Profile";
import Login from "../Profile/Login";
import Footer from "../Footer/Footer";
import Checkout from "../Checkout/Checkout";

export default function AllRoutes() {
  return (
    <>
      <Navbar />
      <Routes>
     0    <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product" element={<Product />} />
        <Route path="/products/:type" element={<Products />} />
      <Route path="/product/:id" element={<Product />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/checkout/cart" element={
            <>
              <Checkout />
              <Cart />
            </>
          }
        />
        <Route
          path="/checkout/address"
          element={
            <>
              <Checkout />
              <Address />
            </>
          }
        />
        <Route
          path="/checkout/payment"
          element={
            <>
              <Checkout />
              <Payment />
            </>
          }
        />
        <Route
          path="/checkout/summary"
          element={
            <>
              <Checkout />
              <Summary />
            </>
          }
        />
      </Routes>

      <Footer />
    </>
  );
}
