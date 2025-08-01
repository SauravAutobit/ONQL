import { useState } from "react";
import Button from "../../components/button/Button";
import FormPanel from "../../components/formPanel/FormPanel";
// import Table7Columns from "../../components/table7Columns/Table7Columns";
import type { Column } from "../../components/dynamicTable/DynamicTable";
import { Link } from "react-router-dom";
import star from "../../assets/icons/star.svg";
import DynamicTable from "../../components/dynamicTable/DynamicTable";
import tableArrow from "../../assets/icons/tableArrow.svg";
import Terminal from "../../components/terminal/Terminal";

interface DatabaseData {
  id: number;
  name: string;
  row: number;
  type: string;
  collation: string;
  size: string;
  overhead: string;
}

const databaseColumns: Column<DatabaseData>[] = [
  {
    key: "name",
    header: "Table",
    render: (row) => (
      // <Link to={`/database/${row.id}`} className="table-link">
      //   {row.name}
      // </Link>
      <Link to={"/protocol-column"} className="table-link">
        {row.name}
      </Link>
    ),
  },
  {
    key: "actions",
    header: "Action",
    render: () => (
      <div className="table-actions">
        <img src={star} alt="star" className="star-icon" />
        <span>Browser</span> <span>Structure</span> <span>Search</span>{" "}
        <span>Insert</span> <span>Empty</span> <span>Drop</span>
      </div>
    ),
  },
  { key: "row", header: "Row" },
  { key: "type", header: "Type" },
  { key: "collation", header: "Collation" },
  { key: "size", header: "Size" },
  { key: "overhead", header: "Overhead" },
];
const databaseData: DatabaseData[] = [
  {
    id: 1,
    name: "test_db",
    row: 0,
    type: "InnoDB",
    collation: "utf8mb4_general_ci",
    size: "16.0 Kib",
    overhead: "-",
  },
];

const ProtocolTable = () => {
  const [selectedDatabase, setSelectedDatabase] = useState("");

  return (
    <div className="mainContent-height">
      {/* <Table7Columns headingCol1={"Table"} /> */}
      <div className="mainContent-padding">
        <DynamicTable
          columns={databaseColumns}
          data={databaseData}
          renderFooter={() => (
            <div className="table-footer">
              <img src={tableArrow} alt="arrow" />
              <span>Check all</span>
              <span className="table-actions">With selected: ...</span>
            </div>
          )}
        />
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
      </div>
      <div>
        <Terminal />
      </div>
    </div>
  );
};

export default ProtocolTable;
