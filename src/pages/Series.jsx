import GeneralPage from "../components/GeneralPage";
import { fetchSeries } from "../controllers/movieController";
import ItemCard from "../components/ItemCard";

const SeriesPage = () => (
  <GeneralPage
    fetchData={fetchSeries}
    title="Popular Series"
    renderItem={(series) => <ItemCard item={series} type={"series"} />}
    pageSize={10}
  />
);

export default SeriesPage;
