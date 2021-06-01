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
                gridColumnStart: item.xpos,
                gridRowStart: item.ypos,
              }}>
              <div>{item.number}</div>
              <div>{item.symbol}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default PeriodicTable;
