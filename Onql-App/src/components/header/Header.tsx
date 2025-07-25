import { useState } from "react";
import server from "../../assets/icons/server.svg";
import "../header/Header.css";
import Navbar from "react-bootstrap/Navbar";
import plus from "../../assets/icons/plus.svg";
import cross from "../../assets/icons/cross.svg";
import chatgpt from "../../assets/icons/chatGpt.svg";
import { useDispatch } from "react-redux";
import { setOpenExtensionSidebar } from "../../store/slices/extensionSidebarSlice";
import ExtensionSidebar from "../extensionSidebar/ExtensionSidebar";

const Header = () => {
  const [servers, setServers] = useState(1);

  console.log("servers", servers);

  const addServer = () => {
    // Logic to add a new server
    setServers(servers + 1);
    console.log("Add Server clicked");
  };

  const removeServer = (index: number) => {
    // Logic to remove a server
    if (servers > 1) {
      const filterServers = Array.from({ length: servers }).filter(
        (_, i) => i !== index
      );
      console.log("filterServers", filterServers);
      setServers(filterServers.length);

      console.log("Remove Server clicked");
    }
  };

  const dispatch = useDispatch();
  return (
    <>
      <Navbar expand="lg" className="header-bg">
        <div className="header-addServer-container">
          <div className="header-add-container" onClick={addServer}>
            <img src={plus} alt="addIcon" />
          </div>
          {Array.from({ length: servers }).map((_, index) => (
            <div className="header-server-container" key={index}>
              <img src={server} alt="serverIcon" />
              <p className="header-server-text">
                Server:{" "}
                <span className="header-server-port">
                  127.0.0.1 <b>{index}</b>
                </span>
              </p>
              <img
                src={cross}
                alt="crossIcon"
                onClick={() => removeServer(index)}
              />
            </div>
          ))}
        </div>
        <img
          src={chatgpt}
          alt="chatgpt"
          className="header-extension-img"
          onClick={() => dispatch(setOpenExtensionSidebar())}
        />
      </Navbar>
      <ExtensionSidebar />
    </>
  );
};

export default Header;

// import { Tabs } from "@sinm/react-chrome-tabs";
// import "@sinm/react-chrome-tabs/css/chrome-tabs.css";
// for dark mode
// import "@sinm/react-chrome-tabs/css/chrome-tabs-dark-theme.css";

// let id = 1;

//   type TabType = {
//     id: string;
//     title: string;
//     active?: boolean;
//     favicon?: string; // must be a string (URL)
//   };

//   const [tabs, setTabs] = useState<TabType[]>([
//     {
//       id: "abc",
//       favicon: serverIcon, // just the URL string
//       title: "first",
//       active: true,
//     },
//   ]);
//   //   const [draggable, setDraggable] = useState(true);

//   const addTab = () => {
//     id++;
//     setTabs([
//       ...tabs,
//       {
//         id: `tab-id-${id}`,
//         title: `New Tabs ${id}`,
//         favicon: server, // just the URL string
//       },
//     ]);
//   };

//   const active = (id: string) => {
//     setTabs(tabs.map((tab) => ({ ...tab, active: id === tab.id })));
//   };

//   const close = (id: string) => {
//     setTabs(tabs.filter((tab) => tab.id !== id));
//   };

//   const reorder = (tabId: string, toIndex: number) => {
//     const beforeTab = tabs.find((tab) => tab.id === tabId);
//     if (!beforeTab) {
//       return;
//     }
//     const newTabs = tabs.filter((tab) => tab.id !== tabId);
//     newTabs.splice(toIndex, 0, beforeTab);
//     setTabs(newTabs);
//   };
//   const closeAll = () => setTabs([]);

{
  /* <img src={server} /> */
}
{
  /* <Tabs
        darkMode={false}
        // draggable={draggable}
        draggable
        onTabClose={close}
        onTabReorder={reorder}
        onTabActive={active}
        onDragBegin={() => console.log("Drag started")}
        onDragEnd={() => console.log("Drag ended")}
        tabs={tabs}
        // pinnedRight={<button onClick={addTabWithIcon}>+</button>}
      />
      <button onClick={addTab}>Add Tab</button>
      <button onClick={closeAll}>Close All</button> */
}
