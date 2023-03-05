import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./productDetail.css";
import Ratings from "../rating/Ratings";
import { addToCart } from "../../../redux/actions/productAction";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ProductDetails = () => {
  const [detail, setDetail] = useState();
  const params = useParams();
  //get the id of product through the useParams
  let id = params.id;
  //getting data from the store throuh uesSelector
  const cartList = useSelector((state) => state.cartData);
  
 //   fetching the data with the help of get request
  const url = `https://dummyjson.com/products/${params.id}`;
  useEffect(() => {
    const fetch = async () => {
      const result = await axios.get(url);
      console.log("pd", result.data);
      setDetail(result.data);
    };
    fetch();
  }, []);
  const dispatch = useDispatch();

  const handleAddCart = () => {
    let flag = true;
    cartList?.forEach((val) => {
      if (val.id == id) {
        flag = false;
        // break;
      }
    });
    if (flag && detail.length!==0) {
      //dispatch the data to the cartlist
      dispatch(addToCart([detail, ...cartList]));
      toast(`${detail.title} is added to cart`);
    }
  };
  return (
    <>
      <div>
        <ToastContainer style={{ marginTop: "4rem" }} />
      </div>
      <div className="product-detail">
        <h3>Product Details</h3>
        <div className="row">
          <div className="col s12 ">
            <div className="card d-f">
              <div className="card-image">
                <img src={detail?.thumbnail} />
                <span className="card-title">{detail?.title}</span>
              </div>
              <div className="card-content">
                <div className="p-content">
                  <p>Brand </p>
                  <p>{detail?.brand}</p>
                </div>
                <div className="p-content">
                  <p>Category</p>
                  <p>{detail?.category}</p>
                </div>
                <div className="p-content">
                  <p>Price</p>
                  <p>{detail?.price}</p>
                </div>
                <div className="p-content">
                  <p>Rating</p>
                  <p>
                    <Ratings value={detail?.rating} />
                  </p>
                </div>
                <div className="p-content">
                  <p>Stock</p>
                  <p>{detail?.stock}</p>
                </div>
                <div style={{ marginTop: ".6rem" }} className="p-content">
                  <p style={{ color: "gray" }}>{detail?.description}</p>
                </div>
                <div className="add-to-cart">
                  <button
                    onClick={() => {
                      handleAddCart();
                    }}
                    className="waves-effect waves-light btn-large grey"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
