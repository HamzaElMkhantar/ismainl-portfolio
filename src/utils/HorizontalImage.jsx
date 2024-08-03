import React from 'react';

const HorizontalImage = ({ img }) => {
  return (
    <div className="HorizontalImage col-md-4 col-sm-12 my-1 d-flex justify-content-center">
      <img style={{ width: '100%', height: 'auto', objectFit: 'cover' }} src={img} alt="" />
    </div>
  );
};

export default HorizontalImage;
