import React from "react";
import "./Button.scss";

const Button = ({ children, className = "", onClick }) => {
  return (
    <button className={`button ${className}`} onClick={onClick}>
      <span className="button_lg">
        <span className="button_sl"></span>
        <span className="button_text">{children}</span>
      </span>
    </button>
  );
};

export default Button;