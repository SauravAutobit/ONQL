import FileUploadInput from "../fileUploadInput/FileUploadInput";
import FormPanel from "../formPanel/FormPanel";
import ToggleButton from "../toggleButton/ToggleButton";
import "./ImportPanel.css";

const ImportPanel = () => {
  return (
    <>
      <FormPanel panelName={"Import"}>
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
      </FormPanel>
      <FormPanel panelName={"Partial import:"}>
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
      </FormPanel>
      <FormPanel panelName={"Format"}>
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
      </FormPanel>
    </>
  );
};

export default ImportPanel;
