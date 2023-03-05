import React, { useEffect, useState } from "react";
import "./addProduct.css";
import { updateProduct } from "../../../redux/actions/productAction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import FetchApi from "../../api/FetchApi";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddProduct = () => {
  //All the states are defined below
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //getting data from the store throuh uesSelector
  const products = useSelector((state) => state.productData);

  let initialData = {
    // id,
    title,
    price,
    rating,
    description,
  };
  // making post request to add the product to the api
  const url = `https://dummyjson.com/products/add`;
  const handleSubmit = async (e) => {
    e.preventDefault();
    let result = FetchApi(url, {
      body: {
        id: Date.now(),
        title: title,
        price,
        rating,
        description,
      },
      method: "POST",
    });
    result.then((data) => {
      dispatch(updateProduct([data, ...products]));
      console.log("data", data);
      console.log("data", products);
      setTimeout(()=>{
        navigate("/");
      },[3000]);
      //rect toastify for the notification
      toast("Added successfully");
    });
  };
  return (<>
    <div>
        <ToastContainer style={{marginTop:'4rem'}}/>
      </div>
    <div className="add-product">
      <h3>Add New Product</h3>
      <form onSubmit={handleSubmit} className="col s12">
        <div>
          <div className="row">
            <div className="input-field">
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                id="title"
                type="text"
                placeholder="Enter the title"
                required
              />
            </div>
          </div>
          <div className="row">
            <div className="input-field">
              <input
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                id="price"
                type="number"
                placeholder="Enter the price"
                required
              />
            </div>
          </div>
          <div className="row">
            <div className="input-field">
              <input
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                id="price"
                type="number"
                placeholder="Enter the rating"
                required
              />
            </div>
          </div>
          <div className="row">
            <div className="input-field">
              <input
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                id="description"
                type="text"
                placeholder="Enter the description"
                required
              />
            </div>
          </div>
        </div>
        <button type="submit" className="waves-effect waves-light btn-large">
          Add
        </button>
      </form>
    </div>
    </>
  );
};

export default AddProduct;
