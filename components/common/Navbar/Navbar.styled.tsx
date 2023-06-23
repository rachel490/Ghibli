import styled from "@emotion/styled";

export const Wrap = styled.nav`
  position: absolute;
  top: 0;
  left: 80px;
  display: flex;
  align-items: center;
  z-index: 2;
  height: 80px;

  ul {
    display: flex;
    align-items: center;
    list-style: none;
    padding: 0;

    li {
      font-size: 18px;
      color: white;
      padding: 10px 30px;
    }
  }
`;
