import "./QueryWindow.css";
import CheckBox from "../checkBox/CheckBox";
import cross from "../../assets/icons/cross.svg";

const QueryWindow = () => {
  return (
    <div className="queryWindow-container">
      <div className="queryWindow-checkbox-cross">
        <CheckBox text="Show" />
        <img src={cross} alt="cross" />
      </div>

      <div className="queryWindow-options">
        <select className="queryWindow-form-select">
          <option value="" disabled>
            Select Table
          </option>
          <option value="Database 1">Database 1</option>
          <option value="Database 2">Database 2</option>
          <option value="Database 3">Database 3</option>
        </select>
        <select className="queryWindow-form-select">
          <option value="" disabled>
            Select Table
          </option>
          <option value="Database 1">Database 1</option>
          <option value="Database 2">Database 2</option>
          <option value="Database 3">Database 3</option>
        </select>
      </div>

      <div className="queryWindow-options">
        <input
          type="text"
          placeholder="Table alias"
          className="queryWindow-form-input"
        />

        <input
          type="text"
          placeholder="Column alias"
          className="queryWindow-form-input"
        />
      </div>

      <div className="queryWindow-checkbox-cross">
        <CheckBox text="Criteria" />
      </div>
    </div>
  );
};

export default QueryWindow;
