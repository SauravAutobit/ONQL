import FormPanel from "../formPanel/FormPanel";
import "./SearchPanel.css";

interface SearchPanelProps {
  selectedTab: string;
}
const SearchPanel = ({ selectedTab }: SearchPanelProps) => {
  return (
    <>
      <FormPanel panelName={"Search in database"} selectedTab={selectedTab} />
    </>
  );
};

export default SearchPanel;
