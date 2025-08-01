import { useState } from "react";
import DatatbaseListPanel from "../../components/datatbaseListPanel/DatatbaseListPanel";
import OnqlPanel from "../../components/onqlPanel/OnqlPanel";
import SubHeader from "../../components/subHeader/SubHeader";
import "./ServerView.css";
import ExportPanel from "../../components/exportPanel/ExportPanel";
import ImportPanel from "../../components/importPanel/ImportPanel";
import SettingsPanel from "../../components/settingsPanel/SettingsPanel";
import Terminal from "../../components/terminal/Terminal";

const ServerView = () => {
  const [selectedTab, setSelectedTab] = useState("Database");

  return (
    <div className="mainContent-height">
      <div className="mainContent-padding">
        <SubHeader
          options={["Database", "ONQL", "Export", "Import", "Settings"]}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />
        {selectedTab === "Database" && <DatatbaseListPanel />}
        {selectedTab === "ONQL" && <OnqlPanel />}
        {selectedTab === "Export" && (
          <ExportPanel
            heading={"Exporting databases from the current server"}
          />
        )}
        {selectedTab === "Import" && <ImportPanel />}
        {selectedTab === "Settings" && <SettingsPanel />}
      </div>
      <div>
        <Terminal />
      </div>
    </div>
  );
};

export default ServerView;
