import { useState } from "react";
import "./FormSection.css";

interface FormSectionProps {
  sectionName: string;
}
const FormSection = ({ sectionName }: FormSectionProps) => {
  const [optionCount, setOptionCount] = useState(1);

  return (
    <div className="form-section">
      <p className="form-section-label">{sectionName}</p>

      {Array.from({ length: optionCount }, (_, index) => {
        return (
          <div className="form-section-options" key={index}>
            <div className="form-input-heading">
              <label>{`Select ${sectionName} Type`}</label>
              <select className="form-section-select">
                <option value="utf8mb4_icelandic_ci">
                  utf8mb4_icelandic_ci
                </option>
                <option value="utf8mb4_general_ci">utf8mb4_general_ci</option>
                <option value="utf8mb4_unicode_ci">utf8mb4_unicode_ci</option>
              </select>
            </div>

            <div className="form-input-heading">
              <label>Select Table</label>
              <select className="form-section-select">
                <option value="utf8mb4_icelandic_ci">
                  utf8mb4_icelandic_ci
                </option>
                <option value="utf8mb4_general_ci">utf8mb4_general_ci</option>
                <option value="utf8mb4_unicode_ci">utf8mb4_unicode_ci</option>
              </select>
            </div>
          </div>
        );
      })}
      <div className="form-section-add-container">
        <p
          className="form-section-add"
          onClick={() => setOptionCount((prev) => prev + 1)}
        >{`+ Add Another ${sectionName}`}</p>
      </div>
    </div>
  );
};

export default FormSection;
