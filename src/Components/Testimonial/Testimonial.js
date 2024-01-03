import React from "react";
import "./Testimonial.css";
import profilepic from "../../Assets/john-doe-image.png";
import GradeIcon from "@mui/icons-material/Grade";

export default function Testimonial() {
  return (
    <div className="Testimonial-container">
      <div className="Testimonial-wrapper">
        <h6 className="Testimonial-subheading">Testimonial</h6>
        <h1 className="Testimonial-heading">What They Are Saying</h1>
        <p className="Testimonial-text">
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
        </p>
      </div>
      <div className="TestimonialProfile-wrapper">
        <div className="TestimonialProfile">
          <img src={profilepic} alt="" />
          <p className="TestimonialProfile-title">
            Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
            elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
          </p>
          <p className="rating">
            <GradeIcon />
            <GradeIcon />
            <GradeIcon />
            <GradeIcon />
            <GradeIcon />
          </p>
          <p className="TestimonialProfile-text">John Doe</p>
        </div>
      </div>
    </div>
  );
}
