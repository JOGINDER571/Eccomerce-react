import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  SET_PRODUCT,
  UPDATE_PRODUCT,
} from "../constant";
//take the data from action and stored in store
 
export const productData = (data = [], action) => {
  switch (action.type) {
    case SET_PRODUCT:
      data = action.data;
      return data;
    case UPDATE_PRODUCT:
      data = action.data;
      return data;
    default:
      return data;
  }
};

export const cartData = (data = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      let uniqueSet = new Set(action.data);
      console.log("updated :", uniqueSet);
      data = [...uniqueSet];
      return data;
    case REMOVE_FROM_CART:
      data = action.data;
      return data;
    default:
      return data;
  }
};
