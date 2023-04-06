import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import './App.css'
import Cart from "./pages/Cart";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exec path='/' element={<Home/>} />
        <Route exec path='/login' element={<Login/>} />
        <Route exec path='/register' element={<Register/>} />
        <Route exec path='/cart' element={<Cart />} />
        <Route exec path='/product-details/:id' element={<ProductDetails/>}/>
      </Routes>
    </div>
  );
}

export default App;
