import { put, takeEvery } from "redux-saga/effects";
import { GET_PRODUCT, SET_PRODUCT, UPDATE_PRODUCT } from "./constant";

function* getProducts() {
  try {
    let data = yield fetch(`https://dummyjson.com/products`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },

    });
    data = yield data.json();
    // console.log("yie", data);
    yield put({ type: SET_PRODUCT, data: data.products });
  } catch (error) {
    console.log("err", error);
  }
}
function* updateProducts(action){
  console.log("saga",action.data);
  yield put({ type: UPDATE_PRODUCT, data: action.data });
}

function* Saga() {
  yield takeEvery(GET_PRODUCT, getProducts);
  // yield takeEvery(UPDATE_PRODUCT, updateProducts);
}

export default Saga;
