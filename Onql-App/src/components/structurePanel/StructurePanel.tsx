import "./StructurePanel.css";
import FormPanel from "../formPanel/FormPanel";
import Table7Columns from "../table7Columns/Table7Columns";
import Button from "../button/Button";

const StructurePanel = () => {
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

          <Button btnText="Create new table" />
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
      <Table7Columns headingCol1={"Table"} />
      <div className="structurePanel-text">
        <p>Print</p>
        <p>Data Dictinory</p>
      </div>
    </>
  );
};

export default StructurePanel;
