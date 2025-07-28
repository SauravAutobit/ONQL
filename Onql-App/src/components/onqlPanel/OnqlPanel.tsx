import { Checkbox } from "@mui/material";
import Button from "../button/Button";
import FormPanel from "../formPanel/FormPanel";
import QueryEditor from "../queryEditor/QueryEditor";
import "./OnqlPanel.css";

const OnqlPanel = () => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <>
      <FormPanel panelName="Run ONQL query/queries on database testing_db: ">
        <>
          <QueryEditor />
          <div className="form-onqlPanel-btns">
            <Button
              btnText={"Clear"}
              width={100}
              height={30}
              padding={"6px 10px"}
            />
            <Button
              btnText={"Format"}
              width={100}
              height={30}
              padding={"6px 10px"}
            />
          </div>

          <div className="form-onql-checkbox">
            <Checkbox {...label} />
            <p>Blind parameter</p>
          </div>
          <div className="form-panel-options">
            <p>Bookmark this ONQL query:</p>
            <input type="text" className="form-input" />
          </div>

          <div className="form-onql-options-container">
            <div className="form-panel-fields">
              <div className="form-panel-options">
                <p>Delimiter:</p>
                <input
                  type="text"
                  className="form-input"
                  style={{ width: "7%" }}
                />
                <div className="form-onql-checkbox">
                  <Checkbox {...label} />
                  <p>Show this query here again</p>
                </div>
                <div className="form-onql-checkbox">
                  <Checkbox {...label} />
                  <p>Retain query box</p>
                </div>
                <div className="form-onql-checkbox">
                  <Checkbox {...label} />
                  <p>Rollback when finished</p>
                </div>
                <div className="form-onql-checkbox">
                  <Checkbox {...label} />
                  <p>Enable foreign key checks</p>
                </div>
              </div>

              <Button
                btnText="Go"
                width={100}
                height={30}
                padding={"6px 20px"}
              />
            </div>
          </div>
        </>
      </FormPanel>
    </>
  );
};

export default OnqlPanel;
