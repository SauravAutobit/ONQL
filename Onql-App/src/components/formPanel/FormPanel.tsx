import Button from "../button/Button";
import QueryEditor from "../queryEditor/QueryEditor";
import Checkbox from "@mui/material/Checkbox";

import "./FormPanel.css";
import { useLocation } from "react-router-dom";
import { useState } from "react";

interface FormPanelProps {
  panelName: string;
  selectedTab: string;
}
const FormPanel = ({ panelName, selectedTab }: FormPanelProps) => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  const { pathname } = useLocation();

  const [selectedDatabase, setSelectedDatabase] = useState("");

  return (
    <div className="form-panel">
      <p className="form-panel-label">{panelName}</p>

      {selectedTab === "Database" && pathname === "/" && (
        <div className="form-panel-fields">
          <div className="form-panel-options">
            <input
              type="text"
              placeholder="Database Name"
              className="form-input"
            />

            <select className="form-select">
              <option value="utf8mb4_icelandic_ci">utf8mb4_icelandic_ci</option>
              <option value="utf8mb4_general_ci">utf8mb4_general_ci</option>
              <option value="utf8mb4_unicode_ci">utf8mb4_unicode_ci</option>
            </select>
          </div>

          <Button btnText="Create new database" />
        </div>
      )}

      {selectedTab === "ONQL" && (
        <>
          <QueryEditor />
          <div className="form-onqlPanel-btns">
            <Button
              btnText={"Clear"}
              width={53}
              height={30}
              padding={"6px 10px"}
            />
            <Button
              btnText={"Format"}
              width={64}
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
                width={58}
                height={30}
                padding={"6px 20px"}
              />
            </div>
          </div>
        </>
      )}

      {selectedTab === "Export" && (
        <div className="form-panel-fields" style={{ gap: "10px" }}>
          <div className="form-panel-options">
            <div className="form-input-heading">
              <div>Database name</div>
              <input
                type="text"
                placeholder="Database Name"
                className="form-input"
                style={{ width: "100%" }}
              />
            </div>

            <div className="form-input-heading">
              <p>Format</p>
              <input
                type="text"
                placeholder="Database Name"
                className="form-input"
                style={{ width: "100%" }}
              />
            </div>
          </div>

          <div style={{ marginTop: "27px" }}>
            <Button btnText="Export" width={100} padding={"6px 20px"} />
          </div>
        </div>
      )}

      {selectedTab === "Protocols" && (
        <div className="form-panel-fields" style={{ gap: "10px" }}>
          <div className="form-panel-options">
            <input
              type="text"
              placeholder="Protocol alias"
              className="form-input"
              style={{ width: "100%" }}
            />
          </div>

          <Button btnText="Create new protocol" width={143} />
        </div>
      )}

      {selectedTab === "Database" && pathname === "/protocol-database" && (
        <div className="form-panel-fields">
          <div className="form-panel-options">
            <input
              type="text"
              placeholder="Database alias"
              className="form-input"
            />

            <select
              className="form-select"
              value={selectedDatabase}
              onChange={(e) => setSelectedDatabase(e.target.value)}
            >
              <option value="" disabled>
                Select Database
              </option>
              <option value="Database 1">Database 1</option>
              <option value="Database 2">Database 2</option>
              <option value="Database 3">Database 3</option>
            </select>
          </div>

          <Button btnText="Add new database" />
        </div>
      )}
    </div>
  );
};

export default FormPanel;
