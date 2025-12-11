import { useRef, useState } from "react";
import styled from "styled-components";
import { songs } from "../../data/constants";

/* --- CONTAINER --- */
const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  position: relative;
  z-index: 1;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
`;

/* --- PLAYER BOX --- */
const PlayerBox = styled.div`
  position: fixed;
  bottom: 25px;
  right: 25px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;

  width: 200px;
  padding: 20px;
  border-radius: 22px;

  background: rgba(18, 18, 18, 0.78);
  border: 1px solid rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(18px);

  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.55);
`;

/* --- PLAY BUTTON --- */
const SpotifyButton = styled.button`
  width: 100px;
  height: 30px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;

  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.3px;

  color: #000;

  background: #1ed760;
  border: none;
  border-radius: 999px;

  cursor: pointer;
  transition: 0.22s ease;

  box-shadow: 0 4px 14px rgba(30, 215, 96, 0.45);

  &:hover {
    background: #1fdf64;
    transform: scale(1.06);
  }

  &:active {
    transform: scale(0.95);
  }
`;

/* --- NOW PLAYING --- */
const NowPlaying = styled.div`
  font-size: 10px;
  font-weight: 500;
  color: #a9a9a9;
  text-align: center;
`;

/* --- WAVE ANIMATION --- */
const Wave = styled.div`
  display: flex;
  align-items: end;
  gap: 4px;
  height: 16px;
`;

const Bar = styled.div`
  width: 3px;
  background: #1ed760;
  border-radius: 8px;
  animation: bounce 0.6s ease infinite;

  &:nth-child(1) {
    height: 5px;
    animation-delay: 0s;
  }
  &:nth-child(2) {
    height: 11px;
    animation-delay: 0.12s;
  }
  &:nth-child(3) {
    height: 7px;
    animation-delay: 0.24s;
  }

  @keyframes bounce {
    0% {
      transform: scaleY(0.4);
    }
    50% {
      transform: scaleY(1);
    }
    100% {
      transform: scaleY(0.4);
    }
  }
`;


const Dropdown = styled.div`
  width: 100%;
  position: relative;
`;

const DropdownHeader = styled.div`
  padding: 10px 12px;
  background: #0f0f0f;
  color: #fff;
  font-size: 10px;
  font-weight: 600;
  border: 1px solid rgba(255,255,255,0.15);
  border-radius: 12px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    background: #181818;
  }
`;

// Danh sách dropdown music
const DropdownList = styled.ul`
  position: absolute;
  top: 40px;
  width: 100%;
  background: #101010;
  border-radius: 10px;
  border: 1px solid rgba(255,255,255,0.12);
  list-style: none;
  padding: 6px 0;
  margin: 0;
  z-index: 99;

  max-height: ${({ itemCount }) => (itemCount > 3 ? "50px" : "auto")};
  overflow-y: ${({ itemCount }) => (itemCount > 3 ? "auto" : "visible")};

  /* Scrollbar đẹp */
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: #1ea6d7ff;
    border-radius: 999px;
  }
`;

const DropdownItem = styled.li`
  padding: 8px 14px;
  font-size: 9px;
  color: #fff;
  cursor: pointer;

  &:hover {
    background: #1f1f1f;
  }
`;


const Music = () => {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [selectedSong, setSelectedSong] = useState(songs[0]);
  const [open, setOpen] = useState(false);

  const toggleMusic = () => {
    if (playing) audioRef.current.pause();
    else audioRef.current.play();
    setPlaying(!playing);
  };

  return (
    <Container id="Music">
        <Wrapper>
      <PlayerBox>

      {/* Dropdown Spotify */}
      <Dropdown>
          <DropdownHeader onClick={() => setOpen(!open)}>
            🎵 {selectedSong.title}
            <span>{open ? "▲" : "▼"}</span>
          </DropdownHeader>

          {open && (
            <DropdownList itemCount={songs.length}>
              {songs.map((song, i) => (
                <DropdownItem
                  key={i}
                  onClick={() => {
                    setSelectedSong(song);
                    audioRef.current.pause();
                    audioRef.current.load();
                    audioRef.current.play();
                    setPlaying(true);
                    setOpen(false);
                  }}
                >
                  🎵 {song.title}
                </DropdownItem>
              ))}
            </DropdownList>
          )}
        </Dropdown>

        {/* Nút Play / Pause Spotify */}
        <SpotifyButton onClick={toggleMusic}>
          {playing ? "⏸ Pause" : "▶ Play"}
        </SpotifyButton>

        {/* Waveform khi đang phát */}
        {playing && (
          <Wave>
            <Bar />
            <Bar />
            <Bar />
          </Wave>
        )}

        {/* Đang phát */}
        <NowPlaying>Đang phát 🎵: {selectedSong.title}</NowPlaying>

        {/* Audio */}
        <audio ref={audioRef} preload="auto" loop>
          <source src={selectedSong.src} type="audio/mpeg" />
        </audio>

      </PlayerBox>
      </Wrapper>
    </Container>
  );
};

export default Music;


// import { useRef, useState } from "react";
// import styled from "styled-components";
// import { songs } from "../../data/constants";


// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   position: relative;
//   z-index: 1;
//   align-items: center;
// `;

