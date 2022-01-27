import React from "react";
import { Route, Routes } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { fetchCollectionsStartAsync } from "../../redux/shop/shop.actions";
import { selectIsCollectionsLoaded } from "../../redux/shop/shop.selector";

import CollectionsOverviewContainer from "../../components/collection-overview/collections-overview.container";
import WithSpinner from "../../components/with-spinner/with-spinner.component";

import CollectionPage from "../collection/collection.component";

const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
  }

  render() {
    const { isCollectionsLoaded } = this.props;
    return (
      <div className="shop-page">
        <h1>Collections</h1>
        <Routes>
          <Route exact path="/*" element={<CollectionsOverviewContainer />} />
          <Route
            exact
            path="/:collectionId"
            element={
              <CollectionPageWithSpinner
                isLoading={!isCollectionsLoaded}
                {...this.props}
              />
            }
          />
        </Routes>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isCollectionsLoaded: selectIsCollectionsLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
