// CustomNodeFlow.js
import React, { useEffect } from "react";
import ReactFlow, { useNodesState, useEdgesState } from "reactflow";
import "reactflow/dist/style.css";
import ImageNode from "./imageNode"; // Adjust the path as necessary based on your project structure
import TreasureBoxNode from "./TreasureBoxNode";

const connectionLineStyle = { stroke: "#fff" };
const snapGrid = [20, 20];
const nodeTypes = {
  imageNode: ImageNode,
  treasureBox: TreasureBoxNode,
};

const defaultViewport = { x: 0, y: 0, zoom: 1 };
const playAudio = () => {
  const audio = new Audio("/box_closed_trim.mp3"); // Ensure the path to your audio file is correct
  audio
    .play()
    .catch((error) => console.error("Error playing the audio file:", error));
};
const proOptions = { hideAttribution: true };

const AllNode = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  useEffect(() => {
    setNodes([
      {
        id: "1",
        type: "imageNode",
        data: {
          image: {
            url: "/scroll.png",
            height: 400,
            width: 300,
          },
        },
        position: { x: 50, y: 0 },
      },
      {
        id: "2",
        type: "treasureBox",
        data: { content: "hi" },
        position: { x: 100, y: 550 },
      },
    ]);
  }, [setNodes]);

  const onNodeDragStop = (event, node) => {
    console.log(`Node ${node.id} position:`, node.position);
    if (node.id === "1" && node.position.y > 200 && node.position.x < 350) {
      setNodes((currentNodes) => currentNodes.filter((n) => n.id !== "1"));
      playAudio();
    }
  };

  return (
    <div style={{ height: 677, width: 375 }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        connectionLineStyle={connectionLineStyle}
        snapToGrid={true}
        snapGrid={snapGrid}
        defaultViewport={defaultViewport}
        onNodeDragStop={onNodeDragStop}
        proOptions={proOptions}
        fitView
      ></ReactFlow>
    </div>
  );
};

export default AllNode;
