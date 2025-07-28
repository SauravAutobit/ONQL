import "./SettingsTabs.css";

interface SettingsTabsProps {
  selectedTab: string;
  setSelectedTab: (tab: string) => void;
  options: string[];
}
const SettingsTabs = ({
  options,
  selectedTab,
  setSelectedTab,
}: SettingsTabsProps) => {
  return (
    <div className="settingsTabs-container">
      {options.map((option) => {
        return (
          <div
            key={option}
            className={
              selectedTab === option
                ? "settingsTabs-tab selected"
                : "settingsTabs-tab"
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

export default SettingsTabs;
