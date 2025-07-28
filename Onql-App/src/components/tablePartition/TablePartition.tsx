import "./TablePartition.css";

const TablePartition = () => {
  return (
    <div className="tablePartition-container">
      <p className="tableMetaSettings-heading">PARTITION definition:</p>
      <div className="tablePartition-options">
        <p>Partition by:</p>
        <select className="form-select import" style={{ width: "19%" }}>
          <option>dada</option>
        </select>
        (
        <input
          type="text"
          placeholder="Value"
          className="form-input"
          style={{ width: "19%" }}
        />
        )
      </div>
      <div className="tablePartition-options">
        <p>Partition</p>

        <input
          type="text"
          placeholder="Value"
          className="form-input"
          style={{ width: "19%" }}
        />
      </div>
    </div>
  );
};

export default TablePartition;
