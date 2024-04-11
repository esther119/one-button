import React, { useState, memo } from "react";
// import { Handle } from "react-flow-renderer";

const ImageNode = memo(({ data }) => {
  const { url, height, width } = data.image;
  const [text, setText] = useState("");

  function handleInputChange(event) {
    const textarea = event.target;
    // Reset height to auto to ensure proper calculation of scrollHeight below
    textarea.style.height = "auto";
    // Set the height to scrollHeight to accommodate the content
    textarea.style.height = `${textarea.scrollHeight}px`;
    // Set state or perform other actions as needed
    setText(event.target.value); // Assuming you're using React state
  }

  return (
    <div
      style={{
        position: "relative",
        width: `${width}px`,
        height: `${height}px`,
      }}
    >
      <img src={url} alt="Node" style={{ width: "100%", height: "100%" }} />
      <textarea
        value={text}
        onChange={handleInputChange}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "60%",
          textAlign: "center",
          backgroundColor: "rgba(255, 255, 255, 0.3)",
          padding: "8px",
          resize: "none", // Prevents manual resizing
          overflowY: "hidden", // Hides the vertical scrollbar
          minHeight: "20px", // Initial height to approximate a single line, adjust as needed
        }}
      />
    </div>
  );
});

export default ImageNode;
