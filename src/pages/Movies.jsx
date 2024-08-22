import GeneralPage from "../components/GeneralPage";
import { fetchMovies } from "../controllers/movieController";
import ItemCard from "../components/ItemCard";
const MoviesPage = () => (

  <GeneralPage
    fetchData={fetchMovies}
    title="Popular Movies"
    renderItem={(movie) => <ItemCard item={movie} />}
    pageSize={10}
  />
);

export default MoviesPage;
