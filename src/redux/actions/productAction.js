import {GET_PRODUCT,UPDATE_PRODUCT,ADD_TO_CART,REMOVE_FROM_CART} from '../constant';

export const getProduct=()=>{
    console.log("action");
    return{
        type:GET_PRODUCT,
    }
}
export const updateProduct=(data)=>{
    console.log("updateProduct",data);
    return{
        type:UPDATE_PRODUCT,
        data:data
    }
}
export const addToCart=(data)=>{
    console.log("updateProduct",data);
    return{
        type:ADD_TO_CART,
        data:data
    }
}
export const removeFromCart=(data)=>{
    return{
        type:REMOVE_FROM_CART,
        data,
    }
}