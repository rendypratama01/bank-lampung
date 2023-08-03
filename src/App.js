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
  simpedaPath,
  tabunganKuPath,
  simpananPelajarPath,
  giroPeroranganPath,
  giroSwastaPath,
  giroDinasPath,
  depositoPath,
} from "./routes";
import { Route, Routes } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import PinjamanPage from "./pages/PinjamanPage";
import LampungOnlinePage from "./pages/LampungOnlinePage";
import LampungSmartPage from "./pages/LampungSmart";
import QrisPage from "./pages/QrisPage";
import LampungSavingPage from "./pages/LampungSavingPage";
import SimpedaPage from "./pages/SimpedaPage";
import TabunganKuPage from "./pages/TabunganKuPage";
import SimpananPelajarPage from "./pages/SimpananPelajarPage";
import GiroPeroranganPage from "./pages/GiroPeroranganPage";
import GiroSwastaPage from "./pages/GiroSwastaPage";
import GiroDinasPage from "./pages/GiroDinasPage";
import DepositoPage from "./pages/DepositoPage";

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
          <Route path={simpedaPath} element={<SimpedaPage />} />
          <Route path={tabunganKuPath} element={<TabunganKuPage />} />
          <Route path={simpananPelajarPath} element={<SimpananPelajarPage />} />
          <Route path={giroPeroranganPath} element={<GiroPeroranganPage />} />
          <Route path={giroSwastaPath} element={<GiroSwastaPage />} />
          <Route path={giroDinasPath} element={<GiroDinasPage />} />
          <Route path={depositoPath} element={<DepositoPage />} />
        </Routes>
        <Footer />
      </main>
    </div>
  );
}

export default App;
