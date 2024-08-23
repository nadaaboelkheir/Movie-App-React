import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
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
      const data = await fetchMovieDetails(id);
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
    <div className="container my-5" >
      <div
        className="card mb-3"
        style={{ backgroundColor: "#121212", color: "#fff",marginTop: "60px"  }}
      >
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`}
              className="img-fluid rounded-start"
              alt={details.title}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h3 className="card-title">{details.title}</h3>
              <p className="card-text">{details.overview}</p>
              <p className="card-text">
                
                  {details.original_language} - {details.origin_country}
                
              </p>
              <p className="card-text">
                {details.release_date}
              </p>
              <div className="d-flex align-items-center mb-3">
                <Rating
                  name="text-feedback"
                  value={value}
                  readOnly
                  precision={0.5}
                  emptyIcon={
                    <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                  }
                />
                <span className="ms-2">
                  {labels[Math.round(value)] || details.vote_average}
                </span>
                <span className="badge bg-info ms-2">
                  {details.vote_count}
                </span>
              </div>
              {details.genres &&
                details.genres.map((genre, index) => (
                  <span key={index} className="badge bg-success me-1">
                    {genre.name}
                  </span>
                ))}
             
             
              <div className="mb-3 mt-3">
                {details.production_companies &&
                  details.production_companies.map((company, index) =>
                    company.logo_path ? (
                      <img
                        key={index}
                        src={`https://image.tmdb.org/t/p/w500/${company.logo_path}`}
                        alt={`Logo of ${company.name}`}
                        className="img-fluid me-3"
                        style={{
                          width: "100px",
                          height: "100px",
                          marginRight: "10px",
                          borderRadius: "5px",
                          border : "1px solid white"
                        }}
                      />
                    ) : null
                  )}
              </div>
              <div className="d-flex align-items-center ">
                <button
                  type="button"
                  className="btn btn-outline-danger mt-3 me-3"
                  onClick={handleFavoriteClick}
                >
                  {isFav ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                </button>
                <a
                href={details.homepage}
                className="btn btn-danger  mt-3"
                target="_blank"
                rel="noopener noreferrer"
              >
                Homepage of Movie
              </a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
