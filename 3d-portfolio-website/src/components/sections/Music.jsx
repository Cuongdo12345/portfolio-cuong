import { useRef, useState } from "react";
import styled from "styled-components";
import { songs } from "../../data/constants";


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

const SongTitle = styled.div`
  font-size: 9px;
  color: #b3b3b3;
  font-weight: 600;
  margin-top: 4px;
`;

const StyledSelect = styled.select`
  font-size: 9px;
  font-weight: 500;
  padding: 8px 10px;
  width: 200px;
  border-radius: 10px;

  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(8px);

  color: #fff;
  cursor: pointer;
  outline: none;
  appearance: none;

  /* Icon mũi tên đẹp */
  background-image: url("data:image/svg+xml;utf8,<svg fill='white' height='12' viewBox='0 0 20 20' width='12' xmlns='http://www.w3.org/2000/svg'><polygon points='0,0 20,0 10,12' /></svg>");
  background-repeat: no-repeat;
  background-position: right 10px center;

  transition: all 0.25s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.15);
    border-color: rgba(255, 255, 255, 0.25);
  }

  &:focus {
    background: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.35);
  }

  option {
    background: #121212;
    color: white;
    font-size: 9px;
  }
`;

const Music = () => {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [selectedSong, setSelectedSong] = useState(songs[0]);

  // Bật / Tắt nhạc
  const toggleMusic = () => {
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlaying(!playing);
  };

  // Khi chọn bài nhạc khác
  const changeSong = (e) => {
    const newSong = songs.find((s) => s.src === e.target.value);
    setSelectedSong(newSong);

    // Đổi src rồi play lại bài mới
    audioRef.current.pause();
    audioRef.current.load();
    audioRef.current.play();
    setPlaying(true);
  };

  return (
    <Container id="Music">
      <Wrapper>
         <Desc>
          Bạn muốn nghe nhạc hãy nhấp vào đây!
        </Desc>
    
    {/* PLAYER UI */}
       <div className="
            fixed bottom-5 right-5
            p-2 rounded-xl
            bg-white/10 backdrop-blur-2xl
            border border-white/20
            shadow-[0_8px_25px_rgba(0,0,0,0.4)]
            flex flex-col gap-3
            w-[120px]
            transition-all duration-300
            hover:scale-[1.02]
        ">

          {/* Dropdown chọn bài */}
          <StyledSelect value={selectedSong.src} onChange={changeSong}>
            {songs.map((song, index) => (
              <option key={index} value={song.src}>
               🎵 {song.title}
              </option>
            ))}
          </StyledSelect>

          {/* Nút bật tắt nhạc */}
          <button 
  onClick={toggleMusic}
  className={`
    w-[200px]
    px-3 py-2
    rounded-lg
    text-[9px] font-semibold

    bg-white/10
    border border-white/20
    backdrop-blur-md
    text-white

    transition-all duration-250

    hover:bg-white/20 hover:border-white/30
    active:scale-95
  `}
>
  {playing ? "🔊 Tắt nhạc" : "🎵 Bật nhạc"}
</button>

          {/* Tên bài đang phát */}
          <SongTitle>
            🎶 Đang phát: {selectedSong.title}
          </SongTitle>

          {/* Audio element */}
          <audio ref={audioRef} preload="auto" loop>
            <source src={selectedSong.src} type="audio/mpeg" />
          </audio>
        </div>

</Wrapper>
    </Container>
  );
};

export default Music;