import { useState } from "react";
import FeaturesTabs from "../featuresTabs/FeaturesTabs";
import "./FeaturesPanel.css";
import GeneralPanel from "../generalPanel/GeneralPanel";

const FeaturesPanel = () => {
  const [selectedTab, setSelectedTab] = useState("General");
  return (
    <div className="featuresPanel-container">
      <FeaturesTabs
        options={[
          "General",
          "Databases",
          "Text fields",
          "Page titles",
          "Warnings",
          "Console",
        ]}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      />

      {selectedTab === "General" && <GeneralPanel />}
    </div>
  );
};

export default FeaturesPanel;
