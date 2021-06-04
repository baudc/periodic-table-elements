import "./Legend.css";

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

export default Legend;
