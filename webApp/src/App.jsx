import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Accomodations from "./components/Accomodations";
import Contact from "./components/Contact";
import Volunteers from "./components/Volunteers";
import CopainsDuMoulin from "./components/Friends";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <div>
        <Header>
    
        </Header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/accomodations" element={<Accomodations />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/volunteers" element={<Volunteers />} />
          <Route path="/cpm" element={<CopainsDuMoulin />} />
          {/* Add more routes as needed */}
          <Route path="*" element={<h2>404 Not Found</h2>} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;