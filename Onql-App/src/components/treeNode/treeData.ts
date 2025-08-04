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
    path: "/protocol",
    children: [
      {
        id: "database",
        label: "Database",
        icon: databaseIcon,
        path: "/protocol-database",
        children: [
          {
            id: "table",
            label: "Table",
            icon: tableIcon,
            path: "/protocol-table",
            children: [
              {
                id: "column",
                label: "Column",
                icon: columnIcon,
                path: "/protocol-column",
              },
              {
                id: "relation",
                label: "Relation",
                icon: relationIcon,
                path: "/protocol-column",
              },
              {
                id: "context",
                label: "Context",
                icon: contextIcon,
                path: "/protocol-column",
              },
              {
                id: "projection",
                label: "Projection",
                icon: projectionIcon,
                path: "/protocol-column",
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
    path: "/",
    children: [
      {
        id: "table",
        label: "Table",
        icon: tableIcon,
        path: "/create-table"
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
