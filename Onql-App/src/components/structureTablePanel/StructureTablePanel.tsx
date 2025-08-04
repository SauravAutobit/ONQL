import Button from "../button/Button";
import type { Column } from "../dynamicTable/DynamicTable";
import DynamicTable from "../dynamicTable/DynamicTable";
import FormPanel from "../formPanel/FormPanel";
import QueryActions from "../queryActions/QueryActions";
import "./StructureTablePanel.css";
import tableArrow from "../../assets/icons/tableArrow.svg";

interface StructureData {
  id: number;
  name: string;
  type: string;
  collation: string;
  attributes: string;
  null: string;
  default: string;
  comments: string;
  extra: string;
}
const structureColumns: Column<StructureData>[] = [
  {
    key: "id",
    header: "#",
    render: (row) => <span className="table-link">{row.id}</span>,
  },
  { key: "name", header: "Name" },
  { key: "type", header: "Type" },
  { key: "collation", header: "Collation" },
  { key: "attributes", header: "Attributes" },
  { key: "null", header: "Null" },
  { key: "default", header: "Default" },
  { key: "comments", header: "Comments" },
  {
    key: "extra",
    header: "Extra",
    render: () => (
      <div className="table-actions">
        <span>Change</span> <span>Drop</span> <span>More</span>
      </div>
    ),
  },
];
const structureData: StructureData[] = [
  {
    id: 1,
    name: "Mobile",
    type: "int(25)",
    collation: "utf8mb4_general_ci",
    attributes: "Fullname",
    null: "No",
    default: "None",
    comments: "",
    extra: "",
  },
  {
    id: 2,
    name: "Mobile",
    type: "int(25)",
    collation: "utf8mb4_general_ci",
    attributes: "Fullname",
    null: "No",
    default: "None",
    comments: "",
    extra: "",
  },
  {
    id: 3,
    name: "Mobile",
    type: "int(25)",
    collation: "utf8mb4_general_ci",
    attributes: "Fullname",
    null: "No",
    default: "None",
    comments: "",
    extra: "",
  },
  {
    id: 4,
    name: "Mobile",
    type: "int(25)",
    collation: "utf8mb4_general_ci",
    attributes: "Fullname",
    null: "No",
    default: "None",
    comments: "",
    extra: "",
  },
  // ... more rows
];

const StructureTablePanel = () => {
  return (
    <>
      <div style={{ margin: "20px 0" }}>
        <Button
          btnText={"Table Structure"}
          width={112}
          height={30}
          padding={"6px 10px"}
        />
      </div>
      <DynamicTable
        columns={structureColumns}
        data={structureData}
        useZebraStriping={false} // Disable alternating colors for this table
        showRowBorders={false} // --- Pass the new prop to hide borders ---
        showSelectAll={false} // --- Pass the new prop to hide header checkbox ---
        renderFooter={() => (
          <div className="table-footer">
            <img src={tableArrow} alt="arrow" />
            <span>Check all</span>
            <span className="table-actions">
              With selected:
              <span style={{ marginLeft: "12px" }}>Browse</span>
              <span>Change</span>
              <span>Drop</span> <span>Primary</span> <span>unique</span>{" "}
              <span>Index</span>
              <span>Spatial</span> <span>Fulltext</span>
            </span>
          </div>
        )}
      />
      <QueryActions />
      <FormPanel panelName={"Information"}>
        <div className="structureTablePanel-stats-container">
          <div className="space-usage-container">
            <div className="space-usage-heading">Space Usage</div>
            <div className="space-usage-details">
              <p>Data</p>
              <p>16.0KB</p>
            </div>
            <div className="space-usage-details bg-grey">
              <p>Index</p>
              <p>0 B</p>
            </div>
            <div className="space-usage-details">
              <p>Overhead</p>
              <p>0 B</p>
            </div>
            <div className="space-usage-details bg-grey">
              <p>Effective</p>
              <p>16.0 KiB</p>
            </div>
            <div className="space-usage-details">
              <p>Total</p>
              <p>16.0 KiB</p>
            </div>
            <div className="space-usage-details bg-grey">
              <p>Optimize table</p>
            </div>
          </div>

          <div className="row-statistics-container">
            <div className="space-usage-heading">Row statistics</div>
            <div className="space-usage-details">
              <p>Format</p>
              <p>dynamic</p>
            </div>
            <div className="space-usage-details bg-grey">
              <p>Collation</p>
              <p>utf8mb4_general_ci</p>
            </div>
            <div className="space-usage-details">
              <p>Next autoindex</p>
              <p>0</p>
            </div>
            <div className="space-usage-details bg-grey">
              <p>Creation</p>
              <p>Jul 17, 2025 at 10:40 AM</p>
            </div>
            <div className="space-usage-details">
              <p>Last update</p>
              <p>Jul 17, 2025 at 10:40 AM</p>
            </div>
            <div className="space-usage-details bg-grey">
              <p>Last check</p>
              <p>Jul 17, 2025 at 10:40 AM</p>
            </div>
          </div>
        </div>
      </FormPanel>
    </>
  );
};

export default StructureTablePanel;
