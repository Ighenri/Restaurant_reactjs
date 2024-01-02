import React from "react";
import "./Home.css";
import NavBar from "../NavBar/NavBar";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import HomeImg from "../../Assets/home-banner-image.png";
import HomeBGImg from "../../Assets/home-banner-background.png";

export default function Home() {
  return (
    <div>
      <NavBar />
      <div className="home-container">
        <div className="home-bgimage">
          <img src={HomeBGImg} alt="" />
        </div>
        <div className="home-text-wrapper">
          <h2 className="home-text">
            Your Favourite Food Delivered Hot & <br /> Fresh
          </h2>
          <p className="home-para">
            Healthy switcher chefs do all the prep work, like <br /> peeding,
            chopping & marinating, so you can cook <br /> a fresh food.
          </p>
          <div className="arrow-wrapper">
            <button className="customBtn">
              <p>Order Now</p>
              <ArrowForwardIcon className="arrows" />
            </button>
          </div>
        </div>
        <div className="image-wrapper">
          <img src={HomeImg} alt="" />
        </div>
      </div>
    </div>
  );
}
