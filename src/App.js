import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import LayananPage from "./pages/LayananPage";
import ContactPage from "./pages/ContactPage";
import DanaPage from "./pages/DanaPage";
import "../src/styles/style.css";
import {
  aboutPath,
  homePath,
  layananPath,
  danaPath,
  contactPath,
  rootPath,
  pinjamanPath,
  lampungOnlinePath,
  lampungSmartPath,
  qrisPath,
  lampungSavingPath,
} from "./routes";
import { Route, Routes } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import PinjamanPage from "./pages/PinjamanPage";
import LampungOnlinePage from "./pages/LampungOnlinePage";
import LampungSmartPage from "./pages/LampungSmart";
import QrisPage from "./pages/QrisPage";
import LampungSavingPage from "./pages/LampungSavingPage";

function App() {
  return (
    <div className="app">
      <main>
        <NavigationBar />
        <Routes>
          {[rootPath, homePath].map((path, index) => (
            <Route path={path} element={<HomePage />} key={index} />
          ))}
          <Route path={aboutPath} element={<AboutPage />} />
          <Route path={layananPath} element={<LayananPage />} />
          <Route path={danaPath} element={<DanaPage />} />
          <Route path={contactPath} element={<ContactPage />} />
          <Route path={pinjamanPath} element={<PinjamanPage />} />
          <Route path={lampungOnlinePath} element={<LampungOnlinePage />} />
          <Route path={lampungSmartPath} element={<LampungSmartPage />} />
          <Route path={qrisPath} element={<QrisPage />} />
          <Route path={lampungSavingPath} element={<LampungSavingPage />} />
        </Routes>
        <Footer />
      </main>
    </div>
  );
}

export default App;
