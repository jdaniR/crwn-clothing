import React from "react";

import { Route, Routes } from "react-router-dom";

import CollectionOverview from "../../components/collection-overview/collection-overview.component";

import CollectionPage from "../collection/collection.component";

class ShopPage extends React.Component {
  render() {
    return (
      <div className="shop-page">
        <Routes>
          <Route exact path="/*" element={<CollectionOverview />} />
          <Route exact path="/:collectionId" element={<CollectionPage />} />
        </Routes>
      </div>
    );
  }
}

export default ShopPage;
