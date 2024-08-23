import React from "react";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import MoviesPage from "../pages/Movies";
import SeriesPage from "../pages/Series";
import TvShowsPage from "../pages/TvShows";
import Navbars from "../components/Navbar";
import Details from "../pages/Details";
import ActorsPage from "../pages/Actors";
import NotFound from "../pages/NotFound";
import Favourite from "../pages/Favourite";

const AppRouter = () => {
  const [favList, setFavList] = useState([]); // Favorite list

  const addFavorite = (item) => {
    setFavList((prevFavList) => [...prevFavList, item]);
  };

  const removeFavorite = (id) => {
    setFavList((prevFavList) =>
      prevFavList.filter((favItem) => favItem.id !== id)
    );
  };

  const isInFavList = (id) => {
    return favList.some((favItem) => favItem.id === id);
  };
  const LayoutWithNavbar = () => (
    <>
      <Navbars favCount={favList.length} />
      <Outlet /> {/* Render the nested route content here */}
    </>
  );
  return (
    <Router>
      <Routes>
        <Route element={<LayoutWithNavbar />}>
          <Route
            index
            element={
              <MoviesPage
                favList={favList}
                addFavorite={addFavorite}
                removeFavorite={removeFavorite}
                isInFavList={isInFavList}
              />
            }
          />
          <Route
            path="details/:id"
            element={
              <Details
                favList={favList}
                addFavorite={addFavorite}
                removeFavorite={removeFavorite}
                isInFavList={isInFavList}
              />
            }
          />
          <Route path="actors" element={<ActorsPage />} />
          <Route path="tvshows" element={<TvShowsPage />} />
          <Route path="series" element={<SeriesPage />} />
          <Route
            path="favourite"
            element={
              <Favourite
                favList={favList}
                addFavorite={addFavorite}
                removeFavorite={removeFavorite}
                isInFavList={isInFavList}
              />
            }
          />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
