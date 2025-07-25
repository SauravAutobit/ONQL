import "./ExtensionInfo.css";
import chatgpt from "../../assets/icons/chatGpt.svg";
import Button from "../button/Button";
import ToggleButton from "../toggleButton/ToggleButton";
import extensionUser from "../../assets/icons/extensionUser.svg";
import CheckBox from "../checkBox/CheckBox";

const ExtensionInfo = () => {
  return (
    <>
      <div className="extensionInfo-container">
        <div className="extension-img-container">
          <img src={chatgpt} alt="chatgpt" width="95px" height="95px" />
        </div>
        <div className="extensionInfo-detail-container">
          <p className="extensionInfo-name">Chat GPT</p>
          <p className="extensionInfo-userInfo">
            Chat GPT Corporation <span>|</span>{" "}
            <span className="extensionInfo-userIcon-count">
              <img src={extensionUser} alt="extensionUser" />
              <span>22,502,139</span>
            </span>
          </p>
          <p className="extensionInfo-description">
            Mini description about the Extension
          </p>
          <div className="extensionInfo-btns">
            <ToggleButton />
            <Button
              width={80}
              height={30}
              btnText={"Install"}
              padding={"6px 12px"}
            />
            <p className="extensionInfo-description">Uninstall</p>
            <p className="extensionInfo-description update">
              <CheckBox />
              Auto update
            </p>
          </div>
        </div>
      </div>
      <div className="extensionInfo-details">
        <p className="extensionInfo-details-name">Extension Name</p>
        <p className="extensionInfo-detailsInfo">Detail here with catalog</p>
      </div>
    </>
  );
};

export default ExtensionInfo;
