import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Box from "@mui/material/Box";
import { fetchMovieDetails } from "../controllers/movieController";
const Details = ({ favList, addFavorite, removeFavorite, isInFavList }) => {
  const [details, setDetails] = useState({});
  const [isFav, setIsFav] = useState(false);
  const { id } = useParams();
  const value = (details.vote_average - 7) * 5;
  const labels = {
    0: "7.0",
    1: "7.2",
    2: "7.4",
    3: "7.6",
    4: "7.8",
    5: "8.0",
  };

  useEffect(() => {
    const loadDetails = async () => {
      const data = await fetchMovieDetails(id); // Assume this function fetches movie details by ID
      setDetails(data);
      setIsFav(isInFavList(data.id));
    };

    loadDetails();
  }, [id, favList, isInFavList]);

  const handleFavoriteClick = () => {
    if (isFav) {
      removeFavorite(details.id);
    } else {
      addFavorite(details);
    }
    setIsFav(!isFav);
  };

  return (
    <div className="container" style={{ marginTop: "100px", alignItems: "center", justifyContent: "center", display: "flex" }}>
      <div className="card mb-3" data-bs-theme="dark" style={{ width: "90%", backgroundColor: "#121212", border: 0 }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`}
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{details.title}</h5>
              <p className="card-text">{details.overview}</p>
              <p className="card-text">
                <small className="text-body-secondary">
                  {details.original_language}-{details.origin_country}
                </small>
              </p>
              <p className="card-text">
                <small className="text-body-secondary">
                  {details.release_date}
                </small>
              </p>
              {details.genres &&
                details.genres.map((genre, index) => (
                  <span key={index} className="badge rounded-pill text-bg-danger">
                    {genre.name}
                  </span>
                ))}
              <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
                <Rating
                  name="text-feedback"
                  value={value}
                  readOnly
                  precision={0.5}
                  emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                />
                <Box sx={{ ml: 2 }}>
                  {labels[Math.round(value)] || details.vote_average}
                </Box>
                <span className="badge rounded-pill text-bg-success">
                  {details.vote_count}
                </span>
              </div>
              <button type="button" className="btn btn-danger">
                <Link to={details.homepage}>Homepage of Movie</Link>
              </button>
              {details.production_companies &&
                details.production_companies.map((company, index) =>
                  company.logo_path ? (
                    <img
                      key={index}
                      src={`https://image.tmdb.org/t/p/w500/${company.logo_path}`}
                      alt={`Logo of ${company.name}`}
                      style={{ width: "100px", height: "100px", margin: "10px" }}
                    />
                  ) : null
                )}
              <div style={{ display: "flex", alignItems: "center", marginTop: "10px" }}>
                {isFav ? (
                  <FavoriteIcon
                    onClick={handleFavoriteClick}
                    style={{ color: "red", cursor: "pointer" }}
                  />
                ) : (
                  <FavoriteBorderIcon
                    onClick={handleFavoriteClick}
                    style={{ cursor: "pointer" }}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
