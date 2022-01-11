import React from "react";

import { Route, Routes } from "react-router-dom";

import CollectionOverview from "../../components/collection-overview/collection-overview.component";

import CategoryPage from "../category/category.component";

const ShopPage = () => (
  <div className="shop-page">
    <Routes>
      <Route exact path="/" element={<CollectionOverview />} />
      <Route exact path="/:categoryId" element={<CategoryPage />} />
    </Routes>
  </div>
);

export default ShopPage;
