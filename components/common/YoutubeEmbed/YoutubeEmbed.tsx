import styled from "@emotion/styled";

interface IProps {
  embedId: number;
}

function YoutubeEmbed({ embedId }: IProps) {
  return (
    <VideoWrap className="video-responsive">
      <iframe
        src={`https://www.youtube.com/embed/${embedId}?autoplay=1&mute=1`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </VideoWrap>
  );
}

export default YoutubeEmbed;

const VideoWrap = styled.div`
  width: 100%;
  height: 100vh;
  border: none;

  iframe {
    width: 100%;
    height: 100vh;
    border: none;
  }
`;
