import { useState } from "react";
import SettingsTabs from "../settingsTabs/SettingsTabs";
import "./Settings.css";
import TwoFactorAuthentication from "../twoFactorAuthentication/TwoFactorAuthentication";

const SettingsPanel = () => {
  const [selectedTab, setSelectedTab] = useState("Manage your setting");
  return (
    <>
      <SettingsTabs
        options={[
          "Manage your setting",
          "Two factor authentication",
          "Features",
          "ONQL queries",
          "Navigation panel",
          "Main panel",
          "Export",
          "Import",
        ]}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      />
      {selectedTab === "Two factor authentication" && (
        <TwoFactorAuthentication />
      )}
    </>
  );
};

export default SettingsPanel;
