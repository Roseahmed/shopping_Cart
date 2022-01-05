import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route extact path="/" element={<Cart />} />
        <Route extact path="/checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
