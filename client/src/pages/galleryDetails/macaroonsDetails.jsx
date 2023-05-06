import PageHeader from "../../components/PageHeader";
import { Link } from "react-router-dom";
import "../../css/Gallery and galleryDetails.css";
import React from "react";
import ToggleButton from "../LikeButton";

const macaroons = () => {
  return (
    <div className="container">
      <PageHeader title="על המוצר" subTitle="" />
      <div>
        <div>
          <div></div>
        </div>
        <div className="hoverPics">
          <img
            className="picsDetails"
            src="/assets/images/macaroon.png"
            alt="macaroons"
          />
          <p className="describeMacaroons">
            מקרונים בטעמי פסיפלורה, פטל ופירות יער
          </p>
          <p className="priceMacaroons">מחיר: 5 ש"ח ליחידה</p>
          <Link className="orderM" to="/contact">
            לחץ כאן להזמנת הפריט
          </Link>
          <ToggleButton isAuthenticated={true} />
        </div>
      </div>
    </div>
  );
};

export default macaroons;
