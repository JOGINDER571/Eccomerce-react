import { ADD_TO_CART, REMOVE_FROM_CART, SET_PRODUCT,UPDATE_PRODUCT } from "../constant";
export const productData = (data = [], action) => {
  // console.warn("reducer p call", data);
  switch (action.type) {
    case SET_PRODUCT:
      // console.log("setpro :", action.data);
      data=action.data;
      return data;
    case UPDATE_PRODUCT:
      // console.log("updated :", action.data);
      data=action.data;
      return data;
    default:
      return data;
  }
};
export const cartData=(data=[],action)=>{
  switch(action.type){
    case ADD_TO_CART:
      // data=action.data;
      let uniqueSet = new Set(action.data);
      console.log("updated :", uniqueSet);
      data = [...uniqueSet];
      return data;
    case REMOVE_FROM_CART:   
      data=action.data;
      return data; 
    default:
      return data;  
  }
}