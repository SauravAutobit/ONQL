// src/components/treeNode/treeData.ts

// Make sure to import the NodeData type
import type { NodeData } from "./TreeNode";

// Import your custom icons
import protocolIcon from "../../assets/icons/protocolIcon.svg";
import databaseIcon from "../../assets/icons/databaseIcon.svg";
import columnIcon from "../../assets/icons/columnIcon.svg";
import tableIcon from "../../assets/icons/tableIcon.svg"; // Assuming you have a table icon
import relationIcon from "../../assets/icons/relationIcon.svg"; // Assuming you have these icons
import contextIcon from "../../assets/icons/contextIcon.svg";
import projectionIcon from "../../assets/icons/projectionIcon.svg";

const treeData: NodeData[] = [
  {
    id: "protocol-root",
    label: "Protocol",
    icon: protocolIcon, // Use a relevant root icon
    children: [
      {
        id: "database",
        label: "Database",
        icon: databaseIcon,
        children: [
          {
            id: "table",
            label: "Table",
            icon: tableIcon,
            children: [
              {
                id: "column",
                label: "Column",
                icon: columnIcon,
              },
              {
                id: "relation",
                label: "Relation",
                icon: relationIcon,
              },
              {
                id: "context",
                label: "Context",
                icon: contextIcon,
              },
              {
                id: "projection",
                label: "Projection",
                icon: projectionIcon,
              },
            ],
          },
        ],
      },

      // {
      //   id: 'another-protocol',
      //   label: 'Another Protocol',
      //   icon: databaseIcon, // or another icon
      // }
    ],
  },

   {
    id: "database-root",
    label: "Database",
    icon: databaseIcon, // Use a relevant root icon
    children: [
      {
        id: "table",
        label: "Table",
        icon: tableIcon,
       },

      // {
      //   id: 'another-protocol',
      //   label: 'Another Protocol',
      //   icon: databaseIcon, // or another icon
      // }
    ],
  },
];

export default treeData;
