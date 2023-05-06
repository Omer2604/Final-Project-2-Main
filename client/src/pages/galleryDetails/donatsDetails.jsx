import PageHeader from "../../components/PageHeader";
import { Link } from "react-router-dom";
import "../../css/Gallery and galleryDetails.css";
import React from "react";
import ToggleButton from "../LikeButton";

const donats = () => {
  return (
    <div className="container">
      <PageHeader title="על המוצר" subTitle="" />
      <div>
        <div>
          <div></div>
        </div>
        <div className="hoverPics">
          <img
            className="donats"
            src="/assets/images/donats.png"
            alt="donats"
            _id="6316242e8364d16b288cf017"
          />
          <p className="describeDonats">
            (18.10.22-26.12.22) סופגניות עבור חנוכה בלבד
          </p>
          <p className="priceDonats">
            (עבור סופגניה עם ריבה או בלי כלום) מחיר: 6 יח' - 25 ש"ח
          </p>
          <p className="priceSpecialDonats">
            או: 7 ש"ח ליחידה עבור סופגניה מיוחדת
          </p>
          <Link className="orderD" to="/contact">
            לחץ כאן להזמנת הפריט
          </Link>{" "}
          <br />
          <ToggleButton isAuthenticated={true} />
          <br />
        </div>
      </div>
    </div>
  );
};

export default donats;
