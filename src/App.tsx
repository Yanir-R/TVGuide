import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { ShowSearchResults } from "./pages/ShowSearchResult";
import { Main } from "./pages/Main";
import { ShowDetails } from "./pages/ShowDetails";

export const App: React.FC<any> = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path={`/`} element={<Main />} />
        <Route path="/show-details/:id" element={<ShowDetails />} />
        <Route path="/search-results/:search" element={<ShowSearchResults />} />
      </Routes>
    </Router>
  );
};

export default App;
