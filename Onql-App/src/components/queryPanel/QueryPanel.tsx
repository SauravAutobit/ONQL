import "./QueryPanel.css";
import QueryWindow from "../queryWindow/QueryWindow";
import Button from "../button/Button";
import Collapse from "@mui/material/Collapse";
import downArrow from "../../assets/icons/downArrow.svg";
import { useState } from "react";
import QueryEditor from "../queryEditor/QueryEditor";

const QueryPanel = () => {
  const [windowOpen, setWindowOpen] = useState(true);
  return (
    <>
      <div
        className="queryPanel-container"
        aria-controls="example-fade-text"
        aria-expanded={windowOpen}
      >
        <div
          className="queryPanel-heading"
          onClick={() => setWindowOpen(!windowOpen)}
        >
          <p>Query Window</p>
          <img src={downArrow} alt="downArrow" />
        </div>

        <Button
          btnText={"+ Add Column"}
          width={127}
          height={30}
          padding={"6px 20px"}
        />
      </div>
      <Collapse in={windowOpen} timeout="auto" unmountOnExit>
        <div className="queryPanel-windows">
          <QueryWindow />
          <QueryWindow />
          <QueryWindow />
        </div>
        <div className="queryPanel-editor">
          <QueryEditor />
        </div>
        <div className="queryPanel-btn-container">
          <Button
            btnText={"Update query"}
            width={100}
            height={30}
            padding={"6px 9px"}
            color="var(--text-color-primary)"
            background="white"
            border="1px solid var(--border-color-primary)"
          />
          <Button
            btnText={"Submit query"}
            width={100}
            height={30}
            padding={"6px 9px"}
          />
        </div>
      </Collapse>
    </>
  );
};

export default QueryPanel;
