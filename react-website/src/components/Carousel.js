import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons"; // FontAwesome icons for arrows

const data = [
  "/images/img30.jpg", 
  "/images/img22.jpg",
  "/images/img35.jpg",
  "/images/img3.jpg",
  "/images/img34.jpg",
];

const PreviousBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <FontAwesomeIcon icon={faArrowLeft} style={{ color: "white", fontSize: "15px" }} />
    </div>
  );
};

const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <FontAwesomeIcon icon={faArrowRight} style={{ color: "white", fontSize: "15px" }} />
    </div>
  );
};

const Carousel = () => {
  return (
    <div className="carousel-container">
      <Slider
        autoplay
        autoplaySpeed={1500}
        infinite
        prevArrow={<PreviousBtn />}
        nextArrow={<NextBtn />}
      >
        {data.map((item, index) => (
          <div key={index}>
            <img src={item} alt={`Slide ${index}`} style={{ width: "100%", height: "80vh" }} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
