import Logo from "../Logo/Logo";
import * as S from "./layout.styled";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <S.Wrap>
      <Logo />
      <S.ContentWrap>{children}</S.ContentWrap>
    </S.Wrap>
  );
};

export default Layout;
