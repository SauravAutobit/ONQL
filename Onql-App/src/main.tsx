import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { appRouter } from "./appRouter";
import { RouterProvider } from "react-router-dom";
import appStore from "./store/store";
// import { CssBaseline, ThemeProvider } from "@mui/material";
// import theme from "./theme.ts";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <ThemeProvider theme={theme}> */}
    {/* <CssBaseline /> */}
    <Provider store={appStore}>
      <RouterProvider router={appRouter} />
    </Provider>
    {/* </ThemeProvider> */}
  </StrictMode>
);
