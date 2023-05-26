import PageHeader from "../../components/PageHeader";
import { Link } from "react-router-dom";
import "../../css/Gallery and galleryDetails.css";
import React from "react";
import ToggleButton from "../LikeButton";

const HeartCake = () => {
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
            src="/assets/images/heartCake.png"
            alt="heart cake"
          />
          <p className="describeHeartCake">בצק שקדים פריך עם שוקולד</p>
          <p className="priceHeartCake">מחיר: 250 ש"ח</p>
          <Link className="orderH" to="/contact">
            לחץ כאן להזמנת הפריט
          </Link>
          <ToggleButton isAuthenticated={true} />
        </div>
      </div>
    </div>
  );
};

export default HeartCake;
