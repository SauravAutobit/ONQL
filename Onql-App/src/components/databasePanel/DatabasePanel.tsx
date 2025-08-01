import { useState } from "react";
import Button from "../button/Button";
import CheckboxSearch from "../checkboxSearch/CheckboxSearch";
import FormPanel from "../formPanel/FormPanel";
import Table3Columns from "../table3Columns/Table3Columns";
import "./DatabasePanel.css";
import Terminal from "../terminal/Terminal";

const DatabasePanel = () => {
  const [selectedDatabase, setSelectedDatabase] = useState("");

  return (
    <div className="mainContent-height">
      <div className="mainContent-padding">
        <div className="protocolsPanel-heading">Database</div>
        <CheckboxSearch />
        <Table3Columns headingCol1={"Database"} />
        <FormPanel panelName={"Add Database"}>
          <div className="form-panel-fields">
            <div className="form-panel-options">
              <input
                type="text"
                placeholder="Database alias"
                className="form-input"
              />

              <select
                className="form-select"
                value={selectedDatabase}
                onChange={(e) => setSelectedDatabase(e.target.value)}
              >
                <option value="" disabled>
                  Select Database
                </option>
                <option value="Database 1">Database 1</option>
                <option value="Database 2">Database 2</option>
                <option value="Database 3">Database 3</option>
              </select>
            </div>

            <Button btnText="Add new database" />
          </div>
        </FormPanel>
      </div>
      <div>
        <Terminal />
      </div>
    </div>
  );
};

export default DatabasePanel;
