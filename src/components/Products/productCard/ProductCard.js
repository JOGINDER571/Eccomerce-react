import React, { useEffect, useState } from "react";
import "../products.css";
import { useDispatch, useSelector } from "react-redux";
import { updateProduct, addToCart } from "../../../redux/actions/productAction";
import { useNavigate } from "react-router-dom";
import Ratings from "../rating/Ratings";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ProductCard = ({ data }) => {
  const [activeService, setActiveService] = useState(true);
  const [title, setTitle] = useState(data.title);
  const [price, setPrice] = useState(data.price);
  const [rating, setRating] = useState(data.rating);
  const [description, setDescription] = useState(data.description);
  let initialData = {
    id: data.id,
    title,
    price,
    description,
    brand: data.brand,
    category: data.category,
    discountPercentage: data.discountPercentage,
    images: data.images,
    stock: data.stock,
    thumbnail: data.thumbnail,
  };
  // console.log(initialData);
  const productList = useSelector((state) => state.productData);
  const cartList = useSelector((state) => state.cartData);
  console.log("data",data);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const updateHandle = async (data) => {
    let url = `https://dummyjson.com/products/${data.id}`;
    let makeReq = await fetch(url, {
      body: {
        ...data,
        title,
        price,
        rating,
        description,
      },
      method: "PUT",
    });

    let response = await makeReq.json();
    console.log("res", response);

    let newUpdatedProduct = [];
    productList?.map((i) => {
      if (i.id !== data.id) {
        newUpdatedProduct.push(i);
      } else {
        newUpdatedProduct.push(initialData);
      }
    });
    dispatch(updateProduct(newUpdatedProduct));
    
    toast("Successfully edit");
  };

  const handledelete = (id) => {
    let newUpdatedProduct = [];
    
    productList?.map((i) => {
      if (i.id !== id) {
        newUpdatedProduct.push(i);
      }
    });
    dispatch(updateProduct(newUpdatedProduct));
    toast("Successfully deleted");
    let newUpdatedCart = [];
    cartList.forEach((val) => {
      if (val.id !== id) {
        newUpdatedCart.push(val);
      }
    });
    dispatch(addToCart(newUpdatedCart));
    window.location.reload();
  };
  const handleCancel = () => {
    window.location.reload();
  };
 

  return (
    <>
    <div>
        <ToastContainer style={{marginTop:'4rem'}}/>
      </div>
      <div className="card ">
        <div className="left-part">
          <div className="card-image">
            <img
              onClick={() => navigate(`/productdetails/${data.id}`)}
              src={data.thumbnail}
              alt="no"
            />
          </div>
          <div className="left-content">
            <div className="title">
              <p
                style={{
                  display: activeService === true ? "flex" : "none",
                }}
              >
                {data.title}
              </p>
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                name="title"
                type="text"
                disabled={activeService}
                className="my-product-field"
                style={{
                  display: activeService === false ? "flex" : "none",
                }}
              />
            </div>

            <div className="edit-price">
              <span style={{ marginRight: ".5rem" }}>Rs</span>
              <p
                style={{
                  display: activeService === true ? "flex" : "none",
                }}
              >
                {data.price}
              </p>

              <input
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                name="price"
                type="number"
                disabled={activeService}
                className="my-product-field"
                style={{
                  display: activeService === false ? "flex" : "none",
                }}
              />
            </div>
            <div className="edit-rating">
              <p
                style={{
                  display: activeService === true ? "flex" : "none",
                }}
              >
                <Ratings value={data.rating} />
              </p>
              <input
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                name="rating"
                type="number"
                min={"0"}
                max={"5"}
                disabled={activeService}
                className="my-product-field"
                style={{
                  display: activeService === false ? "flex" : "none",
                }}
              />
            </div>
          </div>
        </div>
        <div className="right-part">
          <p
            style={{
              display: activeService === true ? "flex" : "none",
            }}
          >
            {data.description}
          </p>
          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            name="description"
            type="text"
            disabled={activeService}
            className="my-product-field"
            style={{
              display: activeService === false ? "flex" : "none",
            }}
          />

          <div className="card-action">
            <button
              onClick={() => {
                setActiveService(false);
              }}
              className="btn-floating btn-large waves-effect waves-light blue"
              style={{
                display: activeService === true ? "flex" : "none",
              }}
            >
              <i className="material-icons">edit</i>
            </button>
            <button
              onClick={() => handledelete(data.id)}
              className="btn-floating btn-large waves-effect waves-light red"
              style={{
                display: activeService === true ? "flex" : "none",
              }}
            >
              <i className="material-icons">delete</i>
            </button>
            <button
              onClick={() => {
                
                setActiveService(true);
                updateHandle(data);
                
              }}
              className="waves-effect waves-light btn-small"
              style={{
                display: activeService === false ? "flex" : "none",
              }}
            >
              save
            </button>
            <a
              onClick={() => {
                handleCancel();
                setActiveService(true);
              }}
              className="waves-effect waves-light btn-small"
              style={{
                display: activeService === false ? "flex" : "none",
              }}
            >
              cancel
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
