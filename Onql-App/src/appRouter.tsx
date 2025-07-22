import { createBrowserRouter } from "react-router-dom";
import ServerView from "./pages/serverView/ServerView";
import ProtocolView from "./pages/protocolView/ProtocolView";
import App from "./App";
import DatabasePanel from "./components/databasePanel/DatabasePanel";
import Table7Columns from "./components/table7Columns/Table7Columns";

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
        element: <Table7Columns headingCol1={"Table"} />,
      },
    ],
  },
]);
