import React from "react";
import "./cartitem.css";
import CartCard from "./CartCard";
import { useDispatch, useSelector } from "react-redux";
const CartItem = () => {
  const data = useSelector((state) => state.cartData);
  console.log("clist", data);

  return (
    <>
      <div className="cart-item">
        {data.length !== 0
          ? data.map((data, index) => {
              return (
                <React.Fragment key={index}>
                  <CartCard data={data}/>
                </React.Fragment>
              );
            })
          : (<>
          <h2>Cart is empty</h2>
          </>)}
      </div>
    </>
  );
};

export default CartItem;