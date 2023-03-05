import React from "react";
import User from "../Assets/user.svg";
import Cart from "../Assets/cart.svg";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./navbar.css";
const Navbar = () => {
  const cartList = useSelector((state) => state.cartData);
  //define the length variable for storing the latest length of cartlist
  let length = cartList?.length;
  console.log(length);
  const navigate = useNavigate();
  return (
    <nav>
      <div className="nav-wrapper">
        <a href="#" className="brand-logo ">
          Eccomerce
        </a>

        <ul id="nav-mobile" className="right ">
          <li>
            <a
              id="nav-mobile"
              onClick={() => navigate("/")}
              className="waves-effect waves-light btn-small hide-on-med-and-down"
            >
              Products
            </a>
          </li>
          <li>
            <a
              id="nav-mobile"
              onClick={() => navigate("/addproduct")}
              className="hide-on-med-and-down waves-effect waves-light btn-small"
            >
              AddProduct
              
              <i className="material-icons right">add</i>
            </a>
          
          </li>
          <li style={{ display: "flex", alignItems: "center" }}>
            <span onClick={() => navigate("/carts")} className="cart-icon">
              <img src={Cart} alt="asf" />
              <span className="cart-length">{length}</span>
            </span>
            <span>
              <img
                style={{ marginTop: ".8rem", width: "2.5rem" }}
                src={User}
                alt="asf"
              />
            </span>
          </li>
        </ul>
      </div>
      <div style={{display:'flex',gap:'.3rem',justifyContent:'center',alignItems:'center',marginTop:'1rem'}} className="nav-btn">
        <button
          onClick={() => navigate("/")}
          className="waves-effect waves-light btn-small "
        >
          Products
        </button>
        <button
        style={{display:'flex',justifyContent:'center',alignItems:'center'}}
          onClick={() => navigate("/addproduct")}
          className="waves-light btn-small waves-effect "
        >
          AddProduct<i className="material-icons right">add</i>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
