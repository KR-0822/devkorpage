import { Fragment } from "react";
import main_image from "./images/KU1.jpg";
import main_image2 from "./images/KU2.jpg";
import "./MainImage.css";
import { Link } from "react-router-dom";
const MainImage = () => {
  return (
    <Fragment>
      <div className="image-box">
        <Link to={"/collections"}>
          <div className="relativebox">
          <img className="main-image" src={main_image} alt="main_image" />
          <div className="image1-text">
          <p>Devkor 1 </p>
          </div>
          </div>
        </Link>
      </div>
      <div  className="image-box">
        <Link to={"/collections"}>
          <img className="main-image" src={main_image2} alt="main_image" />
          <div className="image2-text">
          <p>Devkor 2 </p>
          </div>
        </Link>
      </div>

    </Fragment>
  );
};

export default MainImage;
