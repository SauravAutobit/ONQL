import { useState } from "react";
import SubHeader from "../../components/subHeader/SubHeader";
import StructurePanel from "../../components/structurePanel/StructurePanel";
import OnqlPanel from "../../components/onqlPanel/OnqlPanel";
import SearchPanel from "../../components/searchPanel/SearchPanel";
import ImportPanel from "../../components/importPanel/ImportPanel";
import QueryPanel from "../../components/queryPanel/QueryPanel";
import OperationPanel from "../../components/operationPanel/OperationPanel";
import ExportDatabasePanel from "../../components/exportDatabasePanel/ExportDatabasePanel";
import Terminal from "../../components/terminal/Terminal";

const DatabaseView = () => {
  const [selectedTab, setSelectedTab] = useState("Structure");
  return (
    <div className="mainContent-height">
      <div className="mainContent-padding">
        <SubHeader
          options={[
            "Structure",
            "ONQL",
            "Search",
            "Query",
            "Export",
            "Import",
            "Operation",
          ]}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />
        {selectedTab === "Structure" && <StructurePanel />}
        {selectedTab === "ONQL" && <OnqlPanel />}
        {selectedTab === "Search" && <SearchPanel />}
        {selectedTab === "Query" && <QueryPanel />}
        {selectedTab === "Export" && (
          <ExportDatabasePanel
            heading={"Exporting tables from the “database_name” Database"}
          />
        )}
        {selectedTab === "Import" && <ImportPanel />}
        {selectedTab === "Operation" && <OperationPanel />}
      </div>
      <div>
        <Terminal />
      </div>
    </div>
  );
};

export default DatabaseView;
