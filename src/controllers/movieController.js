import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

const fetchData = async (path, page) => {
  try {
    const url = page
      ? `${BASE_URL}${path}?api_key=${API_KEY}&page=${page}`
      : `${BASE_URL}${path}?api_key=${API_KEY}`;

    const response = await axios.get(url);
console.log(response.data)
    return page ? response.data.results : response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const fetchMovies = async (page = 1) =>
  await fetchData("/movie/popular", page);

export const fetchMovieDetails = async (id) => await fetchData(`/movie/${id}`);

export const fetchActors = async (page = 1) => await fetchData("/person/popular",page);

export const fetchTVShow = async (page = 1) =>
  await fetchData("/tv/popular", page);

export const fetchSeries = async (page = 1) =>
  await fetchData("/tv/top_rated", page);
