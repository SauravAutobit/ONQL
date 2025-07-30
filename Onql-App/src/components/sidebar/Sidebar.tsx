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

// import Collapse from "react-bootstrap/Collapse";
// import { Fade } from "react-bootstrap";
import add from "../../assets/icons/add.svg";
import { Link, Outlet, useLocation } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";
import extensionOption from "../../assets/icons/extensionOption.svg";
import Collapse from "@mui/material/Collapse";
import rightArrow from "../../assets/icons/rightArrow.svg";
import downArrowWhite from "../../assets/icons/downArrowWhite.svg";
import chatGpt from "../../assets/icons/chatGpt.svg";
import pinterest from "../../assets/icons/pinterest.svg";
import chrome from "../../assets/icons/chrome.svg";
import insta from "../../assets/icons/insta.svg";
import fb from "../../assets/icons/fb.svg";
import upArrow from "../../assets/icons/upArrow.svg";
import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";
// import Terminal from "../terminal/Terminal";

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
    background: `linear-gradient(to right, var(--sidebar-bg-primary) ${iconAreaWidth}px, var(--sidebar-bg-secondary) ${iconAreaWidth}px)`,
    // ? `linear-gradient(to right, var(--sidebar-bg-primary) ${iconAreaWidth}px, var(--sidebar-bg-secondary) ${iconAreaWidth}px)`
    // : `var(--sidebar-bg-primary)`,
  },
}));

// CORRECTED: Main content component with proper margin transitions

const ExtensionSidebarWidth = 413; // Same as your Drawer width

