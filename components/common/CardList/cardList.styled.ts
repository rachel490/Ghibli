import Link from 'next/link';
import styled from "@emotion/styled";

export const Wrap = styled.div`
  margin-top: 30px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
`;

export const CardItem = styled.a`
  width: calc((100% - 60px) / 3);
  height: 360px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  overflow: hidden;

  span {
    background-color: white;
    padding: 20px;
    display: block;
    width: 100%;
    text-align: center;
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
  }
`;

export const ImageWrap = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  img {
    object-fit: cover;
  }
`;
