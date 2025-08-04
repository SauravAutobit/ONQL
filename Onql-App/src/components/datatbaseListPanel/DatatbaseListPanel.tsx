import "./DatatbaseListPanel.css";
import warning from "../../assets/icons/warning.svg";
import FormPanel from "../formPanel/FormPanel";
import CheckboxSearch from "../checkboxSearch/CheckboxSearch";
// import Table3Columns from "../table3Columns/Table3Columns";
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
    header: "Protocols",
    render: (row) => <div>{row.name}</div>,
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
  { id: 1, name: "Protocol_1", collation: "utf8_bin", isLocked: true },
  { id: 2, name: "Protocol_2", collation: "utf8_general_ci", isLocked: true },
  {
    id: 3,
    name: "Protocol_3",
    collation: "utf8mb4_general_ci",
    isLocked: true,
  },
  { id: 4, name: "Protocol_4", collation: "utf8_general_ci", isLocked: true },
  {
    id: 5,
    name: "Protocol_5",
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

        {/* <Table3Columns headingCol1="Database" /> */}
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
