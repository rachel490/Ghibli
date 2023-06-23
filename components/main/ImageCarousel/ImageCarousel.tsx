import Image from "next/image";
import * as S from "./imageCarousel.styled";

const ImageCarousel = () => {
  return (
    <S.Wrap>
      <Image
        src="https://www.pixelstalk.net/wp-content/uploads/images6/Ghibli-HD-Wallpaper-Free-download.jpg"
        alt="main"
        layout="fill"
      />
    </S.Wrap>
  );
};

export default ImageCarousel;
