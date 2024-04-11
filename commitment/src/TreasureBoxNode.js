import React from "react";
import TreasureChest from "./box";

const TreasureBoxNode = React.memo(({ data }) => (
  <div style={{ padding: "10px", textAlign: "center" }}>
    Treasure Box: {data.content}
    <TreasureChest />
  </div>
));

export default TreasureBoxNode;
