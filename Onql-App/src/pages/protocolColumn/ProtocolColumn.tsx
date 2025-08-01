// import { useState } from "react";
// import FormPanel from "../../components/formPanel/FormPanel";
import FormSection from "../../components/formSection/FormSection";
// import Button from "../../components/button/Button";
import Terminal from "../../components/terminal/Terminal";

// interface AddColumn {
//   alias: string;
//   column: string;
//   show: boolean;
// }
const ProtocolColumn = () => {
  // const [addColumn, setAddColumn] = useState<AddColumn>({
  //   alias: "",
  //   column: "",
  //   show: false,
  // });

  // const [selectedDatabase, setSelectedDatabase] = useState("");

  // const handleAddColumn = () => {
  //   if (addColumn.alias !== "" && addColumn.column !== "") {
  //     setAddColumn((prev) => {
  //       return {
  //         ...prev,
  //         show: true,
  //       };
  //     });
  //   }
  // };
  return (
    <div className="mainContent-height">
      <div className="mainContent-padding">
        {/* <FormPanel panelName="Add Column">
          <div className="form-panel-fields">
            <div className="form-panel-options">
              <input
                type="text"
                placeholder="Column alias"
                className="form-input"
                value={addColumn.alias}
                onChange={(e) =>
                  setAddColumn((prev) => {
                    return {
                      ...prev,
                      alias: e.target.value,
                    };
                  })
                }
              />

              <select
                className="form-select"
                value={selectedDatabase}
                onChange={(e) => {
                  setSelectedDatabase(e.target.value);
                  setAddColumn((prev) => {
                    return {
                      ...prev,
                      column: e.target.value,
                    };
                  });
                }}
              >
                <option value="" disabled>
                  Select Column
                </option>
                <option value="Database 1">Database 1</option>
                <option value="Database 2">Database 2</option>
                <option value="Database 3">Database 3</option>
              </select>
            </div>

            <Button
              btnText="Add Column"
              width={109}
              onClick={handleAddColumn}
            />
          </div>
        </FormPanel> */}
        {/* {addColumn.show && <FormSection sectionName="Column" />} */}
        <FormSection sectionName="Column" />
        <FormSection sectionName="Relation" />
        <FormSection sectionName="Context" />
        <FormSection sectionName="Projection" />
      </div>
      <div>
        <Terminal />
      </div>
    </div>
  );
};

export default ProtocolColumn;
