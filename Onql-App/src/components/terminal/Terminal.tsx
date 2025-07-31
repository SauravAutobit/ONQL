import "./Terminal.css";
import terminal from "../../assets/icons/terminal.svg";
import { useEffect, useRef, useState } from "react";
import downArrowTerminal from "../../assets/icons/downArrowTerminal.svg";

const tabs = ["Ext 1", "Ext 2", "Terminal", "Ext 4", "Ext 5"];

interface TerminalProps {
  open: boolean;
  customStyle?: React.CSSProperties;
}

const Terminal = ({ open, customStyle }: TerminalProps) => {
  const [terminalOpen, setTerminalOpen] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState("Ext 1");
  const [terminalSidebar, setTerminalSidebar] = useState<boolean>(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

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
    if (terminalOpen && !isClosing) {
      const timeout = setTimeout(() => {
        terminalRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "end",
        });
      }, 310); // match your open animation duration (~300ms)

      return () => clearTimeout(timeout);
    }
  }, [terminalOpen, isClosing]);

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

  const toggleTerminal = () => {
    if (terminalOpen) {
      // Start closing animation
      setIsClosing(true);
      setTimeout(() => {
        setTerminalOpen(false);
        setIsClosing(false);
      }, 300); // match animation duration
    } else {
      // Instantly open
      setTerminalOpen(true);
    }
  };

  return (
    <>
      <div
        style={{
          marginLeft: open ? "334px" : "71px",
          position: "relative",
          ...customStyle,
        }}
      >
        <div
          className={`terminal-wrapper ${
            terminalOpen ? "expanded" : "collapsed"
          }`}
          onClick={toggleTerminal}
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
        {
          <div
            ref={terminalRef}
            className={`terminal-area ${
              terminalOpen ? (isClosing ? "closing" : "opening") : "closed"
            }`}
            style={{
              display: "flex",
              position: "relative",
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
        }
      </div>
    </>
  );
};

export default Terminal;
