import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import LayananPage from "./pages/LayananPage";
import ContactPage from "./pages/ContactPage";
import "../src/styles/style.css";
import {
  aboutPath,
  homePath,
  contactPath,
  rootPath,
  servicePath,
} from "./routes";
import { Route, Routes } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";

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
          <Route path={servicePath} element={<LayananPage />} />
          <Route path={contactPath} element={<ContactPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
