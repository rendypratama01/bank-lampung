import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import ProductPage from './Pages/ProductPage';
import '../src/assets/style/homePage.css';


function App () {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/product" element={<ProductPage />} />
      </Routes>
    </Router>
  )
}

export default App;
