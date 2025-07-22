import "./Sidebar.css";
import * as React from "react";
import { styled, type Theme } from "@mui/material/styles";
import type { CSSObject } from "@mui/material";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
// import CssBaseline from "@mui/material/CssBaseline";
// import Typography from "@mui/material/Typography";
// import IconButton from "@mui/material/IconButton";
// import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

// Your custom assets
import database from "../../assets/icons/database.svg";
import protocol from "../../assets/icons/protocol.svg";
import plugin from "../../assets/icons/plugin.svg";
import logo from "../../assets/icons/logo.svg";
import recentWatch from "../../assets/icons/recentWatch.svg";
import downArrow from "../../assets/icons/downArrow.svg";
import star from "../../assets/icons/star.svg";
import backArrow from "../../assets/icons/backArrow.svg";

import Collapse from "react-bootstrap/Collapse";
// import { Fade } from "react-bootstrap";
import add from "../../assets/icons/add.svg";
import { Link, Outlet } from "react-router-dom";

// --- Control the widths here ---
const iconAreaWidth = 71;
const drawerWidth = 334;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `${iconAreaWidth}px`,
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  "& .MuiDrawer-paper": {
    ...(open ? openedMixin(theme) : closedMixin(theme)),
    background: open
      ? `linear-gradient(to right, var(--sidebar-bg-primary) ${iconAreaWidth}px, var(--sidebar-bg-secondary) ${iconAreaWidth}px)`
      : `var(--sidebar-bg-primary)`,
  },
}));

// CORRECTED: Main content component with proper margin transitions
const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  // Default margin for closed state
  marginLeft: `${iconAreaWidth}px`,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    // Margin when drawer is open
    marginLeft: `${drawerWidth}px`,
  }),
}));

const Sidebar = () => {
  const [selectedIcon, setSelectedIcon] = React.useState(0);
  const [open, setOpen] = React.useState(true);

  const [dropDownOpen, setDropDownOpen] = React.useState(false);
  //
  const handleDrawerOpen = (index: number) => {
    setOpen(true);
    setSelectedIcon(index);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    // REMOVED: display: "flex" is no longer needed here
    <Box>
      {/* <CssBaseline /> */}
      <Drawer variant="permanent" open={open}>
        <div
          className="drawer-content-wrapper"
          style={
            {
              "--icon-area-width": `${iconAreaWidth}px`,
              "--drawer-width": `${drawerWidth}px`,
            } as React.CSSProperties
          }
        >
          {/* --- This is your Icon Area --- */}
          <div className="icon-strip">
            <Link to="/">
              <div
                className={
                  selectedIcon === 0 ? "image-border" : "image-no-border"
                }
                onClick={() => handleDrawerOpen(0)}
              >
                <img src={database} alt="database" />
              </div>
            </Link>
            <Link to="/protocol">
              <div
                className={
                  selectedIcon === 1 ? "image-border" : "image-no-border"
                }
                onClick={() => handleDrawerOpen(1)}
              >
                <img src={protocol} alt="protocol" />
              </div>
            </Link>
            <div
              className={
                selectedIcon === 2 ? "image-border" : "image-no-border"
              }
              onClick={() => handleDrawerOpen(2)}
            >
              <img src={plugin} alt="plugin" />
            </div>
          </div>

          {/* --- This is your Options Area (yellow background) --- */}
          <div className={`options-panel ${open ? "is-open" : ""}`}>
            {/* <IconButton
              onClick={handleDrawerClose}
              // sx={{ position: "absolute", top: 0, right: 0 }}
            > */}

            <div
              className="sidebar-option-backArrow"
              onClick={handleDrawerClose}
            >
              <img src={backArrow} alt="backArrow" />
            </div>
            {/* </IconButton> */}

            <img
              src={logo}
              alt="logo"
              style={{ alignSelf: "center", padding: "10px" }}
            />

            <div
              className={
                dropDownOpen
                  ? "sidebar-option-container open"
                  : "sidebar-option-container"
              }
              onClick={() => setDropDownOpen(!dropDownOpen)}
              // aria-controls="example-collapse-text"
              aria-controls="example-fade-text"
              aria-expanded={dropDownOpen}
            >
              <div className="sidebar-option-iconText">
                <img src={recentWatch} alt="recentWatch" />
                <p className="sidebar-option-text">Recent</p>
              </div>
              <img src={downArrow} alt="downArrow" />
            </div>

            <Collapse in={dropDownOpen}>
              <div
                // id="example-collapse-text"
                id="example-fade-text"
                className="dropdown-collapse-container"
              >
                No Database
              </div>
            </Collapse>

            <div
              className={
                dropDownOpen
                  ? "sidebar-option-container open"
                  : "sidebar-option-container"
              }
              onClick={() => setDropDownOpen(!dropDownOpen)}
            >
              <div className="sidebar-option-iconText">
                <img src={star} alt="star" />
                <p className="sidebar-option-text">Favourites</p>
              </div>
              <img src={downArrow} alt="downArrow" />
            </div>

            <Collapse in={dropDownOpen}>
              <div
                // id="example-collapse-text"
                id="example-fade-text"
                className="dropdown-collapse-container"
              >
                No Database
              </div>
            </Collapse>

            <div
              className="sidebar-database-btn"
              style={{ alignSelf: "center" }}
            >
              <img src={database} alt="database" width="12px" />
              Create New Database
              <img src={add} alt="add" />
            </div>
          </div>
        </div>
      </Drawer>

      {/* Main content now correctly moves with the sidebar */}
      <Main open={open}>
        <Outlet />
      </Main>
    </Box>
  );
};

export default Sidebar;
