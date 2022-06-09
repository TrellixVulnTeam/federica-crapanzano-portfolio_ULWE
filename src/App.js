import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Template
import Header from "./template/Header/Header";
// Pages
import Homepage from "./pages/Homepage/Homepage";

// Utils
import logo from "./logo.svg";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          {/* <Route path="*" element={<NotFound/>}/> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
