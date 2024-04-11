// imageNode.js

import React, { useState, memo } from "react";
// import { Handle } from "react-flow-renderer";

const ImageNode = memo(({ data }) => {
  const { url, height, width } = data.image;
  const [text, setText] = useState("");

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div
      style={{
        position: "relative",
        width: `${width}px`,
        height: `${height}px`,
        border: "1px solid #ccc",
      }}
    >
      <img src={url} alt="Node" style={{ width: "100%", height: "100%" }} />
      <input
        type="text"
        value={text}
        onChange={handleInputChange}
        style={{
          position: "absolute",
          bottom: "10px",
          left: "10px",
          width: "calc(100% - 20px)",
        }}
      />
    </div>
  );
});

export default ImageNode;
