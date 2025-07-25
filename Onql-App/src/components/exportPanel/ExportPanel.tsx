import FormPanel from "../formPanel/FormPanel";
import "./ExportPanel.css";

interface ExportPanelProps {
  selectedTab: string;
}

const ExportPanel = ({ selectedTab }: ExportPanelProps) => {
  return (
    <>
      <div className="exportPanel-heading">
        Exporting databases from the current server
      </div>
      <FormPanel panelName={"Export template"} selectedTab={selectedTab} />
    </>
  );
};

export default ExportPanel;
