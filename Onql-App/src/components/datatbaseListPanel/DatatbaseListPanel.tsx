import "./DatatbaseListPanel.css";
import warning from "../../assets/icons/warning.svg";
import FormPanel from "../formPanel/FormPanel";
import CheckboxSearch from "../checkboxSearch/CheckboxSearch";
import Table3Columns from "../table3Columns/Table3Columns";
import { Link } from "react-router-dom";
import Button from "../button/Button";

// interface DatatbaseListPanelProps {
//   selectedTab: string;
// }
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
