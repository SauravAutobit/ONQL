import FormPanel from "../formPanel/FormPanel";
import "./ImportPanel.css";

interface ImportPanelProps {
  selectedTab: string;
}
const ImportPanel = ({ selectedTab }: ImportPanelProps) => {
  return (
    <>
      <FormPanel panelName={"Import"} selectedTab={selectedTab} />
      <FormPanel panelName={"Partial import:"} selectedTab={selectedTab} />
      <FormPanel panelName={"Format"} selectedTab={selectedTab} />
    </>
  );
};

export default ImportPanel;
