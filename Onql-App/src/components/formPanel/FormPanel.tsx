import "./FormPanel.css";
// import Form from "react-bootstrap/Form";

const FormPanel = () => {
  return (
    <div className="form-panel">
      <p className="form-panel-label">Create Database</p>

      <div className="form-panel-fields">
        <div className="form-panel-options">
          <input
            type="text"
            placeholder="Database Name"
            className="form-input"
          />

          <select className="form-select">
            <option value="utf8mb4_icelandic_ci">utf8mb4_icelandic_ci</option>
            <option value="utf8mb4_general_ci">utf8mb4_general_ci</option>
            <option value="utf8mb4_unicode_ci">utf8mb4_unicode_ci</option>
          </select>
        </div>

        <button className="form-button">Create new database</button>
      </div>
    </div>
  );
};

export default FormPanel;
