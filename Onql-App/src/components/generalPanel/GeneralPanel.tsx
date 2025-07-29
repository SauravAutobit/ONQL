import FeaturesOptions from "../featuresOptions/FeaturesOptions";
import "./GeneralPanel.css";

const GeneralPanel = () => {
  return (
    <div className="generalPanel-container">
      <FeaturesOptions
        heading={"Set some commonly used options."}
        text={"Version check"}
        subText={"Enables check for latest version on main phpMyAdmin page."}
        renderType="checkbox"
      />
      <FeaturesOptions
        text={"Natural order"}
        subText={"Use natural order for sorting table and database names."}
        renderType="checkbox"
      />
      <FeaturesOptions
        text={"Initial state for sliders"}
        renderType="select"
        selectOptions={["Open", "Closed", "Disabled"]}
      />
      <FeaturesOptions
        text={"Login cookie validity"}
        subText="Define how long (in seconds) a login cookie is valid."
        renderType="input"
        inputPlaceholder="1440"
      />
      <FeaturesOptions
        text={"Skip locked tables"}
        subText="Mark used tables and make it possible to show databases with locked tables."
        renderType="checkbox"
      />
      <FeaturesOptions
        text={"Disable multi table maintenance"}
        subText="Disable the table maintenance mass operations, like optimizing or repairing the selected tables of a database."
        renderType="checkbox"
      />
      <FeaturesOptions
        text={"Show hint"}
        subText="Whether to show hint or not."
        renderType="checkbox"
      />
      <FeaturesOptions
        text={"Send error reports"}
        subText="Choose the default action when sending error reports."
        renderType="select"
        selectOptions={[
          "Ask before sending error reports",
          "Always send error reports",
          "Never send error reports",
        ]}
      />
      <FeaturesOptions
        text={"Enter executes queries in console"}
        subText="Queries are executed by pressing Enter (instead of Ctrl+Enter). New lines will be inserted with Shift+Enter."
        renderType="checkbox"
      />
      <FeaturesOptions
        text={"Disable shortcut keys"}
        subText="Disable shortcut keys"
        renderType="checkbox"
      />
      <FeaturesOptions
        text={"First day of calendar"}
        renderType="select"
        selectOptions={[
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ]}
      />
    </div>
  );
};

export default GeneralPanel;
