const API_KEY="dc02b23f57e6a6a64433d339dd4d76fa";

const VARIABLES = `?api_key=${API_KEY}&language=en-US&page=1&append_to_response=videos`;
const BASE_URL = "https://api.themoviedb.org/3/";

const POPULAR_MOVIES = "movie/popular";
const TOP_RATED = "movie/top_rated";
const UPCOMING = "movie/upcoming"

export {
  VARIABLES,
  BASE_URL,
  POPULAR_MOVIES,
  TOP_RATED,
  UPCOMING
}