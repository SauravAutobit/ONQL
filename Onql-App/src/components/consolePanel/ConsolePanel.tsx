import FeaturesOptions from "../featuresOptions/FeaturesOptions";

const ConsolePanel = () => {
  return (
    <div className="generalPanel-container">
      <FeaturesOptions
        heading="Disable some of the warnings shown by phpMyAdmin."
        text={"Console mode"}
        renderType="select"
        selectOptions={["info", "show", "collapse"]}
      />
      <FeaturesOptions text={"Show query history at start"} subText="" />
      <FeaturesOptions text={"Always expand query messages"} />
      <FeaturesOptions text={"Show current browsing query"} />
      <FeaturesOptions
        text={"Execute queries on Enter and insert new line with Shift+Enter"}
      />
      <FeaturesOptions
        text={"Switch to dark theme"}
        subText="Not a non-negative number!"
        renderType="input"
        inputPlaceholder="1440"
      />
      <FeaturesOptions text={"Console height"} />
      <FeaturesOptions text={"Group queries"} />
      <FeaturesOptions
        text={"Order by"}
        renderType="select"
        selectOptions={["exec", "time", "count"]}
      />
      <FeaturesOptions
        text={"Order"}
        renderType="select"
        selectOptions={["asc", "desc"]}
      />
    </div>
  );
};

export default ConsolePanel;
