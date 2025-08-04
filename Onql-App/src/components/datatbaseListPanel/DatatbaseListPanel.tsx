import "./DatatbaseListPanel.css";
import warning from "../../assets/icons/warning.svg";
import FormPanel from "../formPanel/FormPanel";
import CheckboxSearch from "../checkboxSearch/CheckboxSearch";
import { Link } from "react-router-dom";
import Button from "../button/Button";
import DynamicTable, { type Column } from "../dynamicTable/DynamicTable";

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
    render: (row) => <div>{row.name}</div>,
  },
  {
    key: "collation",
    header: "Collation",
    render: (row) => <span className="cell-subtle-text">{row.collation}</span>,
  },
  {
    key: "actions",
    header: "Action",
    render: () => (
      <div className="table-actions">
        <span>Check privileges</span>
      </div>
    ),
  },
];

const protocolData: ProtocolData[] = [
  { id: 1, name: "phpadmin", collation: "utf8_bin", isLocked: true },
  {
    id: 2,
    name: "performance_schema",
    collation: "utf8_general_ci",
    isLocked: true,
  },
  {
    id: 3,
    name: "mysql",
    collation: "utf8mb4_general_ci",
    isLocked: true,
  },
  {
    id: 4,
    name: "information_schema",
    collation: "utf8_general_ci",
    isLocked: true,
  },
  {
    id: 5,
    name: "dummy",
    collation: "utf8mb4_general_ci",
    isLocked: false,
  }, // This one will be enabled
];
const DatatbaseListPanel = () => {
  return (
    <>
      <FormPanel panelName="Create Database">
        <div className="form-panel-fields">
          <div className="form-panel-options">
            <input
              type="text"
              placeholder="Database Name"
              className="form-input"
            />

            <select className="form-select">
              <option value="utf8mb4_icelandic_ci">utf8mb4_icelandic_ci</option>
              <option value="utf8mb4_general_ci">utf8mb4_general_ci</option>
              <option value="utf8mb4_unicode_ci">utf8mb4_unicode_ci</option>
            </select>
          </div>

          <Link to="/database-view">
            <Button btnText="Create new database" />
          </Link>
        </div>
      </FormPanel>
      <div className="databaseListPanel-container">
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

        <div className="databaseListPanel-warning-container">
          <img src={warning} alt="warning" />
          <p className="databaseListPanel-warning-text">
            Note: Enabling the database statistics here might cause heavy
            traffic between the web server and the ONQL server.
          </p>
        </div>
        <p>Enable statistics</p>
      </div>
    </>
  );
};

export default DatatbaseListPanel;
