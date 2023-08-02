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
} from "./routes";
import { Route, Routes } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import PinjamanPage from "./pages/PinjamanPage";

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
        </Routes>
        <Footer />
      </main>
    </div>
  );
}

export default App;
