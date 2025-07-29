import "./RadioButton.css";

interface RadioButtonProps {
  text?: string;
  description?: string;
  subDescription?: string;
  name: string;
  gap?: number;
  fontWeight?: boolean;
  color?: boolean;
}

const RadioButton = ({
  text,
  description,
  subDescription,
  name,
  gap = 10,
  fontWeight = false,
  color = false,
}: RadioButtonProps) => {
  const style = {
    gap,
    fontWeight: fontWeight ? "var(--font-weight-tertiary)" : undefined,
    color: color ? "#DC3545" : undefined,
  };

  return (
    <label className="radioButton-container" style={{ gap }}>
      <input type="radio" className="radio-btn" name={name} />
      <div className="radioButton-text-container">
        <span style={{ fontWeight: style.fontWeight }}>{text}</span>
        {description && <p style={{ color: style.color }}>{description}</p>}
        {subDescription && <p>{subDescription}</p>}
      </div>
    </label>
  );
};

export default RadioButton;
