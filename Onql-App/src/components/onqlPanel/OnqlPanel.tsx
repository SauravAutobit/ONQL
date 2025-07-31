import Button from "../button/Button";
import FormPanel from "../formPanel/FormPanel";
import QueryEditor from "../queryEditor/QueryEditor";
import "./OnqlPanel.css";
import FeaturesTabs from "../featuresTabs/FeaturesTabs";
import { useLocation } from "react-router-dom";
import CheckBox from "../checkBox/CheckBox";

const OnqlPanel = () => {
  const { pathname } = useLocation();
  return (
    <>
      <FormPanel panelName="Run ONQL query/queries on database testing_db: ">
        <>
          <QueryEditor />
          <div className="onql-tabs-btns-container">
            {pathname === "/table-view" && (
              <FeaturesTabs
                options={["SELECT*", "SELECT", "INSERT", "UPDATE", "DELETE"]}
                border="1px solid var(--border-color-primary)"
                borderRight="1px solid var(--border-color-primary)"
              />
            )}
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
          </div>
          <div className="form-onql-checkbox" style={{ margin: "20px 0" }}>
            <CheckBox text="Blind parameter" />
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
                  <CheckBox text="Show this query here again" />
                </div>
                <div className="form-onql-checkbox">
                  <CheckBox text="Retain query box" />
                </div>
                <div className="form-onql-checkbox">
                  <CheckBox text="Rollback when finished" />
                </div>
                <div className="form-onql-checkbox">
                  <CheckBox text="Enable foreign key checks" />
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
