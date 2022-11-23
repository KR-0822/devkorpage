import { Fragment } from "react";
import main_image from "./images/main_image.jpeg";
import main_image2 from "./images/main_image2.jpeg";
import "./MainImage.css";
import { Link } from "react-router-dom";
const MainImage = () => {
  return (
    <Fragment>
      <div className="image-box">
        <Link to={"/collections"}>
          <img className="main-image" src={main_image} alt="main_image" />
        </Link>
      </div>
      <div>
        <Link to={"/collections"}>
          <img className="main-image" src={main_image2} alt="main_image" />
        </Link>
      </div>
    </Fragment>
  );
};

export default MainImage;
