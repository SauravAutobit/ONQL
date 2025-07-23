import "./ExtensionInfo.css";
import chatgpt from "../../assets/icons/chatGpt.svg";
import Button from "../button/Button";
import ToggleButton from "../toggleButton/ToggleButton";
import extensionUser from "../../assets/icons/extensionUser.svg";

const ExtensionInfo = () => {
  return (
    <div className="extensionInfo-container">
      <div className="extension-img-container">
        <img src={chatgpt} alt="chatgpt" width="95px" height="95px" />
      </div>
      <div className="extensionInfo-detail-container">
        <p>Chat GPT</p>
        <p>
          Chat GPT Corporation |{" "}
          <span>
            <img src={extensionUser} alt="extensionUser" />
            22,502,139
          </span>
        </p>
        <p>Mini description about the Extension</p>
        <div className="extensionInfo-btns">
          <ToggleButton />
          <Button
            width={80}
            height={30}
            btnText={"Install"}
            padding={"6px 12px"}
          />
        </div>
      </div>
    </div>
  );
};

export default ExtensionInfo;
