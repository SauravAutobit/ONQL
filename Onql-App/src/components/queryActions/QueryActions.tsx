import CheckBox from "../checkBox/CheckBox";
import "./QueryActions.css";

const QueryActions = () => {
  return (
    <div className="queryActions-container">
      <div className="queryActions-heading">SELECT * FROM `test_db`</div>
      <div className="queryActions-options-container">
        <CheckBox text="Profiling " />
        <div className="queryActions-options">
          <p>
            [<span className="queryActions-option">Edit inline</span>]
          </p>
          <p>
            [<span className="queryActions-option">Edit</span>]
          </p>
          <p>
            [<span className="queryActions-option">Explain ONQL</span>]
          </p>
          <p>
            [<span className="queryActions-option">Create PHP code</span>]
          </p>
          <p>
            [<span className="queryActions-option">Refresh</span>]
          </p>
        </div>
      </div>
    </div>
  );
};

export default QueryActions;
