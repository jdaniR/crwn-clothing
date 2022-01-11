import React from "react";
import { useParams } from "react-router-dom";

import "./collection.styles.scss";

const CollectionPage = () => {
  let { collectionId } = useParams();
  console.log(collectionId);
  return (
    <div className="category">
      <h2>Category Page</h2>
    </div>
  );
};

export default CollectionPage;
