import FeaturesOptions from "../featuresOptions/FeaturesOptions";
import "./TextFieldsPanel.css";

const TextFieldsPanel = () => {
  return (
    <div className="generalPanel-container">
      <FeaturesOptions
        heading="Customize text input fields."
        text={"CHAR columns editing"}
        subText="Enables check for latest version on main phpMyAdmin page."
        renderType="select"
        selectOptions={["Open", "Closed", "Disabled"]}
      />
      <FeaturesOptions
        text={"Minimum size for input field"}
        subText="Use natural order for sorting table and database names."
        renderType="numberInput"
      />
      <FeaturesOptions
        text={"Maximum size for input field"}
        subText="Define how long (in seconds) a login cookie is valid."
        renderType="numberInput"
      />
      <FeaturesOptions
        text={"CHAR textarea columns"}
        subText="Mark used tables and make it possible to show databases with locked tables."
        renderType="numberInput"
      />
      <FeaturesOptions
        text={"CHAR textarea rows"}
        subText="Disable the table maintenance mass operations, like optimizing or repairing the selected tables of a database."
        renderType="numberInput"
      />
      <FeaturesOptions
        text={"Textarea columns"}
        subText="Whether to show hint or not."
        renderType="numberInput"
      />
      <FeaturesOptions
        text={"Textarea rows"}
        subText="Choose the default action when sending error reports."
        renderType="numberInput"
      />
      <FeaturesOptions
        text={"Bigger textarea for LONGTEXT"}
        subText="Queries are executed by pressing Enter (instead of Ctrl+Enter). New lines will be inserted with Shift+Enter."
      />
    </div>
  );
};

export default TextFieldsPanel;
