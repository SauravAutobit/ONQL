import { useState } from "react";
import FormPanel from "../../components/formPanel/FormPanel";
import FormSection from "../../components/formSection/FormSection";

interface AddColumn {
  alias: string;
  column: string;
  show: boolean;
}
const ProtocolColumn = () => {
  const [addColumn, setAddColumn] = useState<AddColumn>({
    alias: "",
    column: "",
    show: false,
  });

  const handleAddColumn = () => {
    if (addColumn.alias !== "" && addColumn.column !== "") {
      setAddColumn((prev) => {
        return {
          ...prev,
          show: true,
        };
      });
    }
  };
  return (
    <>
      <FormPanel
        panelName="Add Column"
        selectedTab="Add Column"
        addColumn={addColumn}
        setAddColumn={setAddColumn}
        handleAddColumn={handleAddColumn}
      />
      {addColumn.show && <FormSection sectionName="Column" />}
      <FormSection sectionName="Relation" />
      <FormSection sectionName="Context" />
      <FormSection sectionName="Projection" />
    </>
  );
};

export default ProtocolColumn;
