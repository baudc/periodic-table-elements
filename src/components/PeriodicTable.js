import React from "react";
import "./PeriodicTable.css";
import JsonData from "../assets/elements.json";

const PeriodicTable = () => {
  const elements = JsonData.elements;
  return (
    <div className="table-container">
      <div id="grid">
        {elements.map((item) => {
          return (
            <div
              className="element"
              style={{
                backgroundColor: "#" + item["cpk-hex"],
                gridColumnStart: item.xpos,
                gridRowStart: item.ypos,
              }}>
              <div className="element-number">{item.number}</div>
              <div className="element-symbol">{item.symbol}</div>
              <div className="element-name">{item.name}</div>
              <div className="element-phase">{item.phase}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default PeriodicTable;
