import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image from "./img/comp.png"

const SliderWithThumbnails = ({  }) => {


    const images = [
        image,
        image,
        image,
     
      ];

  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);

  const settingsMain = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav',
  };

  const settingsThumbnails = {
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: true,
    centerMode: true,
    focusOnSelect: true,
  };

  return (
    <div>
      <Slider
        {...settingsMain}
        asNavFor={nav2}
        ref={(slider) => setNav1(slider)}
        className="slider-for"
      >
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Slider>
      <Slider
        {...settingsThumbnails}
        asNavFor={nav1}
        ref={(slider) => setNav2(slider)}
        className="slider-nav"
      >
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Thumbnail ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderWithThumbnails;