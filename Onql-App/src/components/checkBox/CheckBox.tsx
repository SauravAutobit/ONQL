import "./CheckBox.css";

interface CheckBoxProps {
  text?: string;
  disabled?: boolean;
}

const CheckBox = ({ text, disabled = false }: CheckBoxProps) => {
  return (
    <label className="checkbox-container">
      <input type="checkbox" className="custom-checkbox" disabled={disabled} />
      <span>{text}</span>
    </label>
  );
};

export default CheckBox;
