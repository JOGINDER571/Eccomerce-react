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
  useEffect(() => {
    if(result.length==0){
      dispatch(getProduct());
    }
  }, []);
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
