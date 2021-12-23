//https://stackoverflow.com/questions/69934351/withrouter-is-not-exported-from-react-router-dom/69934614
import React from "react";
import { useNavigate } from "react-router-dom";

import "./menu-item.styles.scss";

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
  const navigate = useNavigate();
  return (
    <div className={`${size} menu-item`} onClick={() => navigate(`hats`)}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;
