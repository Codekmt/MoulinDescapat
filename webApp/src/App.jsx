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

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/accomodations">Accomodations</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/volunteers">Volunteers</Link>
            </li>
            <li>  
              <Link to="/cpm">Copains Du Moulin </Link>
            </li>
          </ul>
        </nav>

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