import "./CheckBox.css";

interface CheckBoxProps {
  text?: string;
}

const CheckBox = ({ text }: CheckBoxProps) => {
  return (
    <label className="checkbox-container">
      <input type="checkbox" className="custom-checkbox" />
      <span>{text}</span>
    </label>
  );
};

export default CheckBox;
