// import { videos } from "../../data/constants";
// import { useRef, useState, useEffect } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, EffectFade, Autoplay } from "swiper/modules";
// import styled from "styled-components";

// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/effect-fade";

// /* --- UI WRAPPER --- */
// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   position: relative;
//   z-index: 1;
//   align-items: center;
//   padding: 40px 0;
// `;

// const Wrapper = styled.div`
//   width: 100%;
//   max-width: 600px;     /* 🔥 Thu nhỏ khung tổng thể */
//   display: flex;
//   flex-direction: column;
//   gap: 16px;
// `;

// const Desc = styled.div`
//   font-size: 18px;
//   text-align: center;
//   font-weight: 600;
//   color: ${({ theme }) => theme.text_secondary};
// `;

// const SliderWrapper = styled.div`
//   width: 100%;
//   position: relative;

//   .swiper {
//     border-radius: 16px;
//     overflow: hidden;
//     box-shadow: 0 6px 25px rgba(0, 0, 0, 0.25);
//   }

//   .swiper-slide {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     position: relative;
//   }

//   /* Khung video gọn lại */
//   .video-container {
//     width: 100%;
//     height: 300px;           /* 🔥 Chiều cao gọn đẹp */
//     position: relative;
//     overflow: hidden;
//     border-radius: 16px;
//     background: #000;
//   }

//   video {
//     width: 100%;
//     height: 100%;
//     object-fit: cover;        /* 🔥 Không méo video */
//     cursor: pointer;
//   }

//   /* Progress bar */
//   .video-progress {
//     position: absolute;
//     bottom: 0;
//     left: 0;
//     height: 4px;
//     background: #fff;
//     transition: width 0.1s linear;
//     border-radius: 0 0 16px 16px;
//     z-index: 20;
//   }

//   /* Icon Play/Pause */
//   .play-icon {
//     position: absolute;
//     font-size: 60px;
//     color: rgba(255, 255, 255, 0.85);
//     pointer-events: none;
//     transition: opacity 0.3s ease;
//     opacity: 0;
//     z-index: 30;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%);
//   }

//   /* Pagination dots */
//   .swiper-pagination-bullet {
//     background: #ffffff90;
//     width: 10px;
//     height: 10px;
//     opacity: 1;
//     transition: 0.3s;
//   }

//   .swiper-pagination-bullet-active {
//     width: 24px;
//     border-radius: 8px;
//     background: #fff;
//   }
// `;

// const SliderVideo = () => {
//   const videoRefs = useRef([]);
//   const progressRefs = useRef([]);
//   const iconRefs = useRef([]);

//   const [activeIndex, setActiveIndex] = useState(0);

//   /* Auto Play Slide Active */
//   useEffect(() => {
//     videoRefs.current.forEach((video, i) => {
//       if (!video) return;

//       if (i === activeIndex) {
//         video.play().catch(() => {});
//       } else {
//         video.pause();
//         video.currentTime = 0;

//         if (progressRefs.current[i]) {
//           progressRefs.current[i].style.width = "0%";
//         }
//       }
//     });
//   }, [activeIndex]);

//   /* Progress Bar Update */
//   const handleTimeUpdate = (index) => {
//     const video = videoRefs.current[index];
//     const progress = progressRefs.current[index];
//     if (!video || !progress) return;

//     const percent = (video.currentTime / video.duration) * 100;
//     progress.style.width = `${percent}%`;
//   };

//   /* Play/Pause + Icon */
//   const togglePlayPause = (index) => {
//     const video = videoRefs.current[index];
//     const icon = iconRefs.current[index];

//     if (!video || !icon) return;

//     if (video.paused) {
//       video.play();
//       icon.innerHTML = "⏵";
//     } else {
//       video.pause();
//       icon.innerHTML = "⏸";
//     }

//     icon.style.opacity = 1;
//     setTimeout(() => (icon.style.opacity = 0), 600);
//   };

//   return (
//     <Container id="SliderVideo">
//       <Wrapper>
//         <Desc>Một số hình ảnh về cuộc sống và công việc thường ngày</Desc>

//         <SliderWrapper>
//           <Swiper
//             modules={[Navigation, Pagination, Autoplay, EffectFade]}
//             navigation
//             pagination={{ clickable: true }}
//             effect="fade"
//             autoplay={{ delay: 4500, disableOnInteraction: false }}
//             onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
//           >
//             {videos.map((video, index) => (
//               <SwiperSlide key={video.id}>
//                 <div className="video-container">
//                   {/* Icon */}
//                   <div
//                     ref={(el) => (iconRefs.current[index] = el)}
//                     className="play-icon"
//                   >
//                     ⏵
//                   </div>

//                   {/* Progress Bar */}
//                   <div
//                     ref={(el) => (progressRefs.current[index] = el)}
//                     className="video-progress"
//                   ></div>

//                   {/* Video */}
//                   <video
//                     ref={(el) => (videoRefs.current[index] = el)}
//                     src={video.src}
//                     preload="metadata"
//                     // muted
//                     controls
//                     onClick={() => togglePlayPause(index)}
//                     onTimeUpdate={() => handleTimeUpdate(index)}
//                   />
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </SliderWrapper>
//       </Wrapper>
//     </Container>
//   );
// };

// export default SliderVideo;