const Main = styled("main", {
  shouldForwardProp: (prop) =>
    prop !== "open" && prop !== "extensionSidebarOpen",
})<{
  open?: boolean;
  extensionSidebarOpen?: boolean;
}>(({ theme, open, extensionSidebarOpen }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create(["margin-left", "margin-right"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `${iconAreaWidth}px`,
  ...(open && {
    transition: theme.transitions.create(["margin-left", "margin-right"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: `${drawerWidth}px`,
  }),
  ...(extensionSidebarOpen && {
    marginRight: `${ExtensionSidebarWidth}px`, // Add this
  }),
}));

// const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
//   open?: boolean;
// }>(({ theme, open }) => ({
//   flexGrow: 1,
//   padding: theme.spacing(3),
//   transition: theme.transitions.create("margin", {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   // Default margin for closed state
//   marginLeft: `${iconAreaWidth}px`,
//   ...(open && {
//     transition: theme.transitions.create("margin", {
//       easing: theme.transitions.easing.easeOut,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//     // Margin when drawer is open
//     marginLeft: `${drawerWidth}px`,
//   }),
// }));

interface SidebarProps {
  open: boolean;
  setOpen: (value: boolean) => void;
}

const Sidebar = ({ open, setOpen }: SidebarProps) => {
  const [selectedIcon, setSelectedIcon] = React.useState(0);
  // const [open, setOpen] = React.useState(true);

  const [dropDownOpen, setDropDownOpen] = React.useState({
    open: false,
    option: "installed",
  });

  const handleDrawerOpen = (index: number) => {
    setOpen(true);
    setSelectedIcon(index);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const { pathname } = useLocation();

  const extensionSidebarOpen = useSelector(
    (store: RootState) => store.extensionSidebar.value
  );

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
          {selectedIcon === 0 || selectedIcon === 1 ? (
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
                  dropDownOpen.open && dropDownOpen.option === "recent"
                    ? "sidebar-option-container open"
                    : "sidebar-option-container"
                }
                onClick={() =>
                  setDropDownOpen((prev) => {
                    return {
                      ...prev,
                      open:
                        dropDownOpen.option !== "recent"
                          ? true
                          : !dropDownOpen.open,
                      option: "recent",
                    };
                  })
                }
                // aria-controls="example-collapse-text"
                aria-controls="example-fade-text"
                aria-expanded={dropDownOpen.open}
              >
                <div className="sidebar-option-iconText">
                  <img src={recentWatch} alt="recentWatch" />
                  <p className="sidebar-option-text">Recent</p>
                </div>
                <img
                  src={
                    dropDownOpen.open && dropDownOpen.option === "recent"
                      ? upArrow
                      : downArrow
                  }
                  alt="downArrow"
                />
              </div>

              <Collapse
                in={dropDownOpen.open && dropDownOpen.option === "recent"}
              >
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
                  dropDownOpen.open && dropDownOpen.option === "favourites"
                    ? "sidebar-option-container open"
                    : "sidebar-option-container"
                }
                onClick={() =>
                  setDropDownOpen((prev) => {
                    return {
                      ...prev,
                      open:
                        dropDownOpen.option !== "favourites"
                          ? true
                          : !dropDownOpen.open,
                      option: "favourites",
                    };
                  })
                }
              >
                <div className="sidebar-option-iconText">
                  <img src={star} alt="star" />
                  <p className="sidebar-option-text">Favourites</p>
                </div>
                <img
                  src={
                    dropDownOpen.open && dropDownOpen.option === "favourites"
                      ? upArrow
                      : downArrow
                  }
                  alt="downArrow"
                />
              </div>

              <Collapse
                in={dropDownOpen.open && dropDownOpen.option === "favourites"}
                timeout="auto"
                unmountOnExit
              >
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
          ) : (
            <div
              className={`options-panel ${
                open ? "is-open" : ""
              } sidebar-extensions`}
            >
              {/* <IconButton
              onClick={handleDrawerClose}
              // sx={{ position: "absolute", top: 0, right: 0 }}
            > */}
              <div className="sidebar-extensions-heading">
                Extensions
                <div
                  className="sidebar-option-backArrow"
                  onClick={handleDrawerClose}
                >
                  <img src={backArrow} alt="backArrow" />
                </div>
              </div>{" "}
              <div className="sidebar-search-container">
                <SearchBar
                  width="100%"
                  background={"var(--sidebar-bg-secondary)"}
                  border="1px solid var(--text-color-secondary)"
                  placeholder={"Search Extension"}
                />
                <img src={extensionOption} alt="extensionOption" />
              </div>
              {/* </IconButton> */}
              <div
                className={
                  dropDownOpen.open && dropDownOpen.option === "installed"
                    ? "sidebar-option-container extensions-open"
                    : "sidebar-option-container extensions-container"
                }
                onClick={() =>
                  setDropDownOpen((prev) => {
                    return {
                      ...prev,
                      open:
                        dropDownOpen.option !== "installed"
                          ? true
                          : !dropDownOpen.open,
                      option: "installed",
                    };
                  })
                }
                // aria-controls="example-collapse-text"
                aria-controls="example-fade-text"
                aria-expanded={dropDownOpen.open}
              >
                <div className="sidebar-option-iconText">
                  <img
                    src={
                      dropDownOpen.open && dropDownOpen.option === "installed"
                        ? downArrowWhite
                        : rightArrow
                    }
                    alt="rightArrow"
                  />
                  <p
                    className={
                      dropDownOpen.open && dropDownOpen.option === "installed"
                        ? "sidebar-option-text extensions-text-open"
                        : "sidebar-option-text extensions-text"
                    }
                  >
                    Installed
                  </p>
                </div>
              </div>
              <Collapse
                in={dropDownOpen.open && dropDownOpen.option === "installed"}
                timeout="auto"
                unmountOnExit
              >
                <div className="dropdown-collapse-container extensions-container">
                  <Link to="/extension-details">
                    <div className="sidebar-extensions-container">
                      <img src={chatGpt} alt="chatGpt" />
                      <div>
                        <p className="sidebar-extensions-name">Chat GPT</p>
                        <p className="sidebar-extensions-description">
                          Extension Summary Desc...
                        </p>
                        <p className="sidebar-extensions-corporation">
                          Chat GPT Corporation
                        </p>
                      </div>
                    </div>
                  </Link>
                  <div className="sidebar-extensions-container">
                    <img src={pinterest} alt="pinterest" />
                    <div>
                      <p className="sidebar-extensions-name">Pinterest Ext.</p>
                      <p className="sidebar-extensions-description">
                        Extension Summary Desc...
                      </p>
                      <p className="sidebar-extensions-corporation">
                        Pinterest Corporation
                      </p>
                    </div>
                  </div>
                  <div className="sidebar-extensions-container">
                    <img src={chrome} alt="chrome" />
                    <div>
                      <p className="sidebar-extensions-name">
                        Chrome Extension
                      </p>
                      <p className="sidebar-extensions-description">
                        Extension Summary Desc...
                      </p>
                      <p className="sidebar-extensions-corporation">
                        Chrome Corporation
                      </p>
                    </div>
                  </div>
                  <div className="sidebar-extensions-container">
                    <img src={insta} alt="insta" />
                    <div>
                      <p className="sidebar-extensions-name">
                        Instagram Extension
                      </p>
                      <p className="sidebar-extensions-description">
                        Extension Summary Desc...
                      </p>
                      <p className="sidebar-extensions-corporation">
                        Meta Corporation
                      </p>
                    </div>
                  </div>
                  <div className="sidebar-extensions-container">
                    <img src={fb} alt="fb" />
                    <div>
                      <p className="sidebar-extensions-name">
                        Facebook Extension
                      </p>
                      <p className="sidebar-extensions-description">
                        Extension Summary Desc...
                      </p>
                      <p className="sidebar-extensions-corporation">
                        Meta Corporation
                      </p>
                    </div>
                  </div>
                  <div className="sidebar-extensions-container">
                    <img src={insta} alt="insta" />
                    <div>
                      <p className="sidebar-extensions-name">
                        Instagram Extension
                      </p>
                      <p className="sidebar-extensions-description">
                        Extension Summary Desc...
                      </p>
                      <p className="sidebar-extensions-corporation">
                        Meta Corporation
                      </p>
                    </div>
                  </div>
                </div>
              </Collapse>
              <div
                className={
                  dropDownOpen.open && dropDownOpen.option === "enabled"
                    ? "sidebar-option-container extensions-open"
                    : "sidebar-option-container extensions-container"
                }
                onClick={() =>
                  setDropDownOpen((prev) => {
                    return {
                      ...prev,
                      open:
                        dropDownOpen.option !== "enabled"
                          ? true
                          : !dropDownOpen.open,
                      option: "enabled",
                    };
                  })
                }
                // aria-controls="example-collapse-text"
                aria-controls="example-fade-text"
                aria-expanded={dropDownOpen.open}
              >
                <div className="sidebar-option-iconText">
                  <img
                    src={
                      dropDownOpen.open && dropDownOpen.option === "enabled"
                        ? downArrowWhite
                        : rightArrow
                    }
                    alt="rightArrow"
                  />
                  <p
                    className={
                      dropDownOpen.open && dropDownOpen.option === "enabled"
                        ? "sidebar-option-text extensions-text-open"
                        : "sidebar-option-text extensions-text"
                    }
                  >
                    Enabled
                  </p>
                </div>
              </div>
              <Collapse
                in={dropDownOpen.open && dropDownOpen.option === "enabled"}
                timeout="auto"
                unmountOnExit
              >
                <div className="dropdown-collapse-container extensions-container">
                  <div className="sidebar-extensions-container">
                    <img src={chatGpt} alt="chatGpt" />
                    <div>
                      <p className="sidebar-extensions-name">Chat GPT</p>
                      <p className="sidebar-extensions-description">
                        Extension Summary Desc...
                      </p>
                      <p className="sidebar-extensions-corporation">
                        Chat GPT Corporation
                      </p>
                    </div>
                  </div>
                  <div className="sidebar-extensions-container">
                    <img src={pinterest} alt="pinterest" />
                    <div>
                      <p className="sidebar-extensions-name">Pinterest Ext.</p>
                      <p className="sidebar-extensions-description">
                        Extension Summary Desc...
                      </p>
                      <p className="sidebar-extensions-corporation">
                        Pinterest Corporation
                      </p>
                    </div>
                  </div>
                  <div className="sidebar-extensions-container">
                    <img src={chrome} alt="chrome" />
                    <div>
                      <p className="sidebar-extensions-name">
                        Chrome Extension
                      </p>
                      <p className="sidebar-extensions-description">
                        Extension Summary Desc...
                      </p>
                      <p className="sidebar-extensions-corporation">
                        Chrome Corporation
                      </p>
                    </div>
                  </div>
                </div>
              </Collapse>
              <div
                className={
                  dropDownOpen.open && dropDownOpen.option === "disabled"
                    ? "sidebar-option-container extensions-open"
                    : "sidebar-option-container extensions-container"
                }
                onClick={() =>
                  setDropDownOpen((prev) => {
                    return {
                      ...prev,
                      open:
                        dropDownOpen.option !== "disabled"
                          ? true
                          : !dropDownOpen.open,
                      option: "disabled",
                    };
                  })
                }
                // aria-controls="example-collapse-text"
                aria-controls="example-fade-text"
                aria-expanded={dropDownOpen.open}
              >
                <div className="sidebar-option-iconText">
                  <img
                    src={
                      dropDownOpen.open && dropDownOpen.option === "disabled"
                        ? downArrowWhite
                        : rightArrow
                    }
                    alt="rightArrow"
                  />
                  <p
                    className={
                      dropDownOpen.open && dropDownOpen.option === "disabled"
                        ? "sidebar-option-text extensions-text-open"
                        : "sidebar-option-text extensions-text"
                    }
                  >
                    Disabled
                  </p>
                </div>
              </div>
              <Collapse
                in={dropDownOpen.open && dropDownOpen.option === "disabled"}
                timeout="auto"
                unmountOnExit
              >
                <div className="dropdown-collapse-container extensions-container">
                  <div className="sidebar-extensions-container">
                    <img src={chatGpt} alt="chatGpt" />
                    <div>
                      <p className="sidebar-extensions-name">Chat GPT</p>
                      <p className="sidebar-extensions-description">
                        Extension Summary Desc...
                      </p>
                      <p className="sidebar-extensions-corporation">
                        Chat GPT Corporation
                      </p>
                    </div>
                  </div>
                  <div className="sidebar-extensions-container">
                    <img src={insta} alt="insta" />
                    <div>
                      <p className="sidebar-extensions-name">
                        Instagram Extension
                      </p>
                      <p className="sidebar-extensions-description">
                        Extension Summary Desc...
                      </p>
                      <p className="sidebar-extensions-corporation">
                        Meta Corporation
                      </p>
                    </div>
                  </div>
                </div>
              </Collapse>
              <div
                className={
                  dropDownOpen.open && dropDownOpen.option === "recommended"
                    ? "sidebar-option-container extensions-open"
                    : "sidebar-option-container extensions-container"
                }
                onClick={() =>
                  setDropDownOpen((prev) => {
                    return {
                      ...prev,
                      open:
                        dropDownOpen.option !== "recommended"
                          ? true
                          : !dropDownOpen.open,
                      option: "recommended",
                    };
                  })
                }
                // aria-controls="example-collapse-text"
                aria-controls="example-fade-text"
                aria-expanded={dropDownOpen.open}
              >
                <div className="sidebar-option-iconText">
                  <img
                    src={
                      dropDownOpen.open && dropDownOpen.option === "recommended"
                        ? downArrowWhite
                        : rightArrow
                    }
                    alt="rightArrow"
                  />
                  <p
                    className={
                      dropDownOpen.open && dropDownOpen.option === "recommended"
                        ? "sidebar-option-text extensions-text-open"
                        : "sidebar-option-text extensions-text"
                    }
                  >
                    Recommended
                  </p>
                </div>
              </div>
              <Collapse
                in={dropDownOpen.open && dropDownOpen.option === "recommended"}
                timeout="auto"
                unmountOnExit
              >
                <div className="dropdown-collapse-container extensions-container">
                  <div className="sidebar-extensions-container">
                    <img src={chatGpt} alt="chatGpt" />
                    <div>
                      <p className="sidebar-extensions-name">Chat GPT</p>
                      <p className="sidebar-extensions-description">
                        Extension Summary Desc...
                      </p>
                      <p className="sidebar-extensions-corporation">
                        Chat GPT Corporation
                      </p>
                    </div>
                  </div>
                </div>
              </Collapse>
            </div>
          )}
        </div>
      </Drawer>

      {/* Main content now correctly moves with the sidebar */}
      <Main
        open={open}
        extensionSidebarOpen={extensionSidebarOpen} // pass the state here
        sx={{
          padding:
            pathname === "/extension-details" || pathname === "/create-table"
              ? "0"
              : "10px 10px 0 10px",
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh", // full screen height
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <Outlet />
        </Box>

        {/* Sticky terminal at bottom */}
        {/* <Box>
          <Terminal />
        </Box> */}
      </Main>
    </Box>
  );
};

export default Sidebar;
