import React, { useState } from "react";
import "./PeriodicTable.css";
import { elements } from "../../assets/elements.json";
import Legend from "./Legend/Legend";
import Asterisks from "./Asterisks/Asterisks";
import Element from "./Element/Element";

const PeriodicTable = () => {
  const columns = Array.from(Array(18), (_, i) => i + 1);
  const [active, setActive] = useState(0);

  const handleClick = (number) => {
    setActive(active !== number ? number : 0);
  };

  const ColumnHeaders = () => {
    return columns.map((item) => (
      <div
        key={item}
        className="element"
        style={{
          gridColumnStart: item,
          gridRowStart: 0,
        }}>
        {item}
      </div>
    ));
  };

  return (
    <div className="table-container">
      <div id="grid">
        <Asterisks />
        <ColumnHeaders />
        <Legend />
        {elements.map((item) => (
          <Element
            key={item.number}
            item={item}
            handleClick={handleClick}
            active={active}
          />
        ))}
      </div>
    </div>
  );
};
export default PeriodicTable;
