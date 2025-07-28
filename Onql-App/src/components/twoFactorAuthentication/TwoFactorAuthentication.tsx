import "./TwoFactorAuthentication.css";
import FormPanel from "../formPanel/FormPanel";
import RadioButton from "../radioButton/RadioButton";
import Button from "../button/Button";

const TwoFactorAuthentication = () => {
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
            <RadioButton name={"two-factor authentication"} />
            <div className="twoFactorAuthentication-radio-text">
              <p className="twoFactorAuthentication-radio-FirstText">
                No Two-Factor Authentication
              </p>
              <p>Login using password only.</p>
            </div>
          </div>
          <div className="twoFactorAuthentication-radio-container">
            <RadioButton name={"two-factor authentication"} />
            <div className="twoFactorAuthentication-radio-text">
              <p className="twoFactorAuthentication-radio-FirstText">
                Authentication Application (2FA)
              </p>
              <p>
                Provides authentication using HOTP and TOTP applications such as
                FreeOTP, Google Authenticator or Authy.
              </p>
            </div>
          </div>
          <div className="twoFactorAuthentication-radio-container">
            <RadioButton name={"two-factor authentication"} />
            <div className="twoFactorAuthentication-radio-text">
              <p className="twoFactorAuthentication-radio-FirstText">
                Hardware Security Key (WebAuthn/FIDO2)
              </p>
              <p>
                Provides authentication using hardware security tokens
                supporting the WebAuthn/FIDO2 protocol, such as a YubiKey.
              </p>
            </div>
          </div>
          <div className="twoFactorAuthentication-radio-container">
            <RadioButton name={"two-factor authentication"} />
            <div className="twoFactorAuthentication-radio-text">
              <p className="twoFactorAuthentication-radio-FirstText">
                Hardware Security Key (FIDO U2F)
              </p>
              <p style={{ color: "#DC3545" }}>
                The FIDO U2F API has been deprecated in favor of the Web
                Authentication API (WebAuthn).
              </p>
              <p>
                Provides authentication using hardware security tokens
                supporting FIDO U2F, such as a YubiKey.
              </p>
            </div>
          </div>
        </div>
        <div className="twoFactorAuthentication-radio-btn-container">
          <Button btnText={"Go"} width={100} height={30} padding={"6px 20px"} />
        </div>
      </FormPanel>
    </>
  );
};

export default TwoFactorAuthentication;
