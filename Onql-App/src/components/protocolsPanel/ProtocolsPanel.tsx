import "./ProtocolsPanel.css";
import CheckboxSearch from "../../components/checkboxSearch/CheckboxSearch";
import FormPanel from "../../components/formPanel/FormPanel";
import Table3Columns from "../../components/table3Columns/Table3Columns";
import Button from "../button/Button";

interface ProtocolsPanel {
  heading: string;
}

const ProtocolsPanel = ({ heading }: ProtocolsPanel) => {
  return (
    <>
      <div className="protocolsPanel-heading">{heading}</div>
      <CheckboxSearch />
      <Table3Columns headingCol1={heading} />
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
    </>
  );
};

export default ProtocolsPanel;
