import FeaturesOptions from "../featuresOptions/FeaturesOptions";
import "./FeatureDatabasePanel.css";

const FeatureDatabasePanel = () => {
  return (
    <div className="generalPanel-container">
      <FeaturesOptions
        text={"Show only listed databases"}
        subText="You can use MySQL wildcard characters (% and _), escape them if you want to use their literal instances, i.e. use 'my\_db' and not 'my_db'."
        renderType="textarea"
        height={134}
      />
      <FeaturesOptions
        text={"Hide databases"}
        subText="Hide databases"
        renderType="input"
        inputPlaceholder="1440"
      />
      <FeaturesOptions
        text={"Maximum databases"}
        subText="Maximum number of databases displayed in database list."
        renderType="numberInput"
      />
      <FeaturesOptions
        text={"Maximum tables"}
        subText="Maximum number of tables displayed in table list."
        renderType="numberInput"
      />
      <FeaturesOptions
        text={"Server connection collation"}
        renderType="input"
      />
    </div>
  );
};

export default FeatureDatabasePanel;
