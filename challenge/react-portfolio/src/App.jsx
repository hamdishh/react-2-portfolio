import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Discover from './components/pages/Discover';
import About from "./components/pages/About";
// import Search from './components/pages/Search';
import NavbarEl from "./components/Navbar";
// import Footer from './components/Footer';
import FooterEl from "./components/Footer";

function App() {
  return (
    <Router>
      <div>
        <NavbarEl />

        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/portfolio" element={<Discover/>} />
            <Route path="/contact" element={<Search/>} /> */}
        </Routes>

        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
