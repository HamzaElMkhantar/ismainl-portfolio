import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // You can use any icon library you prefer

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)', zIndex: 2 }}
      onClick={onClick}
    >
      {/* <FaArrowRight style={{ color: 'black', fontSize: '30px' }} /> */}
    </div>
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)', zIndex: 2 }}
      onClick={onClick}
    >
      {/* <FaArrowLeft style={{ color: 'black', fontSize: '30px' }} /> */}
    </div>
  );
};

export { NextArrow, PrevArrow };
