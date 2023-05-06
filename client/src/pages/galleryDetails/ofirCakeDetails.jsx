import PageHeader from "../../components/PageHeader";
import { Link } from "react-router-dom";
import "../../css/Gallery and galleryDetails.css";
import React from "react";
import ToggleButton from "../LikeButton";

const OfirCake = () => {
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
            src="/assets/images/ofir cake.png"
            alt="ofir cake"
          />
          <p className="describeOfirCake">עוגת מוס ליום הולדת</p>
          <p className="priceOfirCake"> (קוטר: 20) 250 ש"ח קטן</p>
          <p className="priceOfirCake"> (קוטר: 22) 300 ש"ח בינוני</p>
          <p className="priceOfirCake"> (קוטר: 24) 350 ש"ח גדול</p>
          <Link className="orderO" to="/contact">
            לחץ כאן להזמנת הפריט
          </Link>
          <ToggleButton isAuthenticated={true} />
        </div>
      </div>
    </div>
  );
};

export default OfirCake;
