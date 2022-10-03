import Image from "next/image";

import image from "../../../assets/ghibli.png";
import * as S from "./logo.styled";

const Logo = () => {
  return (
    <S.Wrap>
      <Image src={image} alt="logo" sizes="auto" />
    </S.Wrap>
  );
};

export default Logo;
