// DynamicTable.tsx
import React from "react";
import CheckBox from "../checkBox/CheckBox";
import "./DynamicTable.css";

export interface Column<T> {
  key: keyof T | "actions";
  header: string;
  render?: (row: T) => React.ReactNode;
}

interface DynamicTableProps<T> {
  columns: Column<T>[];
  data: T[];
  renderFooter?: () => React.ReactNode;
  useZebraStriping?: boolean;
  // --- NEW PROPS ---
  showRowBorders?: boolean; // Control if horizontal borders appear
  showSelectAll?: boolean; // Control the checkbox in the header
}

// --- UPDATED GENERIC CONSTRAINT to include optional isSummary flag ---
const DynamicTable = <T extends { id: string | number; isSummary?: boolean }>({
  columns,
  data,
  renderFooter,
  useZebraStriping = true,
  showRowBorders = true, // Default to true to not break other tables
  showSelectAll = true, // Default to true
}: DynamicTableProps<T>) => {
  return (
    <div className="dynamic-table-wrapper">
      {/* Conditionally add a class to control borders via CSS */}
      <table
        className={`dynamic-table ${showRowBorders ? "with-borders" : ""}`}
      >
        <thead>
          <tr>
            {/* Conditionally render the "Select All" checkbox */}
            <th className="checkbox-cell">{showSelectAll && <CheckBox />}</th>
            {columns.map((col) => (
              <th key={String(col.key)}>{col.header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => {
            // Combine class names cleanly
            const rowClasses = [
              useZebraStriping && rowIndex % 2 !== 0 ? "zebra-row" : "",
              row.isSummary ? "summary-row" : "",
            ]
              .filter(Boolean)
              .join(" ");

            return (
              <tr key={row.id} className={rowClasses}>
                <td className="checkbox-cell">
                  {/* Don't render checkbox for summary rows */}
                  {!row.isSummary && <CheckBox />}
                </td>
                {columns.map((col) => (
                  <td key={`${row.id}-${String(col.key)}`}>
                    {col.render
                      ? col.render(row)
                      : (row[col.key as keyof T] as React.ReactNode)}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
        {/* --- RENDER FOOTER INSIDE A tfoot ELEMENT --- */}
        {renderFooter && (
          <tfoot>
            <tr>
              {/* The colSpan makes this cell span the entire table width */}
              <td colSpan={columns.length + 1}>{renderFooter()}</td>
            </tr>
          </tfoot>
        )}
      </table>
    </div>
  );
};

export default DynamicTable;
