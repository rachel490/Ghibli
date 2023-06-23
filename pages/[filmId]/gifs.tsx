import { useRouter } from "next/router";
import { gql, useQuery } from "@apollo/client";
import { Grid } from "@giphy/react-components";
import { GiphyFetch } from "@giphy/js-fetch-api";
import Spinner from "../../components/common/Spinner/Spinner";
import styled from "@emotion/styled";

const gf = new GiphyFetch(`${process.env.NEXT_PUBLIC_GIPHY_API_KEY}`);

const fetchGifs = (movieTitle: string) =>
  gf.search(movieTitle, { sort: "relevant", lang: "es", limit: 50, type: "gifs" });

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

function GifsPage() {
  const {
    query: { filmId },
  } = useRouter();

  const { data, loading, error } = useQuery<IFilm>(GET_FILM, {
    variables: { filmId },
  });

  if (loading) return <Spinner />;

  if (!data) return <h1>NO GIFS</h1>;

  return (
    <Wrap>
      <Grid width={1000} columns={4} fetchGifs={() => fetchGifs(data.film.title)} />
    </Wrap>
  );
}

export default GifsPage;

const Wrap = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #2873b0;
  padding-block: 30px;
`;
