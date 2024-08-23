import GeneralPage from "../components/GeneralPage";
import { fetchTVShow } from "../controllers/movieController";
import ItemCard from "../components/ItemCard";

const TvShowsPage = () => (
  <GeneralPage
    fetchData={fetchTVShow}
    title="Popular TvShow"
    renderItem={(show) => <ItemCard item={show} type={"tvshow"} />}
    pageSize={10}
  />
);

export default TvShowsPage;
