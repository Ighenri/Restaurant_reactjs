import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="Contact-container">
      <div className="Contact-wrapper">
        <h1 className="Contact-heading">
          Have Question In Mind? Let Us Help You
        </h1>
      </div>
      <div className="ContactInput">
        <input type="text" name="" id="" placeholder="yourmail@gmail.com" />
        <button>Submit</button>
      </div>
    </div>
  );
}
