import Image from "next/image";
import { useRouter } from "next/router";
import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import Spinner from "../../components/common/Spinner/Spinner";
import Navbar from "../../components/common/Navbar/Navbar";

interface IFilm {
  film: {
    id: string;
    title: string;
    original_title: string;
    original_title_romanised: string;
    image: string;
    movie_banner: string;
    description: string;
    director: string;
    producer: string;
    release_date: string;
    running_time: string;
    rt_score: string;
  };
}

const GET_FILM = gql`
  query Film($filmId: String) {
    film(id: $filmId) {
      id
      title
      original_title
      original_title_romanised
      image
      movie_banner
      description
      director
      producer
      release_date
      running_time
      rt_score
    }
  }
`;

function FilmPage() {
  const {
    query: { filmId },
  } = useRouter();
  const { data, loading, error } = useQuery<IFilm>(GET_FILM, {
    variables: { filmId },
  });

  if (loading) return <Spinner />;

  return (
    <>
      <Wrap>
        <Navbar />
        <ImageWrap>
          <Image
            layout="fill"
            src={data?.film.movie_banner || ""}
            alt="background"
            objectFit="cover"
          />
        </ImageWrap>
        <Content>
          <h1>{data?.film.title}</h1>
          <p>{data?.film.description}</p>
        </Content>
        <SideInfo>
          <div>
            <h2>RELEASED</h2>
            <p>{data?.film.release_date}</p>
          </div>
          <div>
            <h2>DIRECTOR</h2>
            <p>{data?.film.director}</p>
          </div>
          <div>
            <h2>PRODUCER</h2>
            <p>{data?.film.producer}</p>
          </div>
          <div>
            <h2>RUNNING TIME</h2>
            <p>{data?.film.running_time}</p>
          </div>
          <div>
            <h2>RATING</h2>
            <p>{data?.film.rt_score}</p>
          </div>
        </SideInfo>
      </Wrap>
    </>
  );
}

export default FilmPage;

const Wrap = styled.div`
  position: relative;
  width: 100%;
`;

const ImageWrap = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  opacity: 0.9;
  position: relative;
`;

const Content = styled.div`
  position: absolute;
  top: 100px;
  left: 100px;
  color: white;

  h1 {
    font-family: "Poppins", sans-serif;
    font-size: 48px;
    font-weight: 800;
    margin: 0;
  }

  p {
    font-family: "Poppins", sans-serif;
    max-width: 550px;
    font-size: 18px;
    font-weight: 600;
  }
`;

const SideInfo = styled.div`
  position: absolute;
  width: 300px;
  height: 100vh;
  background-color: transparent;
  border-left: 1px solid #efefef;
  top: 0;
  right: 0;
  color: #efefef;
  padding: 50px 30px;
  font-family: "Montserrat", sans-serif;

  div {
    margin-bottom: 40px;

    h2 {
      margin: 0;
      font-size: 22px;
      font-weight: 800;
      letter-spacing: 0.1rem;
    }

    p {
      margin: 0;
      margin-top: 10px;
      font-weight: 400;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu,
        Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    }
  }
`;
