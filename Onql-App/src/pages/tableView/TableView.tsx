import { useState } from "react";
import SubHeader from "../../components/subHeader/SubHeader";
import "./TableView.css";
import ImportPanel from "../../components/importPanel/ImportPanel";
import OnqlPanel from "../../components/onqlPanel/OnqlPanel";
import ExportDatabasePanel from "../../components/exportDatabasePanel/ExportDatabasePanel";
import BrowserPanel from "../../components/browserPanel/BrowserPanel";

const TableView = () => {
  const [selectedTab, setSelectedTab] = useState("Browser");

  return (
    <>
      <SubHeader
        options={["Browser", "Structure", "ONQL", "Export", "Import"]}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      />
      {selectedTab === "Browser" && <BrowserPanel />}
      {selectedTab === "ONQL" && <OnqlPanel />}
      {selectedTab === "Export" && (
        <ExportDatabasePanel
          heading={"Exporting tables from the “table_name” table"}
        />
      )}
      {selectedTab === "Import" && <ImportPanel />}
    </>
  );
};

export default TableView;
