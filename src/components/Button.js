import React from "react";
import "./Button.css";

const Button = ({ item }) => {
  return (
    <button
      className="element button-element"
      style={{
        backgroundColor: "#" + item["cpk-hex"],
        gridColumnStart: item.xpos,
        gridRowStart: item.ypos,
      }}>
      <div className="element-number">{item.number}</div>
      <div className="element-symbol">{item.symbol}</div>
      <div className="element-name">{item.name}</div>
      <div className="element-phase">{item.phase}</div>
    </button>
  );
};

export default Button;
