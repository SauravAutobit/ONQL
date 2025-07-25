import "./RadioButton.css";

interface RadioButtonProps {
  text: string;
  name: string;
}
const RadioButton = ({ text, name }: RadioButtonProps) => {
  return (
    <label className="radioButton-container">
      <input type="radio" className="radio-btn" name={name} />
      <span>{text}</span>
    </label>
  );
};

export default RadioButton;
