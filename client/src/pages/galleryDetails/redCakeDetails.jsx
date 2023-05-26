import PageHeader from "../../components/PageHeader";
import { Link } from "react-router-dom";
import "../../css/Gallery and galleryDetails.css";
import ToggleButton from "../LikeButton";

const redCake = () => {
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
            src="/assets/images/redCake.png"
            alt="red cake"
          />
          <p className="describeRedCake">
            עוגת גבינה וג'לי תותים עם פירות יער מעל
          </p>
          <p className="priceRedCake"> מחיר: 250 ש"ח</p>
          <Link className="orderR" to="/contact">
            לחץ כאן להזמנת הפריט
          </Link>
          <ToggleButton isAuthenticated={true} />
        </div>
      </div>
    </div>
  );
};

export default redCake;
