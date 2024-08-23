import GeneralPage from "../components/GeneralPage";
import { fetchMovies } from "../controllers/movieController";
import ItemCard from "../components/ItemCard";
const MoviesPage = ({ favList, addFavorite, removeFavorite, isInFavList }) => (

  <GeneralPage
    fetchData={fetchMovies}
    title="Popular Movies"
    renderItem={(movie) => <ItemCard  item={movie}
    type={"movie"}
    addFavorite={addFavorite}
    removeFavorite={removeFavorite}
    isInFavList={isInFavList} />}
    pageSize={10}
  />
);

export default MoviesPage;
