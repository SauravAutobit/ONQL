import FormPanel from "../formPanel/FormPanel";
import "./ExportPanel.css";

interface ExportPanelProps {
  selectedTab: string;
}

const ExportPanel = ({ selectedTab }: ExportPanelProps) => {
  return (
    <>
      <FormPanel panelName={"Export template"} selectedTab={selectedTab} />
    </>
  );
};

export default ExportPanel;
