import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Search from "../components/Search";
import Movies from "../pages/Movies";
import Navbars from "../components/Navbar";
const AppRouter = () => {
  return (
    <Router>
      <Navbars />
     <Search />
      <Routes>
        <Route index element={<Movies />} />
        <Route path="actors" element={<div>actors</div>} />

        <Route path="tvshows" element={<div>tvshows</div>} />
        <Route path="series" element={<div>series</div>} />
        <Route path="*" element={<div>404</div>} />

      </Routes>
    </Router>
  );
};
export default AppRouter;
