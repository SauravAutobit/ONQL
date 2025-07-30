import "./ExtensionSidebar.css";
import { Drawer, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import { setOpenExtensionSidebar } from "../../store/slices/extensionSidebarSlice";

const ExtensionSidebar = () => {
  const open = useSelector((store: RootState) => store?.extensionSidebar.value);

  const dispatch = useDispatch();

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={() => {}} // Disable outside click close
      hideBackdrop // This disables the overlay/backdrop
      ModalProps={{
        disableEnforceFocus: true,
        disableAutoFocus: true,
      }}
      PaperProps={{
        sx: {
          width: 413,
          borderLeft: "1px solid #e0e0e0",
          padding: 2,
          boxSizing: "border-box",
          zIndex: 1301, // Just above normal content (optional)
        },
        className: "extensionSidebar-contianer",
      }}
      variant="persistent" // Keep drawer open unless you manually close it
    >
      {/* Header with close icon */}
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <IconButton onClick={() => dispatch(setOpenExtensionSidebar())}>
          <CloseIcon />
        </IconButton>
      </div>

      {/* Your sidebar content goes here */}
      <div className="container">
        <div className="card">
          <h1 className="title">Welcome</h1>
          <p className="description">
            Log in or sign up to get smarter responses, upload files and images,
            and more.
          </p>

          <button className="btn login-btn">Log in</button>
          <button className="btn signup-btn">Sign up for free</button>

          <a href="#" className="stay-logged-out">
            Stay logged out
          </a>
        </div>
      </div>
    </Drawer>
  );
};

export default ExtensionSidebar;
