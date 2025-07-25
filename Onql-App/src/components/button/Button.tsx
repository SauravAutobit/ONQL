import "./Button.css";

interface ButtonProps {
  btnText: string;
  width?: number;
  height?: number;
  padding?: number | string;
  background?: string;
  color?: string;
  border?: string;
  onClick?: () => void;
}
const Button = ({
  btnText,
  width = 152,
  height = 38,
  padding = 10,
  background = "var(--sidebar-bg-primary)",
  color = "white",
  border = "none",
  onClick,
}: ButtonProps) => {
  const styles = {
    width,
    height,
    padding,
    background,
    color,
    border,
  };

  return (
    <button className="form-button" style={styles} onClick={onClick}>
      {btnText}
    </button>
  );
};

export default Button;
