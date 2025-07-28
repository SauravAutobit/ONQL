import Button from "../button/Button";
import CheckBox from "../checkBox/CheckBox";
import tableDownArrow from "../../assets/icons/tableDownArrow.svg";
import FormPanel from "../formPanel/FormPanel";

const ExportDatabasePanel = () => {
  return (
    <>
      <div className="exportPanel-heading">
        Exporting tables from the “database_name” Database
      </div>
      <FormPanel panelName={"Export template"}>
        <div className="formPanel-import-container format">
          <p>Select Table</p>
          <select className="form-select import">
            <option value="utf8mb4_icelandic_ci">utf8mb4_icelandic_ci</option>
            <option value="utf8mb4_general_ci">utf8mb4_general_ci</option>
            <option value="utf8mb4_unicode_ci">utf8mb4_unicode_ci</option>
          </select>
        </div>

        <div className="form-panel nested">
          <p className="form-panel-label">Inside tables:</p>
          <div className="form-panel-allCheckbox">
            <img src={tableDownArrow} alt="tableDownArrow" />
            <p className="form-panel-allCheckbox-text">Select all</p>
            <p className="form-panel-allCheckbox-text">Unselect all</p>
          </div>
          <div className="formPanel-checkbox-container">
            <CheckBox text="Blind parameter" />
            <CheckBox text="Blind parameter" />
            <CheckBox text="Blind parameter" />
            <CheckBox text="Blind parameter" />
            <CheckBox text="Blind parameter" />
          </div>
        </div>
        <div className="formPanel-import-container export">
          <p>Select Table</p>
          <input type="text" placeholder="" className="form-input import" />
        </div>
        <Button
          btnText={"Export"}
          width={100}
          height={38}
          padding={"6px 20px"}
        />
      </FormPanel>
    </>
  );
};

export default ExportDatabasePanel;
