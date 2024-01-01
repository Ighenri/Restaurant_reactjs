import React from "react";
import "../Reusable/Button.css";

export const Button = ({ children, onClick, style }) => {
  return (
    <div>
      <button style={style} onClick={onClick}>
        {children}
      </button>
    </div>
  );
};
