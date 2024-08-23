import GeneralPage from "../components/GeneralPage";
import ItemCard from "../components/ItemCard";
import { Link } from "react-router-dom";

const Favorite = ({ favList, addFavorite, removeFavorite, isInFavList }) => {
  return (
    <div>
      {favList.length > 0 ? (
        <GeneralPage
          title="Your Favourites"
          fetchData={() => Promise.resolve(favList)} // Use favList as the data source
          renderItem={(movie) => (
            <ItemCard
              key={movie.id} // Ensure a unique key is provided
              item={movie}
              type={"movie"}
              addFavorite={addFavorite}
              removeFavorite={removeFavorite}
              isInFavList={isInFavList}
            />
          )}
          pageSize={10}
        />
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <div>
            <h3 style={{ color: "white", marginRight: "10px" }}>No Fav Item</h3>
          </div>
          <Link to="/" style={{ color: "red", textDecoration: "none" }}>
            Go to Home
          </Link>
        </div>
      )}
    </div>
  );
};

export default Favorite;
