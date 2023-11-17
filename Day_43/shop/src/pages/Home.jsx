import React from "react";
import "../assets/css/home.css";
import ProductList from "../components/ProductList";
import NoneCart from "../components/NoneCart";
import CartProduct from "../components/CartProduct";
import { useEffect } from "react";
import { client } from "../configs/client";
import Loading from "../components/Loading";
import { useSelector, useDispatch } from "../core/hook";
import { ToastBox, notifySuccess, notifyError } from "../helper/toastify";

export default function Home() {
  const isLoading = useSelector((state) => state.isLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("apiKey")) {
      client.setToken(localStorage.getItem("apiKey"));
    }
    if (JSON.parse(localStorage.getItem("cart"))) {
      dispatch({
        type: "cart/add",
        payload: JSON.parse(localStorage.getItem("cart")),
      });
    }
  }, []);
  return (
    <div className="container">
      <div className="shop">
        <h1>Welcome to HuyHTML's Shop</h1>
        <ProductList />
        {localStorage.getItem("cart") ? <CartProduct /> : <NoneCart />}
        <Loading isLoading={isLoading} />
        {/* <ToastBox /> */}
      </div>
    </div>
  );
}
