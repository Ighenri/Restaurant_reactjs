import React from "react";
import "./About.css";
import { Button } from "../Reusable/Button";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import AboutBGImg from "../../Assets/about-background.png";
import AboutImg from "../../Assets/about-background-image.png";

export default function About() {
  return (
    <div className="about-container">
      <div className="BGimage-wrapper">
        <img src={AboutBGImg} alt="" />
      </div>
      <div className="image-wrapper">
        <img src={AboutImg} alt="" />
      </div>
      <div className="about-writeup">
        <h6 className="about-title">About</h6>
        <h2 className="about-text">
          Food Is An Important Part Of A Balanced Diet
        </h2>
        <p className="about-primary-text">
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
        </p>
        <p className="about-primary-text">
          Non tincidunt magna non et elit. Dolor turpis molestie dui magnis
          facilisis at fringilla quam.
        </p>
        <div className="about-button-wrapper">
          <button className="customBtn">Learn More</button>
          <div className="about-media">
            <PlayCircleIcon className="video-icon" />
            <p> Watch Video</p>
          </div>
        </div>
      </div>
    </div>
  );
}
