import "./BrowserPanel.css";
import Button from "../button/Button";
import CheckBox from "../checkBox/CheckBox";
import FormPanel from "../formPanel/FormPanel";
import QueryActions from "../queryActions/QueryActions";

const BrowserPanel = () => {
  return (
    <>
      <QueryActions />
      <FormPanel panelName={"Query results operations"}>
        <Button btnText={"Create new table"} width={124} height={38} />
      </FormPanel>
      <FormPanel panelName={"Bookmark this ONQL query"}>
        <div className="browserPanel-bookmark">
          <div className="form-panel-options">
            <p>Table Name</p>
            <input
              type="text"
              className="form-input"
              placeholder="Enter word"
            />
            <CheckBox text="Let every user access this bookmark" />
          </div>
          <Button
            btnText={"Bookmark this ONQL query"}
            width={178}
            height={38}
          />
        </div>
      </FormPanel>
    </>
  );
};

export default BrowserPanel;
