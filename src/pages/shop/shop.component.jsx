import React from "react";
import { Route, Routes } from "react-router-dom";
import { connect } from "react-redux";

import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import WithSpinner from "../../components/with-spinner/with-spinner.component";

import CollectionPage from "../collection/collection.component";

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";
import { updateCollecitons } from "../../redux/shop/shop.action";

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  state = {
    loading: true,
  };
  unsusbribeFromSnapshot = null;
  componentDidMount() {
    const { updateCollecitons } = this.props;
    const collectionRef = firestore.collection("collections");
    this.unsusbribeFromSnapshot = collectionRef.onSnapshot(async (snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollecitons(collectionsMap);
      this.setState({ loading: false });
    });
  }

  render() {
    const { loading } = this.state;
    return (
      <div className="shop-page">
        <Routes>
          <Route
            exact
            path="/*"
            element={
              <CollectionOverviewWithSpinner
                isLoading={loading}
                {...this.props}
              />
            }
          />
          <Route
            exact
            path="/:collectionId"
            element={
              <CollectionPageWithSpinner isLoading={loading} {...this.props} />
            }
          />
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
