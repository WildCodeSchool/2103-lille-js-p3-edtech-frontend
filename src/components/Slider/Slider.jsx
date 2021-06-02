import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import PropTypes from 'prop-types';
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
  arrow: true,
};

function Slider({ theme }) {
  return (
    <Sslider className="slide-container" theme={theme}>
      <Slide {...properties}>
        <div className="each-slide">
          <div
            className="each-img"
            style={{ backgroundImage: `url(${slideImages[0]})` }}
          >
            <span className="each-text">
              <h2 className="each-title">
                Mettre la technologie au service de l&apos;éducation et de la
                formation
              </h2>
              <p className="slider-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </span>
          </div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[1]})` }}>
            <span className="each-text">
              <h2 className="each-title">
                Mettre la technologie au service de l&apos;éducation et de la
                formation
              </h2>
              <p className="slider-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </span>
          </div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[2]})` }}>
            <span className="each-text">
              <h2 className="each-title">
                Mettre la technologie au service de l&apos;éducation et de la
                formation
              </h2>
              <p className="slider-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </span>
          </div>
        </div>
      </Slide>
    </Sslider>
  );
}

Slider.propTypes = {
  theme: PropTypes.string.isRequired,
};

export default Slider;
