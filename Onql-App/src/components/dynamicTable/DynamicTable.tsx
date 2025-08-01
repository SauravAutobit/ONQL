// DynamicTable.tsx
import React from "react";
// import { Link } from "react-router-dom";
import CheckBox from "../checkBox/CheckBox";
import "./DynamicTable.css";

// Define the shape for a column configuration object
export interface Column<T> {
  key: keyof T | "actions"; // The key from the data object, or a special key like 'actions'
  header: string; // The text to display in the table header
  // Optional custom render function for complex cells (like links, buttons, etc.)
  render?: (row: T) => React.ReactNode;
}

// Define the component's props using a generic type 'T' for the data
interface DynamicTableProps<T> {
  columns: Column<T>[];
  data: T[];
  renderFooter?: () => React.ReactNode; // Optional function to render a custom footer
  useZebraStriping?: boolean; // Option to enable/disable alternating row colors
}

const DynamicTable = <T extends { id: string | number }>({
  columns,
  data,
  renderFooter,
  useZebraStriping = true,
}: DynamicTableProps<T>) => {
  return (
    <div className="dynamic-table-wrapper">
      <table className="dynamic-table">
        <thead className="dynamic-table ">
          <tr>
            <th className="checkbox-cell">
              {/* <CheckBox /> */}
            </th>
            {columns.map((col) => (
              <th key={String(col.key)}>{col.header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr
              key={row.id}
              className={
                useZebraStriping && rowIndex % 2 !== 0 ? "zebra-row" : ""
              }
            >
              <td className="checkbox-cell">
                <CheckBox />
              </td>
              {columns.map((col) => (
                <td key={`${row.id}-${String(col.key)}`}>
                  {/* If a custom render function is provided, use it. */}
                  {col.render
                    ? col.render(row)
                    : // Otherwise, just display the data from the object key.
                      // This cast is safe if col.key is not 'actions'.
                      (row[col.key as keyof T] as React.ReactNode)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {/* Render the custom footer if the function is provided */}
      {renderFooter && renderFooter()}
    </div>
  );
};

export default DynamicTable;
