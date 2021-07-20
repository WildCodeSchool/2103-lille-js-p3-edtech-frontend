import React, { useEffect, useState } from 'react';
import axios from 'axios';
import dotenv from 'dotenv';
import { Slide } from 'react-slideshow-image';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

import 'react-accessible-accordion/dist/fancy-example.css';
import 'react-slideshow-image/dist/styles.css';
import { SAccord, Sslider } from './Style';

dotenv.config();

function Slider() {
  const [sliders, setSliders] = useState([]);
  const [settings, setSettings] = useState({});
  const [colors, setColors] = useState({});

  const properties = {
    duration: settings.slider_duration || 3500,
    transitionDuration: settings.slider_transitionDuration || 500,
    infinite: settings.slider_infinite || true,
    indicators: true,
  };

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/slider`).then(({ data }) => {
      setSliders(data);
    });

    axios
      .get(`${process.env.REACT_APP_API_URL}/settings_carousel`)
      .then(({ data }) => {
        setSettings(data);
      });
    axios.get(`${process.env.REACT_APP_API_URL}/colors`).then(({ data }) => {
      setColors(data);
    });
  }, []);

  return (
    <>
      <Sslider
        className="slide-container"
        id="slider"
        background={colors.slider_background_color}
        text={colors.slider_text_color}
      >
        <Slide {...properties}>
          {sliders.map((slide) => {
            return (
              <div key={slide.id} className="each-slide">
                <div
                  className="each-img"
                  style={{ backgroundImage: `url(${slide.imgSrc})` }}
                />
                <div className="each-text">
                  <div>
                    <h2 className="each-title">{slide.title}</h2>
                    <p className="slider-text">{slide.subtext}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </Slide>
      </Sslider>
      <SAccord id="presentation">
        <Accordion allowZeroExpanded>
          {sliders.map((slide) => {
            return (
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <h2>{slide.title}</h2>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p className="subtext">{slide.subtext}</p>
                </AccordionItemPanel>
              </AccordionItem>
            );
          })}
        </Accordion>
      </SAccord>
    </>
  );
}

export default Slider;
