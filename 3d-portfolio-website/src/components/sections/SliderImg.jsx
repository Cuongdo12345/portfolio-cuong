import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination,EffectCoverflow } from "swiper/modules";
import styled from "styled-components";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { items } from "../../data/constants";

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
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const SliderImg = () => {
    
  return (
    <Container id="SliderImg">
      <Wrapper>
         <div style={{ width: "100%", padding: "20px 0" }}>
         <div style={{textAlign: "center", marginBottom: "20px", marginTop: "40px", color: "white", fontWeight: "600", fontSize: "52px"}}>
           Chill
        </div>
         <Desc>
          Một số hình ảnh về cuộc sống và công việc thường ngày
        </Desc>
      <Swiper
        modules={[Pagination,EffectCoverflow]}
        spaceBetween={30}
        slidesPerView={1.5}
        navigation
        // pagination={{ clickable: true}}
        effect="coverflow"
        coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 180,
        modifier: 1,
        slideShadows: true,
        }}
        breakpoints={{
        640: { slidesPerView: 1.1 },
        768: { slidesPerView: 2.1 },
        1024: { slidesPerView: 3 },
}}
        style={{ paddingBottom: "40px" }}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              style={{
                background: item.bg,
                padding: "20px",
                borderRadius: "20px",
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.51)",
                height: "300px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between"
              }}
            >
              <img
                src={item.img}
                alt={item.title}
                style={{
                  width: "100%",
                  height: "250px",
                  objectFit: "cover",
                  borderRadius: "15px"
                }}
              />
              <h3
                style={{
                  color: "white",
                  textAlign: "center",
                  marginTop: "10px",
                  fontSize: "20px"
                }}
              >
                {/* {item.title} */}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  
</Wrapper>
    </Container>
  );
};

export default SliderImg;