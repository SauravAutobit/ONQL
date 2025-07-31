// #Sidebar
// import { styled, type Theme } from "@mui/material/styles";
// import type { CSSObject } from "@mui/material";
// import MuiDrawer from "@mui/material/Drawer";

// // --- Control the widths here ---
// const iconAreaWidth = 71;
// const drawerWidth = 334;

// const openedMixin = (theme: Theme): CSSObject => ({
//   width: drawerWidth,
//   transition: theme.transitions.create("width", {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.enteringScreen,
//   }),
//   overflowX: "hidden",
// });

// const closedMixin = (theme: Theme): CSSObject => ({
//   transition: theme.transitions.create("width", {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   overflowX: "hidden",
//   width: `${iconAreaWidth}px`,
// });

// const Drawer = styled(MuiDrawer, {
//   shouldForwardProp: (prop) => prop !== "open",
// })(({ theme, open }) => ({
//   width: drawerWidth,
//   flexShrink: 0,
//   whiteSpace: "nowrap",
//   boxSizing: "border-box",
//   "& .MuiDrawer-paper": {
//     ...(open ? openedMixin(theme) : closedMixin(theme)),
//     background: `linear-gradient(to right, var(--sidebar-bg-primary) ${iconAreaWidth}px, var(--sidebar-bg-secondary) ${iconAreaWidth}px)`,
//     // ? `linear-gradient(to right, var(--sidebar-bg-primary) ${iconAreaWidth}px, var(--sidebar-bg-secondary) ${iconAreaWidth}px)`
//     // : `var(--sidebar-bg-primary)`,
//   },
// }));

// const ExtensionSidebarWidth = 413; // Same as your Drawer width

// const Main = styled("main", {
//   shouldForwardProp: (prop) =>
//     prop !== "open" && prop !== "extensionSidebarOpen",
// })<{
//   open?: boolean;
//   extensionSidebarOpen?: boolean;
// }>(({ theme, open, extensionSidebarOpen }) => ({
//   flexGrow: 1,
//   padding: theme.spacing(3),
//   transition: theme.transitions.create(["margin-left", "margin-right"], {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   marginLeft: `${iconAreaWidth}px`,
//   ...(open && {
//     transition: theme.transitions.create(["margin-left", "margin-right"], {
//       easing: theme.transitions.easing.easeOut,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//     marginLeft: `${drawerWidth}px`,
//   }),
//   ...(extensionSidebarOpen && {
//     marginRight: `${ExtensionSidebarWidth}px`, // Add this
//   }),
// }));
