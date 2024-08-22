import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Search from "../components/Search";
import MoviesPage from "../pages/Movies";
import SeriesPage from "../pages/Series";
import TvShowsPage from "../pages/TvShows";
import Navbars from "../components/Navbar";
import Details from "../pages/Details";
const AppRouter = () => {
  return (
    <Router>
      <Navbars />
      <Routes>
        <Route index element={<MoviesPage />} />
        <Route path="details/:id" element={<Details />} />
        <Route path="actors" element={<div>actors</div>} />
        <Route path="tvshows" element={<TvShowsPage />} />
        <Route path="series" element={<SeriesPage />} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </Router>
  );
};
export default AppRouter;
