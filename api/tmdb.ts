import axios from "axios";

const TMDB_BASE_URL = "https://api.themoviedb.org/3";

export const TMDB_API_URI = {
  movie: (query: string) =>
    `/search/movie?query=${query}&api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`,
  video: (movieId: number) =>
    `movie/${movieId}/videos?&api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`,
};

export const tmdbApi = axios.create({
  baseURL: TMDB_BASE_URL,
  timeout: 1000,
});
