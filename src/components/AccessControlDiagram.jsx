import React from "react";
import ReactFlow, {
  Background,
  Controls,
  useNodesState,
  useEdgesState,
} from "reactflow";
import "reactflow/dist/style.css";

const initialNodes = [
  {
    id: "1",
    position: { x: 250, y: 0 },
    data: { label: "Access Control Models" },
    style: {
      background: "#1c2538",
      color: "#fff",
      padding: 10,
      borderRadius: 8,
      fontWeight: "bold",
    },
  },
  {
    id: "2",
    position: { x: 0, y: 150 },
    data: { label: "MAC" },
    style: {
      background: "#F87171",
      color: "#fff",
      padding: 10,
      borderRadius: 8,
    },
  },
  {
    id: "3",
    position: { x: 250, y: 150 },
    data: { label: "DAC" },
    style: {
      background: "#60A5FA",
      color: "#fff",
      padding: 10,
      borderRadius: 8,
    },
  },
  {
    id: "4",
    position: { x: 500, y: 150 },
    data: { label: "RBAC" },
    style: {
      background: "#34D399",
      color: "#fff",
      padding: 10,
      borderRadius: 8,
    },
  },
];

const initialEdges = [
  { id: "e1-2", source: "1", target: "2", animated: true, type: "smoothstep" },
  { id: "e1-3", source: "1", target: "3", animated: true, type: "smoothstep" },
  { id: "e1-4", source: "1", target: "4", animated: true, type: "smoothstep" },
];

const AccessControlDiagram = () => {
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, , onEdgesChange] = useEdgesState(initialEdges);

  return (
    <div className="h-[400px] w-full border rounded-xl overflow-hidden bg-white shadow-md">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        fitView
      >
        <Background gap={16} />
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default AccessControlDiagram;
