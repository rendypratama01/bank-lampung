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
  kreditAnekaUsahaPath,
  kreditKontraktorPath,
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
  kreditKiKmkPath,
  kmkKiKurPath,
  kreditResiGudangPath,
  kreditPantasPegawaiAktifPath,
  kreditPantasPensiunPath,
  kreditPantasPraPensiunPath,
  kreditSigerDewanPath,
  kreditPeroranganPath,
  kreditLinkageProgramPath,
  kmkKonstruksiDeveloperPath,
  kreditUsahaRakyatPath,
  rekeningKoranPath,
  bankGaransiPath,
} from "./routes";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import PinjamanPage from "./pages/PinjamanPage";
import LampungOnlinePage from "./pages/LampungOnlinePage";
import KreditAnekaUsahaPage from "./pages/KreditAnekaUsahaPage";
import KreditKontraktorPage from "./pages/KreditKontraktorPage";
import LampungSmartPage from "./pages/LampungSmartPage";
import QrisPage from "./pages/QrisPage";
import LampungSavingPage from "./pages/LampungSavingPage";
import SimpedaPage from "./pages/SimpedaPage";
import TabunganKuPage from "./pages/TabunganKuPage";
import SimpananPelajarPage from "./pages/SimpananPelajarPage";
import GiroPeroranganPage from "./pages/GiroPeroranganPage";
import GiroSwastaPage from "./pages/GiroSwastaPage";
import GiroDinasPage from "./pages/GiroDinasPage";
import DepositoPage from "./pages/DepositoPage";
import KreditKIKMKLainPage from "./pages/KreditKIKMKLainPage";
import KiKmkKurPage from "./pages/KiKmkKurPage";
import KreditResiGudangPage from "./pages/KreditResiGudangPage";
import KreditPegawaiAktifPage from "./pages/KreditPegawaiAktifPage";
import KreditPantasPraPensiunPage from "./pages/KreditPantasPraPensiunPage";
import KreditPantasPensiunPage from "./pages/KreditPantasPensiunPage";
import KreditSigerDewanPage from "./pages/KreditSigerDewanPage";
import KreditPeroranganPage from "./pages/KreditPeroranganPage";
import KreditLinkageProgramPage from "./pages/KreditLinkageProgramPage";
import KmkKonstruksiDeveloperPage from "./pages/KmkKonstruksiDeveloperPage";
import KreditUsahaRakyatPage from "./pages/KreditUsahaRakyatPage";
import RekeningKoranPage from "./pages/RekeningKoranPage";
import BankGaransiPage from "./pages/BankGaransiPage";
import AppHeader from "./components/AppHeader";

function App() {
  return (
    <div className="app">
      <main>
        <AppHeader />
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
          <Route
            path={kreditAnekaUsahaPath}
            element={<KreditAnekaUsahaPage />}
          />
          <Route
            path={kreditKontraktorPath}
            element={<KreditKontraktorPage />}
          />
          <Route path={kreditKiKmkPath} element={<KreditKIKMKLainPage />} />
          <Route path={kmkKiKurPath} element={<KiKmkKurPage />} />
          <Route
            path={kreditResiGudangPath}
            element={<KreditResiGudangPage />}
          />
          <Route
            path={kreditPantasPegawaiAktifPath}
            element={<KreditPegawaiAktifPage />}
          />
          <Route
            path={kreditPantasPraPensiunPath}
            element={<KreditPantasPraPensiunPage />}
          />
          <Route
            path={kreditPantasPensiunPath}
            element={<KreditPantasPensiunPage />}
          />
          <Route
            path={kreditSigerDewanPath}
            element={<KreditSigerDewanPage />}
          />
          <Route
            path={kreditPeroranganPath}
            element={<KreditPeroranganPage />}
          />
          <Route
            path={kreditLinkageProgramPath}
            element={<KreditLinkageProgramPage />}
          />
          <Route
            path={kmkKonstruksiDeveloperPath}
            element={<KmkKonstruksiDeveloperPage />}
          />
          <Route
            path={kreditUsahaRakyatPath}
            element={<KreditUsahaRakyatPage />}
          />
          <Route path={rekeningKoranPath} element={<RekeningKoranPage />} />
          <Route path={bankGaransiPath} element={<BankGaransiPage />} />
        </Routes>
        <Footer />
      </main>
    </div>
  );
}

export default App;
