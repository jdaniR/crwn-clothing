import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shoppage.component";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
