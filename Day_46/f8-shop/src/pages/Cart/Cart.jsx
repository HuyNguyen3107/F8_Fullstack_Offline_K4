import React from "react";
import "./Cart.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { cartSlice } from "../../redux/slice/cartSlice";

const { decrement, add, remove } = cartSlice.actions;

function Cart() {
  const cart = useSelector((state) => state.cart.cart);
  const handleIncrement = (id) => {};
  const handleDecrement = (id) => {};
  return (
    <div className="cart">
      <h3>SHOPPING CART</h3>
      <div className="cart-product-list">
        {cart.map((item, index) => {
          return (
            <div className="cart-product" key={index + 1}>
              <div className="cart-product-info">
                <div className="cart-product-img">
                  <img src="https://picsum.photos/150/100" alt="" />
                </div>
                <div>
                  <div>
                    <div className="cart-product-brand">{item.brand}</div>
                    <div className="cart-product-name">{item.name}</div>
                  </div>
                  <span className="cart-product-price">${item.price}</span>
                </div>
              </div>
              <span className="rest-quantity">Rest: {item.amount}</span>
              <div className="cart-edit">
                <div className="quantity-change">
                  <button className="decrease" onClick={handleDecrement}>
                    -
                  </button>
                  <input type="text" defaultValue={item.quantity} />
                  <button className="increase" onClick={handleIncrement}>
                    +
                  </button>
                </div>
                <div>
                  <div className="product-price">
                    ${item.price * item.quantity}
                  </div>
                  <i className="pi pi-trash"></i>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <span className="total-price">Total Price: $9999999</span>
      <div>
        <Link to={"/"}>
          <button className="btn-home-page">Go Home</button>
        </Link>
        <button className="btn-checkout">Checkout</button>
      </div>
    </div>
  );
}

export default Cart;
