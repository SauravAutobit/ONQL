import React from "react";
import "./SubHeader.css";

interface SubHeaderProps {
  options: string[];
}

const SubHeader = ({ options }: SubHeaderProps) => {
  const [selectedOption, setSelectedOption] = React.useState(options[0]);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
  };
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
                selectedOption === option
                  ? "subheader-options selected"
                  : "subheader-options"
              }
              onClick={() => handleOptionClick(option)}
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
