// TreeNode.tsx

import React, { useState } from "react";
import "./TreeNode.css"; // Import the styles

// Import your arrow icons
import rightArrow from "../../assets/icons/rightArrow.svg"; // Or your preferred right arrow
import { Link } from "react-router-dom";

// Define the shape of a single node's data
// This makes your component type-safe and easier to use.
export interface NodeData {
  id: string;
  label: string;
  icon: string; // Path to the icon image
  path: string; // Path for routing
  children?: NodeData[]; // Optional array of child nodes
}

interface TreeNodeProps {
  node: NodeData;
  level?: number; // Optional: for controlling indentation if needed
}

const TreeNode: React.FC<TreeNodeProps> = ({ node }) => {
  // State to manage if the current node is expanded or not
  const [isExpanded, setIsExpanded] = useState(false);

  // Function to toggle the expanded state
  const handleToggle = () => {
    // We only toggle if there are children
    if (node.children && node.children.length > 0) {
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <li className="tree-node">
      <Link to={node.path}>
        <div className="tree-node-content" onClick={handleToggle}>
          {/* Render arrow icon if node has children, otherwise a placeholder for alignment */}
          {node.children && node.children.length > 0 ? (
            <img
              src={rightArrow}
              alt="toggle"
              className={`tree-node-arrow ${isExpanded ? "expanded" : ""}`}
            />
          ) : (
            <div className="tree-node-arrow placeholder" />
          )}

          {/* Node Icon */}
          <img src={node.icon} alt={node.label} className="tree-node-icon" />

          {/* Node Label */}
          <span className="tree-node-label">{node.label}</span>
        </div>
      </Link>
      {/* Recursive Part: If expanded and has children, render them */}
      {isExpanded && node.children && (
        <ul className="tree-node-children">
          {node.children.map((childNode) => (
            // Render another TreeNode for each child
            <TreeNode key={childNode.id} node={childNode} />
          ))}
        </ul>
      )}
    </li>
  );
};

export default TreeNode;
