import "./DatatbaseListPanel.css";
import warning from "../../assets/icons/warning.svg";
import FormPanel from "../formPanel/FormPanel";
import CheckboxSearch from "../checkboxSearch/CheckboxSearch";
import Table3Columns from "../table3Columns/Table3Columns";

interface DatatbaseListPanelProps {
  selectedTab: string;
}
const DatatbaseListPanel = ({ selectedTab }: DatatbaseListPanelProps) => {
  return (
    <>
      <FormPanel panelName="Create Database" selectedTab={selectedTab} />
      <div className="databaseListPanel-container">
        <CheckboxSearch />

        <Table3Columns headingCol1="Database" />

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
