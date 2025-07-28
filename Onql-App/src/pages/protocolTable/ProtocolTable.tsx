import { useState } from "react";
import Button from "../../components/button/Button";
import FormPanel from "../../components/formPanel/FormPanel";
import Table7Columns from "../../components/table7Columns/Table7Columns";

const ProtocolTable = () => {
  const [selectedDatabase, setSelectedDatabase] = useState("");

  return (
    <>
      <Table7Columns headingCol1={"Table"} />
      <FormPanel panelName="Add Table">
        <div className="form-panel-fields">
          <div className="form-panel-options">
            <input
              type="text"
              placeholder="Table alias"
              className="form-input"
            />

            <select
              className="form-select"
              value={selectedDatabase}
              onChange={(e) => setSelectedDatabase(e.target.value)}
            >
              <option value="" disabled>
                Select Table
              </option>
              <option value="Database 1">Database 1</option>
              <option value="Database 2">Database 2</option>
              <option value="Database 3">Database 3</option>
            </select>
          </div>

          <Button btnText="Add new Table" width={109} />
        </div>
      </FormPanel>
    </>
  );
};

export default ProtocolTable;
