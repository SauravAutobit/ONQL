import "./SubHeader.css";

interface SubHeaderProps {
  options: string[];
  selectedTab: string;
  setSelectedTab: (tab: string) => void;
}

const SubHeader = ({
  options,
  selectedTab,
  setSelectedTab,
}: SubHeaderProps) => {
  return (
    <div className="subheader-container">
      {options.map((option, index) => {
        return (
          <div
            key={option}
            className={
              index === options.length - 1 ? "" : "subheader-options-wrapper"
            }
          >
            <p
              className={
                selectedTab === option
                  ? "subheader-options selected"
                  : "subheader-options"
              }
              onClick={() => setSelectedTab(option)}
            >
              {option}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default SubHeader;
