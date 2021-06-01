import React from "react";
import "./PeriodicTable.css";
import JsonData from "../assets/elements.json";
import Button from "./Button";

const PeriodicTable = () => {
  const elements = JsonData.elements;
  return (
    <div className="table-container">
      <div id="grid">
        {elements.map((item) => (
          <Button item={item} />
        ))}
      </div>
    </div>
  );
};
export default PeriodicTable;
