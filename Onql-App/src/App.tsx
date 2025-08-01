import "./App.css";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import ScrollToTop from "./components/scrollToTop/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Sidebar />
    </>
  );
}

export default App;
