import React from "react";

import { Route, Routes } from "react-router-dom";

import CollectionOverview from "../../components/collection-overview/collection-overview.component";

import CollectionPage from "../collection/collection.component";

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";

class ShopPage extends React.Component {
  unsusbribeFromSnapshot = null;
  componentDidMount() {
    const collectionRef = firestore.collection("collections");
    this.unsusbribeFromSnapshot = collectionRef.onSnapshot(async (snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      console.log(collectionsMap);
    });
  }

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
