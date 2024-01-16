import { HashRouter as Router, Route, Routes, HashRouter } from "react-router-dom";
import React from "react";
import "./App.css";
import Home from "./pages/home/Home";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
