import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './index.css'; 
import Home from "./pages/Home";
import Vision from "./pages/Vision";
import Accommodations from "./pages/Accommodations";
import Contact from "./pages/Contact";
import Volunteers from "./pages/Volunteers";
import CopainsDuMoulin from "./pages/Friends";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Association from "./pages/Association";
import SeasonalWrapper from "./components/SeasonalWrapper";

function App() {
  return (
    <Router>
        <Header />     
        <SeasonalWrapper>
        <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/association" element={<Association />} />
          <Route path="/about" element={<Vision />} />
          <Route path="/accomodations" element={<Accommodations />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/volunteers" element={<Volunteers />} />
          <Route path="/cpm" element={<CopainsDuMoulin />} />
          <Route path="*" element={<h2>404 Not Found</h2>} />
        </Routes>
         </div>
         </SeasonalWrapper>
        <Footer />
    </Router>
  );
}


export default App;