// const Wrapper = styled.div`
//   position: relative;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   flex-direction: column;
//   width: 100%;
//   max-width: 1100px;
//   gap: 12px;
//   @media (max-width: 960px) {
//     flex-direction: column;
//   }
// `;
// // const Title = styled.div`
// //   font-size: 52px;
// //   text-align: center;
// //   font-weight: 600;
// //   margin-top: 20px;
// //   color: ${({ theme }) => theme.text_primary};
// //   @media (max-width: 768px) {
// //     margin-top: 12px;
// //     font-size: 32px;
// //   }
// // `;
// const Desc = styled.div`
//   font-size: 12px;
//   text-align: center;
//   font-weight: 600;
//   color: ${({ theme }) => theme.text_secondary};
//   @media (max-width: 768px) {
//     font-size: 12px;
//   }
// `;

// const SongTitle = styled.div`
//   font-size: 9px;
//   color: #b3b3b3;
//   font-weight: 600;
//   margin-top: 4px;
// `;

// const StyledSelect = styled.select`
//   font-size: 9px;
//   font-weight: 500;
//   padding: 8px 10px;
//   width: 160px;
//   border-radius: 10px;

//   background: rgba(255, 255, 255, 0.08);
//   border: 1px solid rgba(255, 255, 255, 0.15);
//   backdrop-filter: blur(8px);

//   color: #fff;
//   cursor: pointer;
//   outline: none;
//   appearance: none;

//   /* Icon mũi tên đẹp */
//   background-image: url("data:image/svg+xml;utf8,<svg fill='white' height='12' viewBox='0 0 20 20' width='12' xmlns='http://www.w3.org/2000/svg'><polygon points='0,0 20,0 10,12' /></svg>");
//   background-repeat: no-repeat;
//   background-position: right 10px center;

//   transition: all 0.25s ease;

//   &:hover {
//     background: rgba(255, 255, 255, 0.15);
//     border-color: rgba(255, 255, 255, 0.25);
//   }

//   &:focus {
//     background: rgba(255, 255, 255, 0.2);
//     border-color: rgba(255, 255, 255, 0.35);
//   }

//   option {
//     background: #121212;
//     color: white;
//     font-size: 9px;
//   }
// `;

// const MusicButton = styled.button`
//   width: 100px;
//   padding: 8px 12px;
//   font-size: 9px;
//   font-weight: 600;
//   color: white;

//   background: rgba(255, 255, 255, 0.1);
//   border: 1px solid rgba(255, 255, 255, 0.2);
//   border-radius: 10px;
//   backdrop-filter: blur(8px);

//   cursor: pointer;
//   outline: none;
//   transition: all 0.25s ease;

//   &:hover {
//     background: rgba(255, 255, 255, 0.2);
//     border-color: rgba(255, 255, 255, 0.35);
//   }

//   &:active {
//     transform: scale(0.95);
//   }
// `;

// const Music = () => {
//   const audioRef = useRef(null);
//   const [playing, setPlaying] = useState(false);
//   const [selectedSong, setSelectedSong] = useState(songs[0]);

//   // Bật / Tắt nhạc
//   const toggleMusic = () => {
//     if (playing) {
//       audioRef.current.pause();
//     } else {
//       audioRef.current.play();
//     }
//     setPlaying(!playing);
//   };

//   // Khi chọn bài nhạc khác
//   const changeSong = (e) => {
//     const newSong = songs.find((s) => s.src === e.target.value);
//     setSelectedSong(newSong);

//     // Đổi src rồi play lại bài mới
//     audioRef.current.pause();
//     audioRef.current.load();
//     audioRef.current.play();
//     setPlaying(true);
//   };

//   return (
//     <Container id="Music">
//       <Wrapper>
//          <Desc>
//           Nhấp vào đây để nghe nhạc 🎵
//         </Desc>
    
//     {/* PLAYER UI */}
//        <div className="
//             fixed bottom-5 right-5
//             p-2 rounded-xl
//             bg-white/10 backdrop-blur-2xl
//             border border-white/20
//             shadow-[0_8px_25px_rgba(0,0,0,0.4)]
//             flex flex-col gap-3
//             w-[120px]
//             transition-all duration-300
//             hover:scale-[1.02]
//         ">

//           {/* Dropdown chọn bài */}
//           <StyledSelect value={selectedSong.src} onChange={changeSong}>
//             {songs.map((song, index) => (
//               <option key={index} value={song.src}>
//                🎵 {song.title}
//               </option>
//             ))}
//           </StyledSelect>

//           {/* Nút bật tắt nhạc */}
//          <MusicButton onClick={toggleMusic}>
//           {playing ? "🔊 Tắt nhạc" : "🎵 Bật nhạc"}
//          </MusicButton>


//           {/* Tên bài đang phát */}
//           <SongTitle>
//             🎶 Đang phát: {selectedSong.title}
//           </SongTitle>

//           {/* Audio element */}
//           <audio ref={audioRef} preload="auto" loop>
//             <source src={selectedSong.src} type="audio/mpeg" />
//           </audio>
//         </div>
// </Wrapper>
//     </Container>
//   );
// };

// export default Music;

