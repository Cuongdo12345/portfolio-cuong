// // import { Swiper, SwiperSlide } from "swiper/react";
// import { videos } from "../../data/constants";
// import { useRef, useState, useEffect } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination,EffectFade,Autoplay} from "swiper/modules";
// import styled from "styled-components";

// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/effect-fade";

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
//   font-size: 18px;
//   text-align: center;
//   font-weight: 600;
//   color: ${({ theme }) => theme.text_secondary};
//   @media (max-width: 768px) {
//     font-size: 16px;
//   }
// `;


//   const SliderVideo = () => {
//       const videoRefs = useRef([]);
//   const [activeIndex, setActiveIndex] = useState(0);

//   useEffect(() => {
//     videoRefs.current.forEach((video, i) => {
//       if (!video) return;
//       if (i === activeIndex) {
//         video.play().catch(() => {});
//       } else {
//         video.pause();
//         video.currentTime = 0;
//       }
//     });
//   }, [activeIndex]);

//   return (
//     <Container id="SliderVideo">
//       <Wrapper>
        
//          <Desc>
//           Một số hình ảnh về cuộc sống và công việc thường ngày
//         </Desc>
        
//         <div className="w-full max-w-xl mx-auto py-10">
//       <Swiper
//         modules={[Navigation, Pagination, Autoplay, EffectFade]}
//         navigation
//         pagination={{ clickable: true }}
//         effect="fade"
//         autoplay={{ delay: 5000, disableOnInteraction: false }}
//         onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
//         // className="rounded-xl overflow-hidden shadow-lg"
//       >
//         {videos.map((video, index) => (
//           <SwiperSlide key={video.id}>
//             <video
//               ref={(el) => (videoRefs.current[index] = el)}
//               src={video.src}
//               preload="metadata"
//               muted
//               style={{ width: "100%", height: "300px"}}
//             />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
// </Wrapper>
//     </Container>
//   );
// };

// export default SliderVideo;