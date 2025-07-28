import Button from "../button/Button";
import FormPanel from "../formPanel/FormPanel";
import QueryActions from "../queryActions/QueryActions";
import Table7Columns from "../table7Columns/Table7Columns";
import "./StructureTablePanel.css";

const StructureTablePanel = () => {
  return (
    <>
      <Button
        btnText={"Table Structure"}
        width={112}
        height={30}
        padding={"6px 10px"}
      />
      <Table7Columns headingCol1={"#"} />
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
