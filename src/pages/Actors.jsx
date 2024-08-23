import GeneralPage from "../components/GeneralPage";
import { fetchActors } from "../controllers/movieController";
import ItemCard from "../components/ItemCard";

const ActorsPage = () => (
  <GeneralPage
    fetchData={fetchActors}
    title="Popular Actoes"
    renderItem={(actor) => <ItemCard item={actor} type={"actor"} />}
    pageSize={10}
  />
);

export default ActorsPage;
