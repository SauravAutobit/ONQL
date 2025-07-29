import CheckBox from "../checkBox/CheckBox";
import CustomNumberInput from "../numberInput/NumberInput";
import "./FeaturesOptions.css";

type RenderType = "checkbox" | "select" | "input" | "numberInput" | "textarea";

interface FeaturesOptionsProps {
  heading?: string;
  text: string;
  subText?: string;
  renderType?: RenderType;
  inputPlaceholder?: string;
  selectOptions?: string[];
  height?: number;
}

const FeaturesOptions = ({
  heading,
  text,
  subText,
  renderType = "checkbox",
  inputPlaceholder,
  selectOptions,
  height,
}: FeaturesOptionsProps) => {
  const renderField = () => {
    switch (renderType) {
      case "checkbox":
        return <CheckBox />;
      case "select":
        return (
          <select className="form-select import">
            {selectOptions?.map((option) => {
              return (
                <option key={option} value={option}>
                  {option}
                </option>
              );
            })}
          </select>
        );
      case "input":
        return (
          <input
            type="text"
            placeholder={inputPlaceholder || ""}
            className="form-input import"
          />
        );
      case "textarea":
        return (
          <textarea
            placeholder={inputPlaceholder || ""}
            className="form-input import"
            style={{ height, resize: "none" }}
          />
        );
      case "numberInput":
        return <CustomNumberInput />;
      default:
        return null;
    }
  };
  return (
    <>
      {heading && <div>{heading}</div>}
      <div
        className="featuresOptions-checkbox-container"
        style={{
          alignItems: renderType === "checkbox" ? "center" : "flex-start",
        }}
      >
        <div className="featuresOptions-text-container">
          <div className="featuresOptions-text">{text}</div>
          {subText && <p className="featuresOptions-subText">{subText}</p>}
        </div>
        <div className="featuresOptions-checkbox">{renderField()}</div>
      </div>
    </>
  );
};

export default FeaturesOptions;
