import Image from "next/image";
import * as S from "./cardList.styled";

import { gql, useQuery } from "@apollo/client";
import Link from "next/link";
import Spinner from "../Spinner/Spinner";

interface IFilmList {
  films: {
    id: string;
    image: string;
    title: string;
  }[];
}

const GET_FILM_LIST = gql`
  query GetFilms {
    films {
      id
      image
      title
    }
  }
`;

const CardList = () => {
  const { data, loading, error } = useQuery<IFilmList>(GET_FILM_LIST);

  if (loading) return <Spinner />;

  return (
    <S.Wrap>
      {data?.films.map(item => (
        <Link key={item.id} href={`/${item.id}`}>
          <S.CardItem>
            <S.ImageWrap>
              <Image src={item.image} alt="image" layout="fill" />
            </S.ImageWrap>
            <span>{item.title}</span>
          </S.CardItem>
        </Link>
      ))}
    </S.Wrap>
  );
};

export default CardList;
