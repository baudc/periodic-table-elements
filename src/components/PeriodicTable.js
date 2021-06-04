import React, { useState } from "react";
import "./PeriodicTable.css";
import { elements } from "../assets/elements.json";

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

  const Asterisk = ({ x, y, children }) => {
    return (
      <div
        className="element"
        style={{
          gridColumnStart: x,
          gridRowStart: y,
        }}>
        {children}
      </div>
    );
  };

  const Legend = () => {
    return (
      <div
        className="legend"
        style={{
          gridColumnStart: 3,
          gridColumnEnd: 13,
          gridRowStart: 2,
          gridRowEnd: 5,
        }}>
        <div className="nonmetal element">
          <div className="legend-number">1</div>
          <div className="legend-symbol">H</div>
          <div className="legend-name">Hydrogen</div>
        </div>
        <div className="element">
          <div className="legend-number">Number</div>
          <div className="legend-symbol">Symbol</div>
          <div className="legend-name">Name</div>
        </div>
      </div>
    );
  };

  const Element = ({ item }) => {
    return (
      <div
        style={{
          gridColumnStart: item.xpos,
          gridRowStart: item.ypos + 1,
        }}>
        <button
          value={item.number}
          onClick={(e) => handleClick(e.currentTarget.value)}
          className={"element " + item.category}>
          <div className="popup">
            <span
              className={`popup-text ${
                parseInt(active) === item.number ? "show" : ""
              }`}>
              {item.category}
            </span>
          </div>
          <div className="element-number">{item.number}</div>
          <div className="element-symbol">{item.symbol}</div>
          <div className="element-name">{item.name}</div>
        </button>
      </div>
    );
  };

  return (
    <div className="table-container">
      <div id="grid">
        <Asterisk x={3} y={7}>
          *
        </Asterisk>
        <Asterisk x={3} y={8}>
          **
        </Asterisk>
        <Asterisk x={2} y={10}>
          *
        </Asterisk>
        <Asterisk x={2} y={11}>
          **
        </Asterisk>
        <ColumnHeaders />
        <Legend />
        {elements.map((item) => (
          <Element key={item.number} item={item} />
        ))}
      </div>
    </div>
  );
};
export default PeriodicTable;
