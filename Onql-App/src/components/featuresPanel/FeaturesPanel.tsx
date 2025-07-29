import { useState } from "react";
import FeaturesTabs from "../featuresTabs/FeaturesTabs";
import "./FeaturesPanel.css";
import GeneralPanel from "../generalPanel/GeneralPanel";
import Button from "../button/Button";

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
      <div className="featuresPanel-btn-container">
        <Button
          btnText={"Apply"}
          width={100}
          height={30}
          padding={"6px 20px"}
        />
        <Button
          btnText={"Reset"}
          width={100}
          height={30}
          padding={"6px 20px"}
          color="var(--text-color-primary)"
          background="white"
          border="1px solid var(--border-color-primary)"
        />
      </div>
    </div>
  );
};

export default FeaturesPanel;
