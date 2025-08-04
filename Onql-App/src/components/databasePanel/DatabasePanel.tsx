import { useState } from "react";
import Button from "../button/Button";
import CheckboxSearch from "../checkboxSearch/CheckboxSearch";
import FormPanel from "../formPanel/FormPanel";
import "./DatabasePanel.css";
import Terminal from "../terminal/Terminal";
import DynamicTable, { type Column } from "../dynamicTable/DynamicTable";
import { Link } from "react-router-dom";

// --- Data and Config for Table 1: Protocols ---
interface ProtocolData {
  id: number;
  name: string;
  collation: string;
  isLocked?: boolean; // Optional property to control the checkbox
}

const protocolColumns: Column<ProtocolData>[] = [
  {
    key: "name",
    header: "Database",
    render: (row) => (
      <Link to={"/protocol-table"}>
        <div>{row.name}</div>
      </Link>
    ),
  },
  {
    key: "collation",
    header: "Dummy Text",
    render: (row) => <span className="cell-subtle-text">{row.collation}</span>,
  },
  {
    key: "actions",
    header: "Dummy Text",
    render: () => (
      <div className="table-actions">
        <span>Check privileges</span>
      </div>
    ),
  },
];

const protocolData: ProtocolData[] = [
  { id: 1, name: "Database_1", collation: "utf8_bin", isLocked: true },
  { id: 2, name: "Database_2", collation: "utf8_general_ci", isLocked: true },
  {
    id: 3,
    name: "Database_3",
    collation: "utf8mb4_general_ci",
    isLocked: true,
  },
  { id: 4, name: "Database_4", collation: "utf8_general_ci", isLocked: true },
  {
    id: 5,
    name: "Database_5",
    collation: "utf8mb4_general_ci",
    isLocked: false,
  }, // This one will be enabled
];

const DatabasePanel = () => {
  const [selectedDatabase, setSelectedDatabase] = useState("");

  return (
    <div className="mainContent-height">
      <div className="mainContent-padding">
        <div className="protocolsPanel-heading">Database</div>
        <CheckboxSearch />
        <DynamicTable
          columns={protocolColumns}
          data={protocolData}
          useZebraStriping={true} // Disable alternating colors for this table
          showRowBorders={false} // --- Pass the new prop to hide borders ---
          showSelectAll={false} // --- Pass the new prop to hide header checkbox ---
          showBorders={false}
          renderFooter={() => (
            <div style={{ padding: "12px 16px", fontWeight: "bold" }}>
              Total: {protocolData.length}
            </div>
          )}
        />
        <FormPanel panelName={"Add Database"}>
          <div className="form-panel-fields">
            <div className="form-panel-options">
              <input
                type="text"
                placeholder="Database alias"
                className="form-input"
              />

              <select
                className="form-select"
                value={selectedDatabase}
                onChange={(e) => setSelectedDatabase(e.target.value)}
              >
                <option value="" disabled>
                  Select Database
                </option>
                <option value="Database 1">Database 1</option>
                <option value="Database 2">Database 2</option>
                <option value="Database 3">Database 3</option>
              </select>
            </div>

            <Button btnText="Add new database" />
          </div>
        </FormPanel>
      </div>
      <div>
        <Terminal />
      </div>
    </div>
  );
};

export default DatabasePanel;
