import React, { useEffect, useState } from 'react';
import axios from 'axios';
import dotenv from 'dotenv';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Sslider from './Style';

const properties = {
  duration: 3500,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrow: 'true',
};

dotenv.config();

function Slider() {
  const [sliders, setSliders] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/sliders`).then(({ data }) => {
      setSliders(data);
    });
  }, []);

  return (
    <Sslider className="slide-container">
      <Slide {...properties}>
        {sliders.map((slide) => {
          return (
            <div className="each-slide">
              <div
                className="each-img"
                style={{ backgroundImage: `url(${slide.img_src})` }}
              />

              <div className="each-text">
                <div>
                  <h2 className="each-title">{slide.title}</h2>
                  <p className="slider-text">{slide.text}</p>
                </div>
              </div>
            </div>
          );
        })}
      </Slide>
    </Sslider>
  );
}

export default Slider;
