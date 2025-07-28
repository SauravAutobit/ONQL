import CheckBox from "../checkBox/CheckBox";
import "./TableOptions.css";

const fieldConfig = [
  { label: "Name", type: "input" },
  { label: "Type", type: "select", options: ["INT", "VARCHAR", "TEXT"] },
  { label: "Length/Values", type: "input" },
  { label: "Default", type: "input" },
  {
    label: "Collation",
    type: "select",
    options: ["utf8_general_ci", "utf8mb4_unicode_ci"],
  },
  { label: "Attributes", type: "input" },
  { label: "Null", type: "checkbox" },
  { label: "Index", type: "select", options: ["None", "Primary", "Unique"] },
  { label: "Auto_Increment", type: "checkbox" },
  { label: "Comments", type: "input" },
  {
    label: "Virtuality",
    type: "select",
    options: ["None", "Virtual", "Stored"],
  },
  { label: "Move Column", type: "input" },
  { label: "Media type", type: "input" },
  { label: "Browse Display Transformation", type: "input" },
  { label: "Browse Display Transformation Option", type: "input" },
  { label: "Input Transformation", type: "input" },
  { label: "Input Transformation Option", type: "input" },
];

const TableOptions = () => {
  return (
    <div className="tableOptions-wrapper">
      <div className="tableOptions-layout">
        {/* LEFT FIELD LABELS */}
        <div className="tableOptions-labels">
          {fieldConfig.map((field, idx) => (
            <p key={idx} className="tableOptions-name">
              {field.label}
            </p>
          ))}
        </div>

        {/* RIGHT SCROLLABLE COLUMNS */}
        <div className="tableOptions-columns">
          {Array.from({ length: 6 }).map((_, colIdx) => (
            <div key={colIdx} className="tableOptions-column">
              {fieldConfig.map((field, fieldIdx) => {
                const key = `${colIdx}-${fieldIdx}`;
                if (field.type === "select") {
                  return (
                    <select key={key} className="form-select import">
                      {field.options?.map((opt, i) => (
                        <option key={i} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  );
                }
                if (field.type === "checkbox") {
                  return (
                    <div key={key} className="checkbox-wrapper">
                      <CheckBox />
                    </div>
                  );
                }
                return (
                  <input
                    key={key}
                    type="text"
                    placeholder="Value"
                    className="form-input"
                    style={{ width: "100%" }}
                  />
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TableOptions;
