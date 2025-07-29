import "./FeaturesTabs.css";

interface FeaturesTabsProps {
  options: string[];
  selectedTab: string;
  setSelectedTab: (tab: string) => void;
}

const FeaturesTabs = ({
  options,
  selectedTab,
  setSelectedTab,
}: FeaturesTabsProps) => {
  return (
    <div className="featuresTabs-container">
      {options.map((option) => {
        return (
          <div
            key={option}
            className={
              selectedTab === option
                ? "featuresTabs-tab selected"
                : "featuresTabs-tab"
            }
            onClick={() => setSelectedTab(option)}
          >
            {option}
          </div>
        );
      })}
    </div>
  );
};

export default FeaturesTabs;
