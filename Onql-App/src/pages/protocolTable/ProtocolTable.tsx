import FormPanel from "../../components/formPanel/FormPanel";
import Table7Columns from "../../components/table7Columns/Table7Columns";

const ProtocolTable = () => {
  return (
    <>
      <Table7Columns headingCol1={"Table"} />
      <FormPanel panelName="Add Table" selectedTab="Add Table" />
    </>
  );
};

export default ProtocolTable;
