import "./FormPanel.css";

interface FormPanelProps {
  panelName: string;
  children: React.ReactNode;
}

const FormPanel = ({ panelName, children }: FormPanelProps) => {
  return (
    <div className="form-panel">
      <p className="form-panel-label">{panelName}</p>
      {children}
    </div>
  );
};

export default FormPanel;
