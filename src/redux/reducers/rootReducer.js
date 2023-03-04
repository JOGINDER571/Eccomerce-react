import { combineReducers } from "redux";
import { productData } from "./productReducer";
import {cartData} from "./productReducer";

export default combineReducers({ productData,cartData });