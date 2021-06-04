const Asterisks = () => {
  const positions = [
    { content: "*", pos: [3, 7] },
    { content: "**", pos: [3, 8] },
    { content: "*", pos: [2, 10] },
    { content: "**", pos: [2, 11] },
  ];
  return positions.map((item) => (
    <div
      key={item.pos[1]}
      className="element"
      style={{
        gridColumnStart: item.pos[0],
        gridRowStart: item.pos[1],
      }}>
      {item.content}
    </div>
  ));
};

export default Asterisks;
