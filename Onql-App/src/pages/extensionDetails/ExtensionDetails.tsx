import ExtensionHeader from "../../components/extensionHeader/ExtensionHeader";
import ExtensionInfo from "../../components/extensionInfo/ExtensionInfo";
import Terminal from "../../components/terminal/Terminal";

const ExtensionDetails = () => {
  return (
    <div className="mainContent-height">
      <div className="mainContent-padding">
        <ExtensionHeader />
        <ExtensionInfo />
      </div>
      <div>
        <Terminal />
      </div>
    </div>
  );
};

export default ExtensionDetails;
