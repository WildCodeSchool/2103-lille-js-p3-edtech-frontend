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

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/slider`).then(({ data }) => {
      setSliders(data);
    });
  }, []);

  return (
    <SAccord>
      <Accordion allowZeroExpanded>
        {sliders.map((slide) => {
          return (
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <p>{slide.title}</p>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>{slide.subtext}</p>
              </AccordionItemPanel>
            </AccordionItem>
          );
        })}
      </Accordion>
    </SAccord>
  );
}
export default Accordeon;
