import React,{useEffect} from "react";
import "./products.css";
import SortPrice from './SortProduct';
import ProductCard from "./productCard/EditCard";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../redux/actions/productAction";
const Products = () => {
  let result = useSelector((state) => state.productData);
  // let result =response.length!==0 ?response:[];
  console.log("products", result);
  const dispatch = useDispatch();
  // react hooks for dispatch the product list
  useEffect(() => {
    if(result.length==0){
      dispatch(getProduct());
    }
  }, [result]);
  return (
    <div className="products">
      <div className="div1"></div>
      <div className="cards">
        <SortPrice/>
        <ProductCard data={result.length!==0?result:[]}/>
      </div>
      <div className="div2"></div>
    </div>
  );
};

export default Products;
