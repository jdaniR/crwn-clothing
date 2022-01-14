import React from "react";
import { Route, Routes } from "react-router-dom";
import { connect } from "react-redux";

import CollectionOverview from "../../components/collection-overview/collection-overview.component";

import CollectionPage from "../collection/collection.component";

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";
import { updateCollecitons } from "../../redux/shop/shop.action";

class ShopPage extends React.Component {
  unsusbribeFromSnapshot = null;
  componentDidMount() {
    const { updateCollecitons } = this.props;
    const collectionRef = firestore.collection("collections");
    this.unsusbribeFromSnapshot = collectionRef.onSnapshot(async (snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollecitons(collectionsMap);
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

const mapDispatchToProps = (dispatch) => ({
  updateCollecitons: (collectionsMap) =>
    dispatch(updateCollecitons(collectionsMap)),
});
export default connect(null, mapDispatchToProps)(ShopPage);
