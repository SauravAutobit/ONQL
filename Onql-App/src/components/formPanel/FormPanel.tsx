import Button from "../button/Button";
import QueryEditor from "../queryEditor/QueryEditor";
import Checkbox from "@mui/material/Checkbox";

import "./FormPanel.css";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import FileUploadInput from "../fileUploadInput/FileUploadInput";
import ToggleButton from "../toggleButton/ToggleButton";
import RadioButton from "../radioButton/RadioButton";
import CheckBox from "../checkBox/CheckBox";
import tableDownArrow from "../../assets/icons/tableDownArrow.svg";

interface AddColumn {
  alias: string;
  column: string;
  show: boolean;
}

interface FormPanelProps {
  panelName: string;
  selectedTab: string;
  addColumn?: AddColumn;
  setAddColumn?: React.Dispatch<React.SetStateAction<AddColumn>>;
  handleAddColumn?: () => void;
}

const FormPanel = ({
  panelName,
  selectedTab,
  addColumn,
  setAddColumn,
  handleAddColumn,
}: FormPanelProps) => {
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

          <Link to="/database-view">
            <Button btnText="Create new database" />
          </Link>
        </div>
      )}

      {selectedTab === "ONQL" && (
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
      )}

      {selectedTab === "Export" && pathname === "/" && (
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

      {selectedTab === "Add Table" && (
        <div className="form-panel-fields">
          <div className="form-panel-options">
            <input
              type="text"
              placeholder="Table alias"
              className="form-input"
            />

            <select
              className="form-select"
              value={selectedDatabase}
              onChange={(e) => setSelectedDatabase(e.target.value)}
            >
              <option value="" disabled>
                Select Table
              </option>
              <option value="Database 1">Database 1</option>
              <option value="Database 2">Database 2</option>
              <option value="Database 3">Database 3</option>
            </select>
          </div>

          <Button btnText="Add new Table" width={109} />
        </div>
      )}

      {selectedTab === "Add Column" && addColumn && setAddColumn && (
        <div className="form-panel-fields">
          <div className="form-panel-options">
            <input
              type="text"
              placeholder="Column alias"
              className="form-input"
              value={addColumn.alias}
              onChange={(e) =>
                setAddColumn((prev) => {
                  return {
                    ...prev,
                    alias: e.target.value,
                  };
                })
              }
            />

            <select
              className="form-select"
              value={selectedDatabase}
              onChange={(e) => {
                setSelectedDatabase(e.target.value);
                setAddColumn((prev) => {
                  return {
                    ...prev,
                    column: e.target.value,
                  };
                });
              }}
            >
              <option value="" disabled>
                Select Column
              </option>
              <option value="Database 1">Database 1</option>
              <option value="Database 2">Database 2</option>
              <option value="Database 3">Database 3</option>
            </select>
          </div>

          <Button btnText="Add Column" width={109} onClick={handleAddColumn} />
        </div>
      )}

      {selectedTab === "Import" && panelName === "Import" && (
        <>
          <p> File may be compressed (gzip, bzip2) or uncompressed.</p>
          <p>
            A compressed file's name must end in
            <span style={{ fontWeight: "var(--font-weight-tertiary)" }}>
              .[format].[compression]
            </span>
            . Example:
            <span style={{ fontWeight: "var(--font-weight-tertiary)" }}>
              .sql.zip
            </span>
          </p>
          <FileUploadInput />

          <div className="formPanel-import-container">
            <p>Character set of the file:</p>
            <select className="form-select import">
              <option value="utf8mb4_icelandic_ci">utf8mb4_icelandic_ci</option>
              <option value="utf8mb4_general_ci">utf8mb4_general_ci</option>
              <option value="utf8mb4_unicode_ci">utf8mb4_unicode_ci</option>
            </select>
          </div>
        </>
      )}

      {selectedTab === "Import" && panelName === "Partial import:" && (
        <>
          <div className="formPanel-togglebtn-container">
            <ToggleButton />
            <div>
              <p>
                Allow the interruption of an import in case the script detects
                it is close to the PHP timeout limit.
              </p>
              <p style={{ color: "var(--text-color-secondary)" }}>
                This might be a good way to import large files, however it can
                break transactions.
              </p>
            </div>
          </div>
          <FileUploadInput />

          <div className="formPanel-import-container">
            <p>
              Skip this number of queries (for SQL) starting from the first one:
            </p>
            <input type="text" placeholder="0" className="form-input import" />
          </div>
        </>
      )}

      {selectedTab === "Import" && panelName === "Format" && (
        <>
          <div className="formPanel-import-container format">
            <p>
              Skip this number of queries (for SQL) starting from the first one:{" "}
            </p>
            <input
              type="text"
              placeholder="ONQL"
              className="form-input import"
            />
          </div>
        </>
      )}

      {selectedTab === "Structure" && panelName === "Create Table" && (
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
      )}

      {selectedTab === "Structure" && panelName === "Filters" && (
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
      )}

      {selectedTab === "Search" && (
        <>
          <div className="formPanel-import-container format">
            <p>Words or values to search for (wildcard: "%"):</p>
            <input type="text" placeholder="" className="form-input import" />
          </div>
          <div className="form-panel nested">
            <p className="form-panel-label">Finds</p>
            <div className="formPanel-radiobtn-container">
              <RadioButton
                name="searchType"
                text={"at least one of the words"}
              />
              <RadioButton name="searchType" text={"all of the words"} />
              <RadioButton
                name="searchType"
                text={"the exact phrase as substring"}
              />
              <RadioButton
                name="searchType"
                text={"the exact phrase as whole field"}
              />
              <RadioButton name="searchType" text={"as regular expression"} />
            </div>
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
          <Button btnText={"Go"} width={100} height={30} padding={"6px 20px"} />
        </>
      )}

      {selectedTab === "Export" && pathname === "/database-view" && (
        <>
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
        </>
      )}
    </div>
  );
};

export default FormPanel;
