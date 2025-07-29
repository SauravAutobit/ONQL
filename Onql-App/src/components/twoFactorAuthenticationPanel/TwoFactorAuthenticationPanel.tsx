import "./TwoFactorAuthenticationPanel.css";
import FormPanel from "../formPanel/FormPanel";
import RadioButton from "../radioButton/RadioButton";
import Button from "../button/Button";

const TwoFactorAuthenticationPanel = () => {
  return (
    <>
      <FormPanel panelName={"Two-factor authentication status"}>
        <div style={{ color: "#000000" }}>
          Two-factor authentication is available, but not configured for this
          account.
        </div>
      </FormPanel>
      <FormPanel panelName="Configure two-factor authentication">
        <div className="twoFactorAuthentication-all-radiobtns">
          <div className="twoFactorAuthentication-radio-container">
            <RadioButton
              name={"two-factor authentication"}
              text="No Two-Factor Authentication"
              description="Login using password only."
              gap={20}
              fontWeight
            />
          </div>
          <div className="twoFactorAuthentication-radio-container">
            <RadioButton
              name={"two-factor authentication"}
              text="Authentication Application (2FA)"
              description="Provides authentication using HOTP and TOTP applications such as
                FreeOTP, Google Authenticator or Authy."
              gap={20}
              fontWeight
            />
          </div>
          <div className="twoFactorAuthentication-radio-container">
            <RadioButton
              name={"two-factor authentication"}
              text="Hardware Security Key (WebAuthn/FIDO2)"
              description="Provides authentication using hardware security tokens
                supporting the WebAuthn/FIDO2 protocol, such as a YubiKey."
              gap={20}
              fontWeight
            />
          </div>
          <div className="twoFactorAuthentication-radio-container">
            <RadioButton
              name={"two-factor authentication"}
              text="Hardware Security Key (FIDO U2F)"
              description="The FIDO U2F API has been deprecated in favor of the Web
                Authentication API (WebAuthn)."
              subDescription="Provides authentication using hardware security tokens supporting
            FIDO U2F, such as a YubiKey."
              gap={20}
              fontWeight
              color
            />
          </div>
        </div>
        <div className="twoFactorAuthentication-radio-btn-container">
          <Button btnText={"Go"} width={100} height={30} padding={"6px 20px"} />
        </div>
      </FormPanel>
    </>
  );
};

export default TwoFactorAuthenticationPanel;
