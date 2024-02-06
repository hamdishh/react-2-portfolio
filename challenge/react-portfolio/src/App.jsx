// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useLocation } from 'react-router';
// import Discover from './components/pages/Discover';
import About from "./components/pages/About";
// import Search from './components/pages/Search';
import NavbarEl from "./components/Navbar";
// import Footer from './components/Footer';
import FooterEl from "./components/Footer";
//import Home from '.components/Home/Home
import Home from './components/Home/Home';

function App() {
  return (
    <Router>
      <div>
        <NavbarEl />

        <Routes>
        <Route path="/about" element={<About />} />
           {/* Define separate routes for Home and About */}
           <Route path="/" element={<Home />} />
          {/* <Route path="/portfolio" element={<Discover/>} />
            <Route path="/contact" element={<Search/>} /> */}
        </Routes>

        {/* <Footer /> */}
      </div>
    </Router>
  );
}
export default App;

// Create a separate component for routing
const RouteHandler = () => {
  const location = useLocation();
  
  // Render the Home component only if the current path is the root path ("/")
  if (location.pathname === '/') {
    return <Home />;
  } else {
    return null;
  }
};

