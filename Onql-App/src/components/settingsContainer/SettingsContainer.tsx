import "./SettingsContainer.css";

interface SettingsContainerProps {
  title: string;
  children: React.ReactNode;
}

const SettingsContainer = ({ title, children }: SettingsContainerProps) => {
  return (
    <div className="settingsContainer">
      <div className="settingsContainer-heading">{title}</div>
      {children}
    </div>
  );
};

export default SettingsContainer;
