import React from "react";
import { client } from "../configs/client";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "../core/hook";
import { notifySuccess, notifyError, ToastBox } from "../helper/toastify";

let drag = 0;

export default function ProductList() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    async function fetchData() {
      dispatch({
        type: "loading/show",
      });
      const { data, response } = await client.get(`/products?limit=8`);
      if (!response.ok) {
        localStorage.clear();
        window.location.reload();
      }
      const { data: profile } = await client.get(`/users/profile`);
      localStorage.setItem("username", profile.data.emailId.name);
      dispatch({
        type: "loading/hidden",
      });
      setProductList(data.data.listProduct);
      if (drag === 0) {
        notifySuccess(`Chào mừng bạn ${profile.data.emailId.name}`);
        drag++;
      }
    }
    fetchData();
  }, []);

  // us

  const handleAddCart = (productId) => {
    const checkCart = cart.find((item) => item.id === productId);
    if (!checkCart) {
      const product = productList.find((item) => item._id === productId);
      const newCart = [
        ...cart,
        {
          id: product._id,
          name: product.name,
          price: product.price,
          quantity: 1,
          left: product.quantity - 1,
        },
      ];
      localStorage.setItem("cart", JSON.stringify(newCart));
      dispatch({
        type: "cart/add",
        payload: newCart,
      });
    } else {
      const newCart = cart.map((item) => {
        if (item.id === productId) {
          return {
            id: item.id,
            name: item.name,
            price: item.price,
            quantity: item.quantity + 1,
            left: item.left - 1,
          };
        } else {
          return item;
        }
      });
      localStorage.setItem("cart", JSON.stringify(newCart));
      dispatch({
        type: "cart/add",
        payload: newCart,
      });
    }
    notifySuccess("Thêm sản phẩm vào giỏ hàng thành công");
  };

  return (
    <div className="product-list">
      <ul>
        {productList &&
          productList.map((productItem, index) => {
            return (
              <li className="product-item" key={index + 1}>
                <div className="product-img">
                  <img src={productItem.image} alt="" />
                </div>
                <div className="product-detail">
                  <h3 className="product-name">{productItem.name}</h3>
                  <div>
                    <span className="price">${productItem.price}</span>
                    <button
                      className="btn-add-cart"
                      id={productItem._id}
                      onClick={(e) => {
                        handleAddCart(e.target.id);
                      }}
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              </li>
            );
          })}
      </ul>
      <ToastBox />
    </div>
  );
}
