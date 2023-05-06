import PageHeader from "../../components/PageHeader";
import { Link } from "react-router-dom";
import "../../css/Gallery and galleryDetails.css";
import React from "react";
import ToggleButton from "../LikeButton";

const alphaphores = () => {
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
            src="/assets/images/alphaphores.png"
            alt="alphaphores"
          />
          <p className="describeAlphaphores">עוגת מוס אלפחורס וריבת חלב</p>
          <p className="priceAlphaphores"> (קוטר: 20) 250 ש"ח קטן</p>
          <p className="priceAlphaphores"> (קוטר: 22) 300 ש"ח בינוני</p>
          <p className="priceAlphaphores"> (קוטר: 24) 350 ש"ח גדול</p>
          <Link className="orderA" to="/contact">
            לחץ כאן להזמנת הפריט
          </Link>
          <br />
          <ToggleButton isAuthenticated={true} />
        </div>
      </div>
    </div>
  );
};

export default alphaphores;
