import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { NextArrow, PrevArrow } from './CostumArrow';
// import './SliderComponent.css'; // Optional for additional custom styles

const SliderComponent = ({slideImg}) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true, // For fade effect
    cssEase: 'linear',
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    margin:'0', padding:'0',
    backgroundColor: "#000000"
  };

  return (
    // <div style={{width:'100%' , backgroundColor:'#000000'}}>
    <div className="slider-container" style={{width:'100%', opacity:'1'}}>
      <Slider style={{width:'100%'}} {...settings}>
        {slideImg?.map(img => {
          return (
            <div key={img} style={{width:'100%', height:'70vh', objectFit:'cover'}}>
              <img style={{width:'100%', height:'81vh', objectFit:'cover'}} src={img} alt="" />
            </div>
          );
        })}
      </Slider>
    </div>
    // </div>
  );
};

export default SliderComponent;
