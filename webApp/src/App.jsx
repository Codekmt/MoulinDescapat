import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './index.css'; 
import Home from "./pages/Home";
import About from "./pages/Vision";
import Accomodations from "./pages/Accomodations";
import Contact from "./pages/Contact";
import Volunteers from "./pages/Volunteers";
import CopainsDuMoulin from "./pages/Friends";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Association from "./pages/Association";

function App() {
  return (
    <Router>
        <Header>     
        </Header>
        <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/association" element={<Association />} />
          <Route path="/about" element={<About />} />
          <Route path="/accomodations" element={<Accomodations />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/volunteers" element={<Volunteers />} />
          <Route path="/cpm" element={<CopainsDuMoulin />} />
          <Route path="*" element={<h2>404 Not Found</h2>} />
        </Routes>
         </div>
        <Footer />
    </Router>
  );
}


export default App;