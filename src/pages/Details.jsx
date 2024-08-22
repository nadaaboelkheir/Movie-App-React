import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieDetails } from "../controllers/movieController";
import { Link } from "react-router-dom";
import { Rating, Box } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
const Details = () => {
  const [details, setDetails] = useState({});
  const { id } = useParams();
  const value = (details.vote_average - 7) * 5;
  const [selectedFav, setSelectedFav] = useState(false);
  const labels = {
    0: "7.0",
    1: "7.2",
    2: "7.4",
    3: "7.6",
    4: "7.8",
    5: "8.0",
  };
  useEffect(() => {
    const loadItems = async () => {
      const data = await fetchMovieDetails(id);
      console.log(data);
      setDetails(data);
    };

    loadItems();
  }, [id]);

  return (
    <div
      className="container "
      style={{
        marginTop: "100px",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
      }}
    >
      <div
        class="card mb-3 "
        data-bs-theme="dark"
        style={{ width: "90%", backgroundColor: "#121212", border: 0 }}
      >
        <div class="row g-0">
          <div class="col-md-4">
            <img
              src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`}
              class="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">{details.title}</h5>
              <p class="card-text">{details.overview}</p>
              <p class="card-text">
                <small class="text-body-secondary">
                  {details.original_language}-{details.origin_country}
                </small>
              </p>
              <p class="card-text">
                <small class="text-body-secondary">
                  {details.release_date}
                </small>
              </p>
              {details.genres &&
                details.genres.map((genre, index) => (
                  <span
                    key={index}
                    className="badge rounded-pill text-bg-danger "
                  >
                    {genre.name}
                  </span>
                ))}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "10px",
                }}
              >
                <Rating
                  name="text-feedback"
                  value={value}
                  readOnly
                  precision={0.5}
                  emptyIcon={
                    <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                  }
                />
                <Box sx={{ ml: 2 }}>
                  {labels[Math.round(value)] || details.vote_average}
                </Box>
                <span className="badge rounded-pill  text-bg-success ">
                  {details.vote_count}
                </span>
              </div>
              <button type="button" class="btn btn-danger">
                {" "}
                <Link to={details.homepage}>homepage of movie</Link>
              </button>
              {details.production_companies &&
                details.production_companies.map((company, index) =>
                  company.logo_path ? (
                    <img
                      key={index}
                      src={`https://image.tmdb.org/t/p/w500/${company.logo_path}`}
                      alt={`Logo of ${company.name}`}
                      style={{
                        width: "100px",
                        height: "100px",
                        margin: "10px",
                      }}
                    />
                  ) : null
                )}
              {selectedFav ? (
                <FavoriteIcon
                  onClick={() => setSelectedFav(!selectedFav)}
                  style={{ color: "red" }}
                />
              ) : (
                <FavoriteBorderIcon
                  onClick={() => setSelectedFav(!selectedFav)}
                  style={{ color: "white" }}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Details;
