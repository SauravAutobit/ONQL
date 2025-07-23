import { createBrowserRouter } from "react-router-dom";
import ServerView from "./pages/serverView/ServerView";
import ProtocolView from "./pages/protocolView/ProtocolView";
import App from "./App";
import DatabasePanel from "./components/databasePanel/DatabasePanel";
import ProtocolTable from "./pages/protocolTable/ProtocolTable";
import ProtocolColumn from "./pages/protocolColumn/ProtocolColumn";
import ExtensionDetails from "./pages/extensionDetails/ExtensionDetails";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <ServerView />,
      },
      {
        path: "/protocol",
        element: <ProtocolView />,
      },
      {
        path: "/protocol-database",
        element: <DatabasePanel />,
      },
      {
        path: "/protocol-table",
        element: <ProtocolTable />,
      },
      {
        path: "/protocol-column",
        element: <ProtocolColumn />,
      },
      {
        path: "/extension-details",
        element: <ExtensionDetails />,
      },
    ],
  },
]);
