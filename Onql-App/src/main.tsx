import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { appRouter } from "./appRouter";
import { RouterProvider } from "react-router-dom";
// import { CssBaseline, ThemeProvider } from "@mui/material";
// import theme from "./theme.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <ThemeProvider theme={theme}> */}
    {/* <CssBaseline /> */}
    <RouterProvider router={appRouter} />
    {/* </ThemeProvider> */}
  </StrictMode>
);
