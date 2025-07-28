import Button from "../button/Button";
import CheckBox from "../checkBox/CheckBox";
import FormPanel from "../formPanel/FormPanel";
import RadioButton from "../radioButton/RadioButton";
import "./OperationPanel.css";

const OperationPanel = () => {
  return (
    <>
      <FormPanel panelName={"Database Comment"}>
        <>
          <div className="form-panel-fields" style={{ gap: "20px" }}>
            <div className="form-panel-options">
              <input
                type="text"
                placeholder="value"
                className="form-input"
                style={{ width: "100%" }}
              />
            </div>

            <Button btnText="Go" width={100} padding={"6px 20px"} />
          </div>
        </>
      </FormPanel>
      <FormPanel panelName={"Create new table"}>
        <div className="form-panel-fields" style={{ gap: "10px" }}>
          <div className="form-panel-options">
            <div className="form-input-heading">
              <div>Table Name</div>
              <input
                type="text"
                placeholder="value"
                className="form-input"
                style={{ width: "100%" }}
              />
            </div>

            <div className="form-input-heading">
              <p>Number of columns</p>
              <input
                type="text"
                placeholder="value"
                className="form-input"
                style={{ width: "100%" }}
              />
            </div>
          </div>

          <div style={{ marginTop: "27px" }}>
            <Button btnText="Create" width={100} padding={"6px 20px"} />
          </div>
        </div>
      </FormPanel>
      <FormPanel panelName={"Rename database to"}>
        <>
          <div
            className="form-panel-fields"
            style={{ gap: "20px", marginBottom: "10px" }}
          >
            <div className="form-panel-options">
              <input
                type="text"
                placeholder="value"
                className="form-input"
                style={{ width: "100%" }}
              />
            </div>

            <Button btnText="Go" width={100} padding={"6px 20px"} />
          </div>
          <CheckBox text="Adjust privileges" />
        </>
      </FormPanel>
      <FormPanel panelName={"Remove database"}>
        <div style={{ color: "#A90000" }}>Drop the database (DROP)</div>
      </FormPanel>
      <FormPanel panelName={"Copy database to"}>
        <div
          className="form-panel-fields"
          style={{ gap: "20px", marginBottom: "20px" }}
        >
          <div className="form-panel-options">
            <input
              type="text"
              placeholder="value"
              className="form-input"
              style={{ width: "100%" }}
            />
          </div>
        </div>
        <div className="operationPanel-radio-btns">
          <RadioButton
            text={"at least one of the words"}
            name={"operationDatabase"}
          />
          <RadioButton text={"all of the words"} name={"operationDatabase"} />
          <RadioButton
            text={"the exact phrase as substring"}
            name={"operationDatabase"}
          />
        </div>
        <div className="operationPanel-check-btns">
          <CheckBox text="CREATE DATABASE before copying" />
          <CheckBox text="Add DROP TABLE / DROP VIEW" />
          <CheckBox text="Add AUTO_INCREMENT value" />
          <CheckBox text="Add constraints" />
          <CheckBox text="Add AUTO_INCREMENT value" />
          <CheckBox text="Switch to copied database" />
        </div>
        <div className="operationPanel-copyDb-btn">
          <Button btnText="Go" width={100} padding={"6px 20px"} />
        </div>
      </FormPanel>
      <FormPanel panelName={"Collation"}>
        <div
          className="form-panel-fields"
          style={{ gap: "20px", marginBottom: "10px" }}
        >
          <div className="form-panel-options">
            <select className="form-select import">
              <option value="utf8mb4_icelandic_ci">utf8mb4_icelandic_ci</option>
              <option value="utf8mb4_general_ci">utf8mb4_general_ci</option>
              <option value="utf8mb4_unicode_ci">utf8mb4_unicode_ci</option>
            </select>
          </div>

          <Button btnText="Go" width={100} padding={"6px 20px"} />
        </div>
        <CheckBox text="Change all tables collations" />
      </FormPanel>
    </>
  );
};

export default OperationPanel;
