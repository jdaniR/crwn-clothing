import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { connect } from "react-redux";

import { fetchCollectionsStart } from "../../redux/shop/shop.actions"; 

import CollectionsOverviewContainer from "../../components/collection-overview/collections-overview.container";
import CollectionPageContainer from "../collection/collection.container";

const ShopPage = ({ fetchCollectionsStart }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);
  return (
    <div className="shop-page">
      <h1>Collections</h1>
      <Routes>
        <Route exact path="/*" element={<CollectionsOverviewContainer />} />
        <Route
          exact
          path="/:collectionId"
          element={<CollectionPageContainer />}
        />
      </Routes>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
