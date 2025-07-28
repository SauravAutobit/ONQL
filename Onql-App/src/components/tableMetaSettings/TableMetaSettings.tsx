import "./TableMetaSettings.css";

const TableMetaSettings = () => {
  return (
    <div className="tableMetaSettings-container">
      <div className="tableMetaSettings-field-container">
        <p className="tableMetaSettings-heading">Table comments:</p>
        <input
          type="text"
          placeholder="Value"
          className="form-input"
          style={{ width: "100%" }}
        />
      </div>
      <div className="tableMetaSettings-field-container">
        <p className="tableMetaSettings-heading">Table comments:</p>
        <input
          type="text"
          placeholder="Value"
          className="form-input"
          style={{ width: "100%" }}
        />
      </div>
      <div className="tableMetaSettings-field-container">
        <p className="tableMetaSettings-heading">Table comments:</p>
        <select className="form-select import">
          <option>dada</option>
        </select>
      </div>
    </div>
  );
};

export default TableMetaSettings;
