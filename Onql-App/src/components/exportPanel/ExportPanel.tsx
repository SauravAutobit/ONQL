import FormPanel from "../formPanel/FormPanel";
import "./ExportPanel.css";

interface ExportPanelProps {
  heading: string;
  selectedTab: string;
}

const ExportPanel = ({ selectedTab, heading }: ExportPanelProps) => {
  return (
    <>
      <div className="exportPanel-heading">{heading}</div>
      <FormPanel panelName={"Export template"} selectedTab={selectedTab} />
    </>
  );
};

export default ExportPanel;
