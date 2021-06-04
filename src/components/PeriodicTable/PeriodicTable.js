import React, { useState } from "react";
import { elements } from "../../assets/elements.json";
import "./PeriodicTable.css";
import ColumnHeaders from "./ColumnHeaders/ColumnHeaders";
import Legend from "./Legend/Legend";
import Asterisks from "./Asterisks/Asterisks";
import Element from "./Element/Element";

const PeriodicTable = () => {
  const [active, setActive] = useState(0);

  const handleClick = (number) => {
    setActive(active !== number ? number : 0);
  };

  return (
    <div className="table-container">
      <div id="grid">
        <ColumnHeaders />
        <Legend />
        <Asterisks />
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
