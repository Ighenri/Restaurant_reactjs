import React from "react";
import "./Home.css";
import NavBar from "../NavBar/NavBar";
import { Button } from "../Reusable/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import HomeImg from "../../Assets/home-banner-image.png";
import HomeBGImg from "../../Assets/home-banner-background.png";

export default function Home() {
  const customBtn = {
    backgroundColor: "orange",
    color: "white",
    fontSize: "1.2rem",
    padding: "0.6rem 2.4rem",
    borderRadius: "1.5rem",
    marginLeft: "1rem",
    border: "none",
    fontWeight: "600",
  };
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
            <Button style={customBtn} children="Order Now" />
            <ArrowForwardIcon className="arrow" />
          </div>
        </div>
        <div className="image-wrapper">
          <img src={HomeImg} alt="" />
        </div>
      </div>
    </div>
  );
}
