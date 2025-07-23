import "./ExtensionHeader.css";
import { useState } from "react";
import chatgpt from "../../assets/icons/chatgpt.svg";
import Navbar from "react-bootstrap/Navbar";

import cross from "../../assets/icons/cross.svg";
type Server = {
  id: number;
  name: string; // optional if needed
};

const ExtensionHeader = () => {
  const [servers, setServers] = useState<Server[]>([
    { id: 0, name: "Server 0" },
  ]);
  //   const addServer = () => {
  //     const newId = servers.length > 0 ? servers[servers.length - 1].id + 1 : 0;
  //     setServers([...servers, { id: newId, name: `Server ${newId}` }]);
  //   };

  const removeServer = (id: number) => {
    setServers(servers.filter((server) => server.id !== id));
  };

  return (
    <>
      {" "}
      <Navbar expand="lg" className="extension-header-bg">
        {servers.map((server) => (
          <div className="extension-header-server-container" key={server.id}>
            <div className="extension-header-server-iconText">
              <img src={chatgpt} alt="chatgpt" width={"18px"} height="18px" />
              <p className="extension-header-server-text">Chat GPT</p>
            </div>
            <img
              src={cross}
              alt="crossIcon"
              onClick={() => removeServer(server.id)}
            />
          </div>
        ))}
      </Navbar>
    </>
  );
};

export default ExtensionHeader;
