import { useState } from "react";
import SettingsTabs from "../settingsTabs/SettingsTabs";
import "./Settings.css";
import TwoFactorAuthenticationPanel from "../twoFactorAuthenticationPanel/TwoFactorAuthenticationPanel";
import ManageYourSettingPanel from "../manageYourSettingPanel/ManageYourSettingPanel";
import FeaturesPanel from "../featuresPanel/FeaturesPanel";

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
      {selectedTab === "Manage your setting" && <ManageYourSettingPanel />}
      {selectedTab === "Two factor authentication" && (
        <TwoFactorAuthenticationPanel />
      )}
      {selectedTab === "Features" && <FeaturesPanel />}
    </>
  );
};

export default SettingsPanel;
