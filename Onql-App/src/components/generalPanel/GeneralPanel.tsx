import CheckBox from "../checkBox/CheckBox";
import "./GeneralPanel.css";

const GeneralPanel = () => {
  return (
    <div className="generalPanel-container">
      <div>Set some commonly used options.</div>
      <div className="generalPanel-checkbox-container">
        <div>
          <div>Version check</div>
          <p>Enables check for latest version on main phpMyAdmin page.</p>
        </div>
        <div className="generalPanel-checkbox">
          <CheckBox />
        </div>
      </div>
    </div>
  );
};

export default GeneralPanel;
