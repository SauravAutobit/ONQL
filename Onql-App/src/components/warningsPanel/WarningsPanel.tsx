import React from "react";
import FeaturesOptions from "../featuresOptions/FeaturesOptions";

const WarningsPanel = () => {
  return (
    <div className="generalPanel-container">
      <FeaturesOptions
        heading="Disable some of the warnings shown by phpMyAdmin."
        text={"Missing phpMyAdmin configuration storage tables"}
        subText="Disable the default warning that is displayed on the database details Structure page if any of the required tables for the phpMyAdmin configuration storage could not be found."
      />
      <FeaturesOptions
        text={"Suhosin warning"}
        subText="Disable the default warning that is displayed on the main page if Suhosin is detected."
      />
      <FeaturesOptions
        text={"Login cookie validity warning"}
        subText="Disable the default warning that is displayed on the main page if the value of the PHP setting session.gc_maxlifetime is less than the value of `LoginCookieValidity`."
      />

      <FeaturesOptions
        text={"MySQL reserved word warning"}
        subText="Disable the default warning that is displayed on the Structure page if column names in a table are reserved MySQL words."
      />
    </div>
  );
};

export default WarningsPanel;
