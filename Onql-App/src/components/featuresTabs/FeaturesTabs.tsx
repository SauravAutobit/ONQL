import "./FeaturesTabs.css";

interface FeaturesTabsProps {
  options: string[];
  selectedTab?: string;
  setSelectedTab?: (tab: string) => void;
  padding?: string;
  border?: string;
  borderRight?: string;
  hoverBg?: string;
}

const FeaturesTabs = ({
  options,
  selectedTab,
  setSelectedTab,
  border = "1px solid var(--sidebar-bg-primary)",
  borderRight,
  hoverBg,
}: FeaturesTabsProps) => {
  return (
    <div className="featuresTabs-container" style={{ border }}>
      {options.map((option) => {
        return (
          <div
            key={option}
            className={
              selectedTab === option
                ? "featuresTabs-tab selected"
                : "featuresTabs-tab"
            }
            style={
              {
                borderRight,
                "--hover-bg": hoverBg,
              } as React.CSSProperties
            }
            onClick={() => setSelectedTab?.(option)}
          >
            {option}
          </div>
        );
      })}
    </div>
  );
};

export default FeaturesTabs;
