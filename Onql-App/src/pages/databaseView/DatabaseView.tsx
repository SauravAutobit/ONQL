import { useState } from "react";
import SubHeader from "../../components/subHeader/SubHeader";
import StructurePanel from "../../components/structurePanel/StructurePanel";
import OnqlPanel from "../../components/onqlPanel/OnqlPanel";
import SearchPanel from "../../components/searchPanel/SearchPanel";
import ImportPanel from "../../components/importPanel/ImportPanel";

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
      {selectedTab === "Import" && <ImportPanel selectedTab={selectedTab} />}
    </>
  );
};

export default DatabaseView;
