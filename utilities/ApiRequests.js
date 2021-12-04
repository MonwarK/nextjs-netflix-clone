const API_KEY="dc02b23f57e6a6a64433d339dd4d76fa";

const VARIABLES = `?api_key=${API_KEY}&language=en-US&page=1&append_to_response=videos`;
const BASE_URL = "https://api.themoviedb.org/3/";

const TRENDING = `/trending/all/week?api_key=${API_KEY}&language=en-US`
const POPULAR_MOVIES = "movie/popular";
const TOP_RATED = "movie/top_rated";
const UPCOMING = "movie/upcoming";
const ACTION_MOVIES = `discover/movie?api_key=${API_KEY}&with_genres=28`;
const COMEDY_MOVIES = `discover/movie?api_key=${API_KEY}&with_genres=35`;
const HORROR_MOVIES = `discover/movie?api_key=${API_KEY}&with_genres=27`;
const SEARCH = `search/multi?api_key=${API_KEY}&language=en-US&page=1&include_adult=false`

export {
  VARIABLES,
  BASE_URL,
  TRENDING,
  POPULAR_MOVIES,
  TOP_RATED,
  UPCOMING,
  ACTION_MOVIES,
  COMEDY_MOVIES,
  HORROR_MOVIES,
  SEARCH
}