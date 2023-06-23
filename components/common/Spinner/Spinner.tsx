import Image from "next/image";
import * as S from "./Spinner.styled";

function Spinner() {
  return (
    <S.Wrap>
      <Image src="/loading.gif" width="100%" height="100%" alt="loading" />
    </S.Wrap>
  );
}

export default Spinner;
