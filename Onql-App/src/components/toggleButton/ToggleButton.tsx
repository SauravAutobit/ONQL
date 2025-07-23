import "./ToggleButton.css";

const ToggleButton = () => {
  return (
    <label className="switch">
      <input type="checkbox" />
      <span className="slider"></span>
    </label>
  );
};

export default ToggleButton;
