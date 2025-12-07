import { useRef, useState } from "react";
import styled from "styled-components";


const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-contnet: center;
  position: rlative;
  z-index: 1;
  align-items: center;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
// const Title = styled.div`
//   font-size: 52px;
//   text-align: center;
//   font-weight: 600;
//   margin-top: 20px;
//   color: ${({ theme }) => theme.text_primary};
//   @media (max-width: 768px) {
//     margin-top: 12px;
//     font-size: 32px;
//   }
// `;
const Desc = styled.div`
  font-size: 12px;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const Music = () => {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const toggleMusic = () => {
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlaying(!playing);
  };

  return (
    <Container id="Music">
      <Wrapper>
         <Desc>
          Bạn muốn nghe nhạc hãy nhấp vào đây!
        </Desc>
     <div className="fixed bottom-5 right-5">
      <button
        onClick={toggleMusic}
        className="px-2 py-2 bg-black/70 text-white rounded-xl"
      >
        {playing ? "🔊 Tắt nhạc" : "🎵 Bật nhạc"}
      </button>

      <audio
        ref={audioRef}
        src="/music/Em Không Khóc.mp3"
        preload="auto"
        loop
      />
    </div>

</Wrapper>
    </Container>
  );
};

export default Music;