import React from "react";
// import "./products.css";
import Ratings from "../rating/Ratings";
import { useDispatch, useSelector } from "react-redux";
import {
removeFromCart
} from "../../../redux/actions/productAction";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const CartCard = ({ data }) => {
  const cartList = useSelector((state) => state.cartData);
  const dispatch=useDispatch();
  const handleRemoveCart=()=>{
    
    let newUpdatedProduct = [];
    // cartList.pop();
    cartList?.map((i) => {
      if (i.id !== data.id) {
        newUpdatedProduct.push(i);
      } 
        
    });
    
    dispatch(removeFromCart(newUpdatedProduct));
    toast(`${data?.title} is removed`);
    
  }
  return (
    <>
    
    <div style={{width:'20%'}}></div>
      <div className="card ">
        <div className="left-part">
          <div className="card-image">
            <img src={data?.thumbnail} alt="no" />
          </div>
          <div className="left-content">
            <div className="title">
              <p>{data?.title}</p>
            </div>

            <div className="edit-price">
              <span style={{ marginRight: ".5rem" }}>Rs</span>
              <p>{data?.price}</p>
            </div>
            <div className="edit-rating">
              <p>
                <Ratings value={data?.rating} />
              </p>
            </div>
          </div>
        </div>
        <div className="right-part">
          <p>{data?.description}</p>

          <div className="card-action">
            <div className="add-to-cart">
              <button
                onClick={() => {
                  handleRemoveCart();
                }}
                className="waves-effect waves-light btn-large blue"
              >
                RemoveCart
              </button>
            </div>
          </div>
        </div>
      </div>
      <div style={{width:'20%'}}></div>
    </>
  );
};

export default CartCard;
