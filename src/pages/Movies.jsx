import { useState, useEffect } from "react";
import { fetchMovies } from "../controllers/movieController";
import MovieCard from "../components/MovieCard";
import { Grid, Pagination } from "@mui/material";
const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const loadMovies = async () => {
      const data = await fetchMovies(currentPage);
      setMovies(data);
    };

    loadMovies();
  }, [currentPage]);

  return (
    <Grid
      container
      spacing={3}
      sx={{ padding: "100px" }}
      justifyContent="center"
    >
      <Grid item xs={12} sx={{ width: "100%" }}>
     
        <h1 style={{ fontSize: "2.5rem", color: "white", textAlign: "left" }}>
          Popular Movies
        </h1>
      </Grid>
      {movies.map((movie) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={movie.id}>
          <MovieCard movie={movie} />
        </Grid>
      ))}
      <Pagination
        count={10}
        page={currentPage}
        onChange={(event, value) => {
          setCurrentPage(value);
        }}
        color="primary"
        sx={{ mt: 3, display: "flex", justifyContent: "center" }}
      />
    </Grid>
  );
};

export default Movies;
