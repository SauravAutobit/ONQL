import { useState } from "react";
import "./NumberInput.css";

interface CustomNumberInputProps {
  min?: number;
  max?: number;
  defaultValue?: number;
}

const CustomNumberInput = ({
  min = 0,
  max = 9999,
  defaultValue = 0,
}: CustomNumberInputProps) => {
  const [value, setValue] = useState<number>(defaultValue);

  const handleChange = (delta: number) => {
    const newValue = value + delta;
    if (newValue >= min && newValue <= max) {
      setValue(newValue);
    }
  };

  return (
    <div className="custom-number-input">
      <input type="text" value={value} readOnly className="number-display" />
      <div className="arrow-controls">
        <div className="arrow up" onClick={() => handleChange(1)} />
        <div className="arrow down" onClick={() => handleChange(-1)} />
      </div>
    </div>
  );
};

export default CustomNumberInput;
