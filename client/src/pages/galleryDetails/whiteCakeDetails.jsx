import PageHeader from "../../components/PageHeader";
import { Link } from "react-router-dom";
import "../../css/Gallery and galleryDetails.css";
import React from "react";
import ToggleButton from "../LikeButton";

const WhiteCake = () => {
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
            src="/assets/images/white cake.png"
            alt="white cake"
          />
          <p className="describeWhiteCake">
            עוגת מוס שוקולד לבן ושמנת בעיטורי נשיקות וקקאו
          </p>
          <p className="priceWhiteCake">מחיר: 290 ש"ח</p>
          <Link className="orderWhiteCake" to="/contact">
            לחץ כאן להזמנת הפריט
          </Link>
          <ToggleButton isAuthenticated={true} />
        </div>
      </div>
    </div>
  );
};

export default WhiteCake;
