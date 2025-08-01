import Button from "../../components/button/Button";
import TableFooter from "../../components/tableFooter/TableFooter";
import TableMetaSettings from "../../components/tableMetaSettings/TableMetaSettings";
import TableOptions from "../../components/tableOptions/TableOptions";
import TablePartition from "../../components/tablePartition/TablePartition";
import Terminal from "../../components/terminal/Terminal";

const CreateTable = () => {
  return (
    <div className="mainContent-height">
      <div className="mainContent-padding">
        <div className="protocolsPanel-heading">Create Table</div>
        <div
          className="form-panel-fields"
          style={{ gap: "10px", marginTop: "36px" }}
        >
          <div className="form-panel-options">
            <div className="form-input-heading">
              <div>Table Name</div>
              <input
                type="text"
                placeholder="Database Name"
                className="form-input"
                style={{ width: "100%" }}
              />
            </div>

            <div className="form-input-heading">
              <p>Add Column</p>
              <input
                type="text"
                placeholder="Database Name"
                className="form-input"
                style={{ width: "100%" }}
              />
            </div>
          </div>

          <div style={{ marginTop: "27px" }}>
            <Button btnText="Go" width={100} padding={"6px 20px"} />
          </div>
        </div>
        <TableOptions />
        <TableMetaSettings />
        <TablePartition />
        <TableFooter />
      </div>
      <div>
        <Terminal />
      </div>
    </div>
  );
};

export default CreateTable;
