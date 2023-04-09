import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import './App.css'
import Cart from "./pages/Cart";
import ProductDetails from "./pages/ProductDetails";
import AllProducts from "./pages/AllProducts";
import Footer from "./components/Footer";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exec path='/home' element={<Home/>} />
        <Route exec path='/' element={<Login/>} />
        <Route exec path='/register' element={<Register/>} />
        <Route exec path='/cart' element={<Cart />} />
        <Route exec path='/products' element={<AllProducts/>}></Route>
        <Route exec path='/product-details/:id' element={<ProductDetails/>}/>
        <Route exec path='/admin-dashboard' element={<AdminDashboard/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
