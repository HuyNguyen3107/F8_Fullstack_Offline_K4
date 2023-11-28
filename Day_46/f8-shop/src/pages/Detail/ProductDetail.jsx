import React, { useEffect } from "react";
import "./ProductDetail.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getProductDetail } from "../../redux/middlewares/productMiddlewares";
import { useLocation } from "react-router-dom";

function ProductDetail() {
  const product = useSelector((state) => state.detail.productDetail);
  const dispatch = useDispatch();
  const location = useLocation();
  useEffect(() => {
    dispatch(
      getProductDetail(
        location.pathname.slice(location.pathname.lastIndexOf("/") + 1)
      )
    );
  }, []);

  return (
    <div className="product-detail-info">
      {console.log(product)}
      <div className="product-info-img">
        <img src={product.image} alt="" />
      </div>
      <div className="product-info">
        <h3 className="product-brand">{product.brand}</h3>
        <h4 className="product-info-name">{product.name}</h4>
        <p className="product-desc">{product.description}</p>
        <span className="product-category">Category: {product.category}</span>
        <div>
          <div>
            <Link to={"/"}>
              <button className="btn-go-home">Go Home</button>
            </Link>
          </div>
          <div>
            <span className="product-detail-price">${product.price}</span>
            <button className="btn-add-cart">Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
