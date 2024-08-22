import { useState, useEffect } from "react";
import { Grid, Pagination } from "@mui/material";
import Search from "../components/Search";
const GeneralPage = ({
  fetchData,
  title = "Items",
  renderItem,
  pageSize = 10,
}) => {
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const loadItems = async () => {
      const data = await fetchData(currentPage);
      setItems(data);
    };

    loadItems();
  }, [currentPage, fetchData]);

  return (
    <Grid
      container
      justifyContent="center"
    >
      <Search/>
    <Grid
      container
      spacing={3}
      sx={{ padding: "100px" }}
      justifyContent="center"
    >
      
      <Grid item xs={12} sx={{ width: "100%" }}>
        <h1 style={{ fontSize: "2.5rem", color: "white", textAlign: "left" }}>
          {title}
        </h1>
      </Grid>

      {items.map((item) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
          {renderItem(item)}
        </Grid>
      ))}

      <Pagination
        count={pageSize}
        page={currentPage}
        onChange={(event, value) => {
          setCurrentPage(value);
        }}
        color="primary"
        sx={{ mt: 3, display: "flex", justifyContent: "center" }}
      />
    </Grid>
    </Grid>
  );
};

export default GeneralPage;
