import React from "react";
import reader from "assets/images/book-reader.svg";
import "./index.css";

const BannerImage = () => {
  return (
    <div>
      <div className="imgWrapper">
        <img src={reader} alt="bannerImage" height="100%" width="100%" />
      </div>
    </div>
  );
};
export default BannerImage;
