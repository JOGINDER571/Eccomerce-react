import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import Saga from "./saga";
import storage from "redux-persist/lib/storage";
import rootReducer from './reducers/rootReducer';
import { persistReducer, persistStore } from "redux-persist";
const persistConfig = {
    key: "root",
    storage,
  };
const persistedReducer = persistReducer(persistConfig, rootReducer);
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: persistedReducer,
    middleware: () => [sagaMiddleware],
});
sagaMiddleware.run(Saga);
const persistor = persistStore(store);
export {store,persistor};