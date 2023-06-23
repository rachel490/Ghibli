import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import Spinner from "../../components/common/Spinner/Spinner";

interface IObj {
  [key: string]: string;
}

const BASE_IMAGE_URL = "https://www.ghibli.jp/gallery/";

const FILM_IMAGE_NAME: IObj = {
  "Castle in the Sky": "laputa",
  "Grave of the Fireflies": "",
  "My Neighbor Totoro": "totoro",
  "Kiki's Delivery Service": "majo",
  "Only Yesterday": "thumb-omoide",
  "Porco Rosso": "porco",
  "Pom Poko": "tanuki",
  "Whisper of the Heart": "mimi",
  "Princess Mononoke": "mononoke",
  "My Neighbors the Yamadas": "yamada",
  "Spirited Away": "chihiro",
  "The Cat Returns": "baron",
  "Howl's Moving Castle": "howl",
  "Tales from Earthsea": "ged",
  Ponyo: "ponyo",
  Arrietty: "karigurashi",
  "From Up on Poppy Hill": "kokurikozaka",
  "The Wind Rises": "kazetachinu",
  "The Tale of the Princess Kaguya": "kaguyahime",
  "When Marnie Was There": "marnie",
  "The Red Turtle": "redturtle",
  "Earwig and the Witch": "",
};

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

function GalleryPage() {
  const {
    query: { filmId },
  } = useRouter();
  const [imageId, setImageId] = useState(50);

  const { data, loading, error } = useQuery<IFilm>(GET_FILM, {
    variables: { filmId },
  });

  if (loading) return <Spinner />;

  const handlePrevImage = () => {
    setImageId(prev => prev - 1);
  };

  const handleNextImage = () => {
    setImageId(prev => prev + 1);
  };

  if (!data?.film.title) return "";
  const film = FILM_IMAGE_NAME[data?.film.title];

  const generateImageURL = () => {
    const num = String(imageId).padStart(3, "0");
    const imageUrl = `${BASE_IMAGE_URL}${film}${num}.jpg`;

    return imageUrl;
  };

  return (
    <Wrap>
      {!film ? (
        <h1>NO IMAGES</h1>
      ) : (
        <>
          <button className="prev" onClick={handlePrevImage} disabled={imageId <= 1}>
            PREV
          </button>
          <Image src={generateImageURL()} alt="film" layout="fill" objectFit="cover" />
          <button className="next" onClick={handleNextImage} disabled={imageId >= 50}>
            NEXT
          </button>
        </>
      )}
    </Wrap>
  );
}

export default GalleryPage;

const Wrap = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: white;
    border: none;
    padding: 20px;
    border-radius: 50%;
    aspect-ratio: 1/1;
    cursor: pointer;
    font-weight: bold;

    &.prev {
      left: 20px;
      z-index: 2;
    }

    &.next {
      right: 20px;
    }

    &:hover {
      background-color: #2873b0;
      color: white;
    }

    &:disabled {
      cursor: not-allowed;
    }
  }
`;
