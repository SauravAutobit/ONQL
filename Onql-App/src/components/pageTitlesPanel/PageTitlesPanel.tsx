import FeaturesOptions from "../featuresOptions/FeaturesOptions";
import "./PageTitlesPanel.css";

const PageTitlesPanel = () => {
  return (
    <div className="generalPanel-container">
      <FeaturesOptions
        heading="Specify browser's title bar text. Refer to documentation for magic strings that can be used to get special values."
        text={"Default title"}
        subText="Title of browser window when nothing is selected."
        renderType="input"
        inputPlaceholder="1440"
      />
      <FeaturesOptions
        text={"Default title"}
        subText="Title of browser window when nothing is selected."
        renderType="input"
        inputPlaceholder="1440"
      />
      <FeaturesOptions
        text={"Table"}
        subText="Title of browser window when a table is selected."
        renderType="input"
        inputPlaceholder="1440"
      />
      <FeaturesOptions
        text={"Server"}
        subText="Title of browser window when a server is selected."
        renderType="input"
        inputPlaceholder="1440"
      />
    </div>
  );
};

export default PageTitlesPanel;
