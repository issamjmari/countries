import React from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Country from "./components/Country";
import Home from "./components/Home";
import Header from "./components/header";
function App() {
  return ( 
  <Router>
    <Header />
    <Routes>
      <Route exact path="/" element={<Home />} > </Route>
      <Route path="/countries/:countryName" element={<Country />} > </Route>
    </Routes>
  </Router>
  );
}

export default App;
