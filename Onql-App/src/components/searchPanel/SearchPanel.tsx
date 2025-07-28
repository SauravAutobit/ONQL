import Button from "../button/Button";
import CheckBox from "../checkBox/CheckBox";
import FormPanel from "../formPanel/FormPanel";
import tableDownArrow from "../../assets/icons/tableDownArrow.svg";
import "./SearchPanel.css";
import RadioButton from "../radioButton/RadioButton";

const SearchPanel = () => {
  return (
    <>
      <FormPanel panelName={"Search in database"}>
        <>
          <div className="formPanel-import-container format">
            <p>Words or values to search for (wildcard: "%"):</p>
            <input type="text" placeholder="" className="form-input import" />
          </div>
          <div className="form-panel nested">
            <p className="form-panel-label">Finds</p>
            <div className="formPanel-radiobtn-container">
              <RadioButton
                name="searchType"
                text={"at least one of the words"}
              />
              <RadioButton name="searchType" text={"all of the words"} />
              <RadioButton
                name="searchType"
                text={"the exact phrase as substring"}
              />
              <RadioButton
                name="searchType"
                text={"the exact phrase as whole field"}
              />
              <RadioButton name="searchType" text={"as regular expression"} />
            </div>
          </div>

          <div className="form-panel nested">
            <p className="form-panel-label">Inside tables:</p>
            <div className="form-panel-allCheckbox">
              <img src={tableDownArrow} alt="tableDownArrow" />
              <p className="form-panel-allCheckbox-text">Select all</p>
              <p className="form-panel-allCheckbox-text">Unselect all</p>
            </div>
            <div className="formPanel-checkbox-container">
              <CheckBox text="Blind parameter" />
              <CheckBox text="Blind parameter" />
              <CheckBox text="Blind parameter" />
              <CheckBox text="Blind parameter" />
              <CheckBox text="Blind parameter" />
            </div>
          </div>
          <Button btnText={"Go"} width={100} height={30} padding={"6px 20px"} />
        </>
      </FormPanel>
    </>
  );
};

export default SearchPanel;
