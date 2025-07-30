import "./Terminal.css";
import terminal from "../../assets/icons/terminal.svg";
import { useEffect, useRef, useState } from "react";
import downArrowTerminal from "../../assets/icons/downArrowTerminal.svg";

const tabs = ["Ext 1", "Ext 2", "Terminal", "Ext 4", "Ext 5"];

interface TerminalProps {
  open: boolean;
}

const Terminal = ({ open }: TerminalProps) => {
  const [terminalOpen, setTerminalOpen] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState("Terminal");
  const [terminalSidebar, setTerminalSidebar] = useState<boolean>(false);
  const [showSidebar, setShowSidebar] = useState(false);

  const [terminalInputs, setTerminalInputs] = useState<{
    [key: string]: string;
  }>({
    Terminal: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const updated = {
      ...terminalInputs,
      [activeTab]: e.target.value,
    };
    setTerminalInputs(updated);
  };

  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (terminalOpen && terminalRef.current) {
      terminalRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  }, [terminalOpen]);

  const toggleSidebar = () => {
    if (terminalSidebar) {
      // Start close animation
      setTerminalSidebar(false);
      setTimeout(() => setShowSidebar(false), 300); // Wait for animation to finish
    } else {
      // First set showSidebar to true
      setShowSidebar(true);
      // Immediately mark it as open to apply the class before browser paints
      setTerminalSidebar(true); // ← remove the delay here
    }
  };
  return (
    <>
      <div
        style={{ marginLeft: open ? "334px" : "71px", position: "relative" }}
      >
        <div
          className="terminal-wrapper"
          style={{
            width: terminalOpen ? "" : "103px",
            cursor: "pointer",
          }}
          onClick={() => setTerminalOpen(!terminalOpen)}
        >
          <div className="terminal-icon-heading">
            <img src={terminal} alt="terminal" />
            <div>Terminal</div>
          </div>
          {terminalOpen && (
            <img
              src={downArrowTerminal}
              alt="downArrowTerminal"
              onClick={(e) => {
                e.stopPropagation();
                toggleSidebar();
              }}
              style={{ cursor: "pointer" }}
            />
          )}
        </div>
        {terminalOpen && (
          <div
            ref={terminalRef}
            className={`terminal-area ${terminalOpen ? "open" : ""}`}
            style={{
              display: "flex",
              position: "relative",
              height: terminalOpen ? "auto" : "0px",
            }}
          >
            <textarea
              className="form-input import"
              value={terminalInputs[activeTab] || ""}
              onChange={handleInputChange}
              style={{
                height: "152px",
                resize: "none",
                border: "none",
                width: terminalSidebar ? "calc(100% - 100px)" : "100%",
                transition: "width 0.2s ease",
              }}
            />

            {showSidebar && (
              <div
                className={terminalSidebar ? "sidebar-slide" : "sidebar-close"}
                style={{
                  width: "100px",
                  backgroundColor: "var(--sidebar-bg-primary)",
                  color: "#fff",
                  display: "flex",
                  flexDirection: "column",
                  borderLeft: "1px solid #e0e0e0",
                }}
              >
                {tabs.map((tab) => (
                  <div
                    key={tab}
                    style={{
                      padding: "2px 10px",
                      cursor: "pointer",
                      backgroundColor:
                        activeTab === tab ? "#2c444fff" : "inherit",
                      textAlign: "center",
                    }}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Terminal;
