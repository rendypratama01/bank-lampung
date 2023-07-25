import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProductPage from "./pages/ProductPage";
import "../src/styles/style.css";
import { aboutPath, homePath, productPath, rootPath } from "./routes";
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
          <Route path={productPath} element={<ProductPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
