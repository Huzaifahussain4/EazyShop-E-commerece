import React from "react";
import "./buttonStyle.css";

const CustomButton = ({ onClick, name, disabled }) => {
  return (
    <button className="customBtn" onClick={onClick} disabled={disabled}>
      {name}
    </button>
  );
};

export default CustomButton;
