import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from "styled-components";
import { Image, SpanText, Wrapper } from "../CommonComponents";

export default ({ mainBannerData, width }) => {
 const [centerPadding, setCenterPadding] = useState("140px");

 const settings = {
  dots: false,
  infinite: true,
  speed: 2500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  pauseOnHover: false,
  autoplaySpeed: 4000,
  arrows: false,
 };

 const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;

  & .slick-slide {
   text-align: center;
  }

  & .slick-next {
   margin: 0 25px 0 0;
  }

  & .slick-prev {
   margin: 0 0 0 25px;
  }

  & .slick-prev,
  & .slick-next {
   z-index: 999;
   color: #eee;
  }

  & .slick-prev:before,
  & .slick-next:before {
   color: #eee;
   font-size: 30px;
  }

  & .slick-next:before {
   content: "";
   display: block;
   width: 15px;
   height: 15px;
   border-top: 4px solid #eee;
   border-right: 4px solid #eee;
   transform: rotate(45deg);
   position: absolute;
   right: 10px;
   top: 50%;
   margin-top: -7px;
  }

  & .slick-prev:before {
   content: "";
   display: block;
   width: 15px;
   height: 15px;
   border-top: 4px solid #eee;
   border-left: 4px solid #eee;
   transform: rotate(-45deg);
   position: absolute;
   left: 10px;
   top: 50%;
   margin-top: -7px;
  }
 `;

 const MainBanner = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  cursor: pointer;
 `;
 const ImgArea = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;

  &::before {
   content: "";
   position: absolute;
   background: rgba(0, 0, 0, 0.2);
   width: 100%;
   height: 100%;
   top: 0;
   left: 0;
  }
 `;

 const DescArea = styled(Wrapper)`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
 `;

 const DescTitle = styled.h2`
  font-size: 35px;
  font-weight: 900;
  margin-bottom: 20px;
  @media (max-width: 800px) {
   font-size: 25px;
  }
  @media (max-width: 700px) {
   font-size: 20px;
  }
 `;

 const DescText = styled.h3`
  font-size: 20px;
  @media (max-width: 700px) {
   font-size: 26px;
  }
 `;

 useEffect(() => {
  if (width < 700) {
   setCenterPadding("50px");
  } else {
   setCenterPadding("240px");
  }
 }, [width]);

 return (
  <Container>
   <Slider {...settings}>
    {mainBannerData &&
     mainBannerData.map((data) => {
      return (
       <MainBanner key={data.id}>
        <ImgArea>
         <Image heigh={`100%`} alt="메인베너" src={data.imagePath} />
         <DescArea>
          <DescTitle>{data.title}</DescTitle>
          <DescText>
           {data.content.split("<br />").map((data, idx) => {
            return (
             <SpanText key={idx}>
              {data} <br />
             </SpanText>
            );
           })}
          </DescText>
         </DescArea>
        </ImgArea>
       </MainBanner>
      );
     })}
   </Slider>
  </Container>
 );
};
