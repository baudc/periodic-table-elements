import "./Element.css";

const Element = ({ item, handleClick, active }) => {
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

export default Element;
