import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { selectCollection } from "../../redux/shop/shop.selector";

import "./collection.styles.scss";

const CollectionPage = () => {
  const { collectionId } = useParams();
  const collection = useSelector(selectCollection(collectionId));
  console.log(collection);

  return (
    <div className="category">
      <h2>Category Page</h2>
    </div>
  );
};

export default CollectionPage;
