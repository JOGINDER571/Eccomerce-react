//implement the sorting function to sort the product with the price
import React, { useState } from "react";
import {useDispatch,useSelector} from 'react-redux';
import { updateProduct } from "../../redux/actions/productAction";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const SortProduct = () => {
  const [close, setClose] = useState(true);
  const dispatch=useDispatch();
  const products=useSelector((state)=>state.productData);
  const handleSort=()=>{
    //define the variable to store the sorted list
    const filtered=products.sort((a,b)=>a.price-b.price);
    // updating the product list
    dispatch(updateProduct([...filtered]));
    toast("Products are sorted");
  }
  //we can unsort with the help of handle close function
  const handleClose=()=>{
    const sorted=products.sort((a,b)=>a.id-b.id);
    console.log(products);
    dispatch(updateProduct([...sorted]));
    toast("Products are unsorted");
  }
  return (
    <>
    <div>
        <ToastContainer style={{marginTop:'4rem'}}/>
      </div>
      <div className="sort-by-price">
        <button
          style={{ display: close === true ? "flex" : "none" }}
          onClick={() => {
            setClose(false);
            handleSort();
          }}
          className="waves-effect waves-light btn-large grey"
        >
          Sort By Price
        </button>
        <button
          onClick={() => {
            setClose(true);
            handleClose();
          }}
          style={{ display: close === false ? "flex" : "none" }}
          className="btn waves-effect waves-light btn-large"
          type="submit"
          name="action"
        >
          Close
          <i className="material-icons right">close</i>
        </button>
      </div>
    </>
  );
};

export default SortProduct;
