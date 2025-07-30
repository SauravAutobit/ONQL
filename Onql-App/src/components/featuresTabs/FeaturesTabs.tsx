import "./FeaturesTabs.css";

interface FeaturesTabsProps {
  options: string[];
  selectedTab?: string;
  setSelectedTab?: (tab: string) => void;
  padding?: string;
  border?: string;
  borderRight?: string;
}

const FeaturesTabs = ({
  options,
  selectedTab,
  setSelectedTab,
  border = "1px solid var(--sidebar-bg-primary)",
  borderRight,
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
            style={{ borderRight }}
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

// if want hover conditionallyu not everyewhere
// <div
//   key={option}
//   className={`featuresTabs-tab ${selectedTab === option ? "selected" : ""} ${
//     hoverEnabled || hoverBg ? "hover-enabled" : ""
//   }`}
//   style={
//     {
//       borderRight,
//       "--hover-bg": hoverBg,
//     } as React.CSSProperties
//   }
//   onClick={() => setSelectedTab?.(option)}
// >
//   {option}
// </div>;
