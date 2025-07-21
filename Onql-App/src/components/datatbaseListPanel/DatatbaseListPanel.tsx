import "./DatatbaseListPanel.css";
import Checkbox from "@mui/material/Checkbox";
import warning from "../../assets/icons/warning.svg";
import FormPanel from "../formPanel/FormPanel";
import CheckboxSearch from "../checkboxSearch/CheckboxSearch";

interface DatatbaseListPanelProps {
  selectedTab: string;
}
const DatatbaseListPanel = ({ selectedTab }: DatatbaseListPanelProps) => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <>
      <FormPanel panelName="Create Database" selectedTab={selectedTab} />
      <div className="databaseListPanel-container">
        <CheckboxSearch />

        <table className="databaseListPanel-table">
          <thead className="databaseListPanel-table-header">
            <tr>
              <th></th>
              <th className="databaseListPanel-table-header-name">Database</th>
              <th className="databaseListPanel-table-header-name">Collation</th>
              <th className="databaseListPanel-table-header-name">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="databaseListPanel-table-row">
              <td>
                <Checkbox {...label} disabled />
              </td>
              <td>Database 1</td>
              <td className="databaseListPanel-table-collations">
                utf8mb4_general_ci
              </td>
              <td className="databaseListPanel-table-actions">
                Check privileges
              </td>
            </tr>
            <tr>
              <td>
                <Checkbox {...label} disabled />
              </td>
              <td>Database 1</td>
              <td className="databaseListPanel-table-collations">
                utf8mb4_general_ci
              </td>
              <td className="databaseListPanel-table-actions">
                Check privileges
              </td>
            </tr>
            <tr className="databaseListPanel-table-row">
              <td>
                <Checkbox {...label} disabled />
              </td>
              <td>Database 1</td>
              <td className="databaseListPanel-table-collations">
                utf8mb4_general_ci
              </td>
              <td className="databaseListPanel-table-actions">
                Check privileges
              </td>
            </tr>
            <tr>
              <td>
                <Checkbox {...label} disabled />
              </td>
              <td>Database 1</td>
              <td className="databaseListPanel-table-collations">
                utf8mb4_general_ci
              </td>
              <td className="databaseListPanel-table-actions">
                Check privileges
              </td>
            </tr>
            <tr className="databaseListPanel-table-row">
              <td>
                <Checkbox {...label} />
              </td>
              <td>Database 1</td>
              <td className="databaseListPanel-table-collations">
                utf8mb4_general_ci
              </td>
              <td className="databaseListPanel-table-actions">
                Check privileges
              </td>
            </tr>

            {/* Add more rows as needed */}
          </tbody>
        </table>

        <div className="databaseListPanel-total-database">Total: 5</div>

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
