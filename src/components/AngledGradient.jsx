import React from "react";
import "./AngledGradient.css";

const styles = {
  bg: {
    background: "rgb(25,170,163)",
    background:
      "linear-gradient(45deg, rgba(25,170,163,1) 0%, rgba(203,89,184,1) 100%)",
    clipPath: "polygon(0 0, 100% 0 100% 100% 0 90%"
  }
};

const AngledGradient = props => (
  <div className="AngledGradient">{props.children}</div>
);

export default AngledGradient;
