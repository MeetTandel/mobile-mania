import { Route, Routes } from "react-router-dom";

import "./App.css";
import MockAPI from "./pages/MockAPI";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Products from "./pages/Products";

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/products" element={<Products />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/mockman" element={<MockAPI/>} />
    </Routes>
    </div>
  );
}

export default App;
