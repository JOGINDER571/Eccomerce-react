import { BrowserRouter,Route,Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Products from "./components/Products/Products";
import SortProduct from './components/Products/SortProduct';
import ProductDetails from './components/Products/productDetail/ProductDetails';
import AddProduct from "./components/Products/addProduct/AddProduct";
import CartItem from "./components/Products/carts/CartItem";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
  <>
  <div>
        <ToastContainer style={{marginTop:'4rem'}}/>
      </div>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Products/>}/>
      <Route path="/addproduct" element={<AddProduct/>}/>
      <Route path="/sortproduct" element={<SortProduct/>}/>
      <Route path="/productdetails/:id" element={<ProductDetails/>}/>
      <Route path="/carts" element={<CartItem/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
