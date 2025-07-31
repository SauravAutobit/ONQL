import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Terminal from "./components/terminal/Terminal";
import ScrollToTop from "./components/scrollToTop/ScrollToTop";

function App() {
  const [open, setOpen] = React.useState(true);

  return (
    <>
      <ScrollToTop />
      <Header />
      <Sidebar open={open} setOpen={setOpen} />
      <Terminal open={open} />
    </>
  );
}

export default App;
