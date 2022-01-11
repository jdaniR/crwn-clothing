import React from "react";
import { useParams } from "react-router-dom";

import "./category.styles.scss";

const CategoryPage = () => {
  let { categoryId } = useParams();
  console.log(categoryId);
  return (
    <div className="category">
      <h2>Category Page</h2>
    </div>
  );
};

export default CategoryPage;
