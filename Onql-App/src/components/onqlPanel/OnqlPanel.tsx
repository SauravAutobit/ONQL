import FormPanel from "../formPanel/FormPanel";
import "./OnqlPanel.css";

interface OnqlPanelProps {
  selectedTab: string;
}

const OnqlPanel = ({ selectedTab }: OnqlPanelProps) => {
  return (
    <>
      <FormPanel
        panelName="Run ONQL query/queries on database testing_db: "
        selectedTab={selectedTab}
      />
    </>
  );
};

export default OnqlPanel;
