import { Fragment } from "react";
import main_image from "./images/main_image2.jpeg";
import main_image2 from "./images/main_image1.jpg";
import "./MainImage.css";
import { Link } from "react-router-dom";
const MainImage = () => {
  return (
    <Fragment>
      <div className="image-box">
        <Link to={"/collections"}>
          <img className="main-image" src={main_image} alt="main_image" />
          <div class="image1-text">
          <p>Women's Fashion </p>
          </div>
        </Link>
      </div>
      <div  className="image-box">
        <Link to={"/collections"}>
          <img className="main-image" src={main_image2} alt="main_image" />
          <div class="image1-text">
          <p>Men's Fashion </p>
          </div>
        </Link>
      </div>

    </Fragment>
  );
};

export default MainImage;
