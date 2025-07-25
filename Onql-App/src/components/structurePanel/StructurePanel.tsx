import "./StructurePanel.css";
import FormPanel from "../formPanel/FormPanel";
import Table7Columns from "../table7Columns/Table7Columns";

interface StructurePanelProps {
  selectedTab: string;
}

const StructurePanel = ({ selectedTab }: StructurePanelProps) => {
  return (
    <>
      <FormPanel panelName={"Create Table"} selectedTab={selectedTab} />
      <FormPanel panelName={"Filters"} selectedTab={selectedTab} />
      <Table7Columns headingCol1={"Table"} />
      <div className="structurePanel-text">
        <p>Print</p>
        <p>Data Dictinory</p>
      </div>
    </>
  );
};

export default StructurePanel;
