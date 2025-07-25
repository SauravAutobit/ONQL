import { useState } from "react";
import DatatbaseListPanel from "../../components/datatbaseListPanel/DatatbaseListPanel";
import OnqlPanel from "../../components/onqlPanel/OnqlPanel";
import SubHeader from "../../components/subHeader/SubHeader";
import "./ServerView.css";
import ExportPanel from "../../components/exportPanel/ExportPanel";
import ImportPanel from "../../components/importPanel/ImportPanel";

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
      {selectedTab === "Export" && (
        <ExportPanel
          selectedTab={selectedTab}
          heading={"Exporting databases from the current server"}
        />
      )}
      {selectedTab === "Import" && <ImportPanel selectedTab={selectedTab} />}
    </>
  );
};

export default ServerView;
