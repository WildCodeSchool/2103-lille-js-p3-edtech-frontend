import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Sslider from './Style';

const slideImages = [
  './img/slider/bureau1.jpeg',
  './img/slider/bureau2.jpeg',
  './img/slider/bureau3.jpeg',
];
const properties = {
  duration: 3500,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrow: 'true',
};

function Slider() {
  return (
    <Sslider className="slide-container">
      <Slide {...properties}>
        {slideImages.map((image) => {
          return (
            <div className="each-slide">
              <div
                className="each-img"
                style={{ backgroundImage: `url(${image})` }}
              >
                <span className="each-text">
                  <h2 className="each-title">
                    Mettre la technologie au service de l&apos;éducation et de
                    la formation
                  </h2>
                  <p className="slider-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </span>
              </div>
            </div>
          );
        })}
      </Slide>
    </Sslider>
  );
}

export default Slider;
