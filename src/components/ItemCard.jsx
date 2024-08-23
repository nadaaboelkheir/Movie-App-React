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

const ItemCard = ({ item ,  type,addFavorite, removeFavorite, isInFavList  }) => {
  const value = (item.vote_average - 7) * 5;
  const labels = {
    0: "7.0",
    1: "7.2",
    2: "7.4",
    3: "7.6",
    4: "7.8",
    5: "8.0",
  };

  const handleFavoriteClick = () => {
    if (isInFavList(item.id)) {
      removeFavorite(item.id);
    } else {
      addFavorite(item);
    }
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
          style={{ objectFit: "cover" }}
          image={`https://image.tmdb.org/t/p/w500/${
            item.poster_path || item.profile_path
          }`}
          alt={item.title}
        />

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.name || item.title}
          </Typography>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            {value ? (
              <Rating
                name="text-feedback"
                value={value}
                readOnly
                precision={0.5}
                emptyIcon={
                  <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                }
              />
            ) : (
              ""
            )}
            <Box sx={{ ml: 2 }}>
              {labels[Math.round(value)] || item.vote_average}
            </Box>
          </div>
          <Typography variant="body1" color="text.secondary">
            {item.release_date || item.first_air_date}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ justifyContent: "space-between", padding: "15px" }}>
        <Button size="small" color="primary" href={`/details/${item.id}`}>
          Details
        </Button>
        {type === 'movie' && (
          <div>
            {isInFavList(item.id) ? (
              <FavoriteIcon onClick={handleFavoriteClick} style={{ color: "red", cursor: "pointer" }} />
            ) : (
              <FavoriteBorderIcon onClick={handleFavoriteClick} style={{ cursor: "pointer" }} />
            )}
          </div>
        )}
      </CardActions>
    </Card>
  );
};

export default ItemCard;
