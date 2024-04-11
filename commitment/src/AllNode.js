// CustomNodeFlow.js
import React, { useEffect, useCallback } from "react";
import ReactFlow, {
  useNodesState,
  useEdgesState,
  addEdge,
  Controls,
} from "reactflow";
import "reactflow/dist/style.css";
import BlueBox from "./bluebox";
import ImageNode from "./imageNode"; // Adjust the path as necessary based on your project structure
import TreasureBoxNode from "./TreasureBoxNode";

const connectionLineStyle = { stroke: "#fff" };
const snapGrid = [20, 20];
const nodeTypes = {
  imageNode: ImageNode,
  treasureBox: TreasureBoxNode,
};

const defaultViewport = { x: 0, y: 0, zoom: 1.5 };

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
        position: { x: 300, y: 0 },
      },
      {
        id: "2",
        type: "treasureBox",
        data: { content: "hi" },
        position: { x: 350, y: 550 },
      },
    ]);
  }, [setNodes]);

  // const onConnect = useCallback(
  //   (params) =>
  //     setEdges((eds) =>
  //       addEdge({ ...params, animated: true, style: { stroke: "#fff" } }, eds)
  //     ),
  //   [setEdges]
  // );
  const handleNodesChange = useCallback((changes) => {
    setNodes(
      (nds) =>
        nds
          .map((node) => {
            const change = changes.find((c) => c.id === node.id);
            if (change) {
              // For example, if an imageNode's y position is greater than 500, remove it
              if (
                node.type === "imageNode" &&
                change.position &&
                change.position.y > 500
              ) {
                return null; // Or mark it with a flag to conditionally render it
              }
              return { ...node, ...change };
            }
            return node;
          })
          .filter(Boolean) // Remove null values, effectively removing the node
    );
  }, []);

  return (
    <div style={{ height: 800, width: 1500 }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        // onNodesChange={handleNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        connectionLineStyle={connectionLineStyle}
        snapToGrid={true}
        snapGrid={snapGrid}
        defaultViewport={defaultViewport}
        attributionPosition="bottom-left"
      >
        {/* <Controls /> */}
      </ReactFlow>
    </div>
  );
};

export default AllNode;
