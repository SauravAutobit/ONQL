import { useState } from "react";
import DatatbaseListPanel from "../../components/datatbaseListPanel/DatatbaseListPanel";
import OnqlPanel from "../../components/onqlPanel/OnqlPanel";
import SubHeader from "../../components/subHeader/SubHeader";
import "./ServerView.css";
import ExportPanel from "../../components/exportPanel/ExportPanel";

const ServerView = () => {
  const [selectedTab, setSelectedTab] = useState("Database");

  return (
    <>
      <SubHeader
        options={["Database", "ONQL", "Export", "Import", "Settings"]}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      />
      {selectedTab === "Database" && (
        <DatatbaseListPanel selectedTab={selectedTab} />
      )}
      {selectedTab === "ONQL" && <OnqlPanel selectedTab={selectedTab} />}
      {selectedTab === "Export" && <ExportPanel selectedTab={selectedTab} />}
    </>
  );
};

export default ServerView;
