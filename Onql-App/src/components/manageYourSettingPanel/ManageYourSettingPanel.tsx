import SettingsContainer from "../settingsContainer/SettingsContainer";
import RadioButton from "../radioButton/RadioButton";
import "./ManageYourSettingPanel.css";
import FileUploadInput from "../fileUploadInput/FileUploadInput";
import Button from "../button/Button";

const ManageYourSettingPanel = () => {
  return (
    <>
      <SettingsContainer title={"Import"}>
        <div className="manageYourSettingPanel-container">
          <div>
            <RadioButton text="Import from file" name={"import"} />
            <div className="manageYourSettingPanel-fileUpload-container">
              <FileUploadInput
                height={22}
                padding={"2px 10px"}
                flex
                marginTop={false}
                marginBottom={false}
              />
            </div>
          </div>

          <div>
            <RadioButton text="Import from browser's storage" name={"import"} />
            <div className="manageYourSettingPanel-fileUpload-container">
              <p className="manageYourSettingPanel-option-text">
                Settings will be imported from your browser's local storage.
              </p>
              <input
                type="text"
                placeholder="You have no saved settings!"
                className="form-input import"
              />
            </div>
          </div>

          <div>
            <RadioButton
              text="Merge with current configuration"
              name={"import"}
            />
            <div className="manageYourSettingPanel-fileUpload-container">
              <Button
                btnText={"Go"}
                width={100}
                height={30}
                padding={"6px 20px"}
              />
            </div>
          </div>
        </div>
      </SettingsContainer>

      <SettingsContainer title={"Export"}>
        <div className="manageYourSettingPanel-container">
          <RadioButton text={"Save as JSON file"} name={"export"} />
          <RadioButton text={"Save as PHP file"} name={"export"} />
          <RadioButton text={"Save to browser's storage"} name={"export"} />
          <div className="manageYourSettingPanel-exportBtn-container">
            <div>Settings will be saved in your browser's local storage.</div>
            <Button
              btnText={"Go"}
              width={100}
              height={30}
              padding={"6px 20px"}
            />
          </div>
        </div>
      </SettingsContainer>

      <SettingsContainer title={"Reset"}>
        <div className="manageYourSettingPanel-container">
          <div>
            You can reset all your settings and restore them to default values.
          </div>
          <Button btnText={"Go"} width={100} height={30} padding={"6px 20px"} />
        </div>
      </SettingsContainer>
    </>
  );
};

export default ManageYourSettingPanel;
