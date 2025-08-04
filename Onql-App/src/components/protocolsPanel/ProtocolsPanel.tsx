import "./ProtocolsPanel.css";
import CheckboxSearch from "../../components/checkboxSearch/CheckboxSearch";
import FormPanel from "../../components/formPanel/FormPanel";
import Button from "../button/Button";
import Terminal from "../terminal/Terminal";
import DynamicTable, { type Column } from "../dynamicTable/DynamicTable";
import { Link } from "react-router-dom";

interface ProtocolsPanel {
  heading: string;
}

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
    render: (row) => (
      <Link to="/protocol-database">
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

const ProtocolsPanel = ({ heading }: ProtocolsPanel) => {
  return (
    <div className="mainContent-height">
      <div className="mainContent-padding">
        <div className="protocolsPanel-heading">{heading}</div>
        <CheckboxSearch />
        <DynamicTable
          columns={protocolColumns}
          data={protocolData}
          useZebraStriping={true} // Disable alternating colors for this table
          showRowBorders={false} // --- Pass the new prop to hide borders ---
          showSelectAll={false} // --- Pass the new prop to hide header checkbox ---
          showBorders={false}
          footerPosition="outside"
          renderFooter={() => (
            <div style={{ padding: "12px 16px", fontWeight: "bold" }}>
              Total: {protocolData.length}
            </div>
          )}
        />
        <FormPanel
          panelName={`${heading === "Protocols" ? "Create" : "Add"} ${heading}`}
        >
          <div className="form-panel-fields" style={{ gap: "10px" }}>
            <div className="form-panel-options">
              <input
                type="text"
                placeholder="Protocol alias"
                className="form-input"
                style={{ width: "100%" }}
              />
            </div>

            <Button btnText="Create new protocol" width={143} />
          </div>
        </FormPanel>
      </div>
      <div>
        <Terminal />
      </div>
    </div>
  );
};

export default ProtocolsPanel;
