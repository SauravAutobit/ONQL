import "./ProtocolsPanel.css";
import CheckboxSearch from "../../components/checkboxSearch/CheckboxSearch";
import FormPanel from "../../components/formPanel/FormPanel";
import Table3Columns from "../../components/table3Columns/Table3Columns";

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
        selectedTab={heading}
      />
    </>
  );
};

export default ProtocolsPanel;
