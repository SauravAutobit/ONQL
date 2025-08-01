import "./StructurePanel.css";
import FormPanel from "../formPanel/FormPanel";
import Button from "../button/Button";
import { Link } from "react-router-dom";
import DynamicTable, { type Column } from "../dynamicTable/DynamicTable";
import tableArrow from "../../assets/icons/tableArrow.svg";
import star from "../../assets/icons/star.svg";

interface DatabaseData {
  id: number;
  name: string;
  row?: number;
  type?: string;
  collation?: string;
  size?: string;
  overhead?: string;
  isSummary?: boolean; // Add the summary flag
  actions?: string; // For the "Sum" text
}

const databaseColumns: Column<DatabaseData>[] = [
  {
    key: "name",
    header: "Table",
    render: (row) => (
      <Link to={"/protocol-column"} className="table-link">
        {row.name}
      </Link>
    ),
  },
  {
    key: "actions",
    header: "Action",
    render: (row) =>
      row.isSummary ? (
        <span className="table-actions">{row.actions}</span>
      ) : (
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
  {
    id: 2,
    name: "1 table",
    isSummary: true,
    actions: "Sum",
    row: 0,
    type: "InnoDB",
    collation: "utf8mb4_general_ci",
    size: "16.0 Kib",
    overhead: "0 B",
  },
];

const StructurePanel = () => {
  // const column = [{}];
  return (
    <>
      <FormPanel panelName={"Create Table"}>
        <div className="form-panel-fields">
          <div className="form-panel-options">
            <input
              type="text"
              placeholder="Table name"
              className="form-input"
            />

            <input
              type="text"
              placeholder="Number of Column"
              className="form-input"
            />
          </div>

          <Link to={"/create-table"}>
            <Button btnText="Create new table" width={124} height={38} />
          </Link>
        </div>
      </FormPanel>
      <FormPanel panelName={"Filters"}>
        <>
          <div className="form-panel-options">
            <p>Contain the word :</p>
            <input
              type="text"
              className="form-input"
              placeholder="Enter word"
            />
          </div>
        </>
      </FormPanel>

      <DynamicTable
        columns={databaseColumns}
        data={databaseData}
        useZebraStriping={false} // Disable alternating colors for this table
        showRowBorders={false} // --- Pass the new prop to hide borders ---
        showSelectAll={false} // --- Pass the new prop to hide header checkbox ---
        renderFooter={() => (
          <div className="table-footer">
            <img src={tableArrow} alt="arrow" />
            <span className="table-link">Check all</span>
            <span>
              <Button
                btnText={"Export Table"}
                width={113}
                height={30}
                padding={"6px 20px"}
              />
            </span>
          </div>
        )}
      />
      <div className="structurePanel-text">
        <p>Print</p>
        <p>Data Dictinory</p>
      </div>
    </>
  );
};

export default StructurePanel;
