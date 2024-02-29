// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useLocation } from "react-router";
// import Discover from './components/pages/Discover';
import About from "./components/Pages/About";
// import Search from './components/pages/Search';
import NavbarEl from "./components/Navbar";
// import Footer from './components/Footer';
import FooterEl from "./components/Footer";
//import Home from '.components/Home/Home
import Home from "./components/pages/Home";
//import Contact from "./components/pages/ContactMe"
import Contact from "./components/pages/ContactMe";
import "./fonts/font.css"


function App() {
  return (
    <Router>
      <NavbarEl />

      <Routes>
        <Route path="/" element={<About className="about-container" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        
      </Routes>
      <FooterEl />
    </Router>
  );
}
export default App;

// Create a separate component for routing
const RouteHandler = () => {
  const location = useLocation();

  // Render the Home component only if the current path is the root path ("/")
  if (location.pathname === "/") {
    return <Home />;
  } else {
    return null;
  }
};
