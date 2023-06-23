import Link from "next/link";
import { useRouter } from "next/router";
import * as S from "./Navbar.styled";

function Navbar() {
  const {
    asPath: currentPath,
    query: { filmId },
  } = useRouter();

  return (
    <S.Wrap>
      <ul>
        <li>
          <Link href={`/${filmId}`}>ABOUT</Link>
        </li>
        <li>
          <Link href={`${currentPath}/trailer`}>TRAILER</Link>
        </li>
        <li>
          <Link href={`${currentPath}/gallery`}>GALLERY</Link>
        </li>
        <li>
          <Link href={`${currentPath}/gifs`}>GIFS</Link>
        </li>
      </ul>
    </S.Wrap>
  );
}

export default Navbar;
