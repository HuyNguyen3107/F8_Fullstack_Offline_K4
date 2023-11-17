import React from "react";
import { useDispatch, useSelector } from "../core/hook";
import { client } from "../configs/client";
import { ToastBox, notifySuccess, notifyError } from "../helper/toastify";

export default function CartProduct() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handlePay = async () => {
    const arrInfoPay = cart.map((item) => {
      return {
        productId: item.id,
        quantity: item.quantity,
      };
    });
    dispatch({
      type: "loading/show",
    });
    const { response } = await client.post(`/orders`, arrInfoPay);
    dispatch({
      type: "loading/hidden",
    });
    if (response.ok) {
      localStorage.removeItem("cart");
      dispatch({
        type: "cart/pay",
      });
      notifySuccess("Thanh toán thành công");
    } else {
      localStorage.clear();
      window.location.reload();
    }
  };

  return (
    <div className="cart-product">
      <table className="cart-detail" cellPadding={0} cellSpacing={0} border={0}>
        <thead>
          <tr>
            <th width={`40%`}>Tên sản phẩm</th>
            <th width={`20%`}>Số lượng</th>
            <th width={`20%`}>Còn lại</th>
            <th width={`20%`}>Tổng tiền</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => {
            return (
              <tr key={item.id}>
                <td className="item-name">{item.name}</td>
                <td className="item-quantity">{item.quantity}</td>
                <td className="item-left">{item.left}</td>
                <td className="item-price">{item.price * item.quantity}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button className="btn-pay" onClick={handlePay}>
        Thanh toán
      </button>
      <ToastBox />
    </div>
  );
}
