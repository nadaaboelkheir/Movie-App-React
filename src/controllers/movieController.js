import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const API_KEY = process.env.REACT_APP_API_KEY;
const fetchData = async (path, page = 1) => {
  try {
    const url = `${BASE_URL}${path}?api_key=${API_KEY}&page=${page}`;
    const response = await axios.get(url);
    console.log(response.data.results);
    return response.data.results;
  } catch (error) {
    throw new Error(error);
  }
};
export const fetchMovies = async (page=1) => await fetchData("/movie/popular",page);
export const fetchMovieDetails = async (movieId) =>
  await fetchData(`/movie/${movieId}`);
export const fetchActors = async () => await fetchData("/person/popular");
export const fetchTVShow = async () => await fetchData("/tv/popular");
export const fetchSeries = async () => await fetchData("/tv/top_rated");
