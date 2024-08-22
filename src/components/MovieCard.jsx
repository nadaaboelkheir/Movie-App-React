import { useState } from "react";
import {
  CardContent,
  CardMedia,
  Typography,
  Card,
  Button,
  CardActionArea,
  CardActions,
  Rating,
  Box,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
const MovieCard = ({ movie }) => {
  const value = (movie.vote_average - 7) * 5;
  const [selectedFav, setSelectedFav] = useState(false);
  const labels = {
    0: "7.0",
    1: "7.2",
    2: "7.4",
    3: "7.6",
    4: "7.8",
    5: "8.0",
  };
  return (
    <Card
      sx={{
        maxWidth: 345,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        borderRadius: "20px",
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          style={{ objectFit: "cover" }}  // Correct objectFit value
          image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
        />

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {movie.title}
          </Typography>
         
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
            <Box sx={{ ml: 2 }}>{labels[Math.round(value)]}</Box>
          </div>
          <Typography variant="body1" color="text.secondary">
            {movie.release_date}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ justifyContent: "space-between", padding: "15px" }}>
        <Button size="small" color="primary" href={`/movie/${movie.id}`}>
          Details
        </Button>
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
      </CardActions>
    </Card>
  );
};
export default MovieCard;
