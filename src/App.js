import React from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Country from "./components/Country";
import Home from "./components/Home";
function App() {
  return ( 
  <Router>
    <Routes>
      <Route exact path="/" element={<Home />} > </Route>
      <Route path="/countries/:name" element={<Country />} > </Route>
    </Routes>
  </Router>);
}

export default App;
