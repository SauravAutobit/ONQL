import SearchBar from "../searchBar/SearchBar";
import "./DatatbaseListPanel.css";
import Checkbox from "@mui/material/Checkbox";
import warning from "../../assets/icons/warning.svg";

const DatatbaseListPanel = () => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <div className="databaseListPanel-container">
      <div className="databaseListPanel-checkbox-search">
        <div className="databaseListPanel-header">
          <div className="databaseListPanel-all-checkbox">
            <Checkbox {...label} />
            <p>Check all</p>
          </div>
          <p>Drop</p>
        </div>
        <SearchBar />
      </div>
      <div>
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
      </div>

      <div className="databaseListPanel-checkbox-search">
        <div className="databaseListPanel-header">Total: 5</div>
        <SearchBar />
      </div>
      <div>
        <img src={warning} alt="warning" />
        <p>
          Note: Enabling the database statistics here might cause heavy traffic
          between the web server and the ONQL server.
        </p>
      </div>
    </div>
  );
};

export default DatatbaseListPanel;
