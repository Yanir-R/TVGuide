import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Main } from "./pages/Main";
import { ShowDetails } from "./pages/ShowDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/show-details/:id" element={<ShowDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
