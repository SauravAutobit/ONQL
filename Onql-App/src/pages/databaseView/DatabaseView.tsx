import { useState } from "react";
import SubHeader from "../../components/subHeader/SubHeader";
import StructurePanel from "../../components/structurePanel/StructurePanel";
import OnqlPanel from "../../components/onqlPanel/OnqlPanel";
import SearchPanel from "../../components/searchPanel/SearchPanel";
import ImportPanel from "../../components/importPanel/ImportPanel";
import QueryPanel from "../../components/queryPanel/QueryPanel";
import ExportPanel from "../../components/exportPanel/ExportPanel";

const DatabaseView = () => {
  const [selectedTab, setSelectedTab] = useState("Structure");
  return (
    <>
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

      {selectedTab === "Structure" && (
        <StructurePanel selectedTab={selectedTab} />
      )}

      {selectedTab === "ONQL" && <OnqlPanel selectedTab={selectedTab} />}
      {selectedTab === "Search" && <SearchPanel selectedTab={selectedTab} />}
      {selectedTab === "Query" && <QueryPanel />}
      {selectedTab === "Export" && (
        <ExportPanel
          selectedTab={selectedTab}
          heading={"Exporting tables from the “database_name” Database"}
        />
      )}
      {selectedTab === "Import" && <ImportPanel selectedTab={selectedTab} />}
    </>
  );
};

export default DatabaseView;
