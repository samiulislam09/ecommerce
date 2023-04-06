import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import './App.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exec path='/' element={<Home/>} />
        <Route exec path='/login' element={<Login/>} />
        <Route exec path='/register' element={<Register/>} />
      </Routes>
    </div>
  );
}

export default App;
