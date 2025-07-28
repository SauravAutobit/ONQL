import Button from "../button/Button";
import FormPanel from "../formPanel/FormPanel";
import "./ExportPanel.css";

interface ExportPanelProps {
  heading: string;
}

const ExportPanel = ({ heading }: ExportPanelProps) => {
  return (
    <>
      <div className="exportPanel-heading">{heading}</div>
      <FormPanel panelName={"Export template"}>
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
      </FormPanel>
    </>
  );
};

export default ExportPanel;
