import DatatbaseListPanel from "../../components/datatbaseListPanel/DatatbaseListPanel";
import FormPanel from "../../components/formPanel/FormPanel";
import SubHeader from "../../components/subHeader/SubHeader";
import "./ServerView.css";

const ServerView = () => {
  return (
    <>
      <SubHeader
        options={["Database", "ONQL", "Export", "Import", "Settings"]}
      />
      <FormPanel />
      <DatatbaseListPanel />
    </>
  );
};

export default ServerView;
