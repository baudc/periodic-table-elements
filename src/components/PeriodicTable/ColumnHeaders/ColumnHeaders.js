const ColumnHeaders = () => {
  const columns = Array.from(Array(18), (_, i) => i + 1);

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

export default ColumnHeaders;
