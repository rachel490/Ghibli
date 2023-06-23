import { useRouter } from "next/router";
import YoutubeEmbed from "../../components/common/YoutubeEmbed/YoutubeEmbed";
import { gql, useQuery } from "@apollo/client";
import Spinner from "../../components/common/Spinner/Spinner";
import { useEffect, useState } from "react";
import { TMDB_API_URI, tmdbApi } from "../../api/tmdb";

interface IFilm {
  film: {
    id: string;
    title: string;
  };
}

const GET_FILM = gql`
  query Film($filmId: String) {
    film(id: $filmId) {
      id
      title
    }
  }
`;

function TrailerPage() {
  const {
    query: { filmId },
  } = useRouter();

  const [movieId, setMovieId] = useState<number | null>(null);
  const [youtubeId, setYoutubeId] = useState<number | null>(null);

  const { data, loading, error } = useQuery<IFilm>(GET_FILM, {
    variables: { filmId },
  });

  useEffect(() => {
    if (!data) return;

    const fetchMovieInfo = async (title: string) => {
      const { data } = await tmdbApi.get(TMDB_API_URI.movie(title));
      const movieId = data.results[0].id;

      setMovieId(movieId);
    };

    fetchMovieInfo(data.film.title);
  }, [data]);

  useEffect(() => {
    if (!movieId || !data) return;

    const fetchYoutubeId = async (movieId: number) => {
      const { data } = await tmdbApi.get(TMDB_API_URI.video(movieId));
      const youtubeId = data.results.filter((video: any) => video.type === "Trailer")[0].key;
      
      setYoutubeId(youtubeId);
    };

    fetchYoutubeId(movieId);
  }, [movieId, data]);

  if (loading || !youtubeId) return <Spinner />;

  return <YoutubeEmbed embedId={youtubeId} />;
}

export default TrailerPage;
