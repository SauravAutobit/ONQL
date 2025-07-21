import "./Button.css";

interface ButtonProps {
  btnText: string;
  width?: number;
  height?: number;
  padding?: number | string;
  onClick?: () => void;
}
const Button = ({
  btnText,
  width = 152,
  height = 38,
  padding = 10,
  onClick,
}: ButtonProps) => {
  const styles = {
    width,
    height,
    padding,
  };

  return (
    <button className="form-button" style={styles} onClick={onClick}>
      {btnText}
    </button>
  );
};

export default Button;
