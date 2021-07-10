import React, { useEffect, useState } from 'react';
import axios from 'axios';
import dotenv from 'dotenv';

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import SAccord from './Style';
import 'react-accessible-accordion/dist/fancy-example.css';

dotenv.config();

function Accordeon() {
  const [sliders, setSliders] = useState([]);
  const [colors, setColors] = useState({});

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/slider`).then(({ data }) => {
      setSliders(data);
    });
    axios.get(`${process.env.REACT_APP_API_URL}/colors`).then(({ data }) => {
      setColors(data);
    });
  }, []);

  return (
    <SAccord
      background={colors.accordion_background_color}
      text={colors.accordion_text_color}
    >
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
  );
}
export default Accordeon;
