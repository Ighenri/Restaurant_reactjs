import React from "react";
import "./Work.css";
import pickMeal from "../../Assets/pick-meals-image.png";
import chooseOption from "../../Assets/choose-image.png";
import fastDelivery from "../../Assets/delivery-image.png";

export default function Work() {
  const workInfoDetails = [
    {
      icon: pickMeal,
      Title: "Pick Meals",
      Text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. ",
    },
    {
      icon: chooseOption,
      Title: "Choose How Often",
      Text: "Iure minus, reprehenderit, nisi alias harum id tempore earum",
    },
    {
      icon: fastDelivery,
      Title: "Fast Deliveries",
      Text: "Ldicta beatae nam et. Minus rerum harum sunt optio sapientVoluptates",
    },
  ];

  return (
    <div className="work-container">
      <div className="work-wrapper">
        <h6 className="work-subheading">Work</h6>
        <h1 className="work-heading">How It Works</h1>
        <p className="work-text">
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
        </p>
      </div>
      <div className="workDetails-wrapper">
        {workInfoDetails.map((data) => (
          <div key={data.icon} className="workDetails">
            <img src={data.icon} alt="" />
            <p className="work-title">{data.Title}</p>
            <p className="work-text">{data.Text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
