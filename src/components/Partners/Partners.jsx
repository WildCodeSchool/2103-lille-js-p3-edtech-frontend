import { useEffect, useState } from 'react';
import axios from 'axios';
import dotenv from 'dotenv';
import Carousel from 'react-multi-carousel';
import SPartners from './Style';

dotenv.config();

export default function Partners() {
  const [partners, setPartners] = useState([]);
  const [translations, setTranslations] = useState({});
  const [colors, setColors] = useState({});
  const [settings, setSettings] = useState({});

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/partners`).then(({ data }) => {
      setPartners(data);
    });
    axios.get(`${process.env.REACT_APP_API_URL}/texts`).then(({ data }) => {
      setTranslations(data);
    });
    axios.get(`${process.env.REACT_APP_API_URL}/colors`).then(({ data }) => {
      setColors(data);
    });
    axios
      .get(`${process.env.REACT_APP_API_URL}/settings_carousel`)
      .then(({ data }) => {
        setSettings(data);
      });
  }, []);
  return (
    <SPartners
      id="partners"
      background={colors.partners_background_color}
      text={colors.partners_text_color}
    >
      <h1>{translations.third_section || null}</h1>
      <div className="partner-logo">
        {partners.map((partner) => {
          return (
            <a
              key={partner.id}
              href={partner.link}
              target="_blank"
              rel="noreferrer"
            >
              <img src={partner.logoSrc} alt={partner.logoAlt} />
            </a>
          );
        })}
      </div>
      {settings.carousel_duration && (
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlay
          autoPlaySpeed={parseInt(settings.carousel_duration, 10)}
          centerMode={false}
          className="Carousel"
          containerClass="container"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: parseInt(settings.items_number, 10),
              partialVisibilityGutter: 40,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 1,
              partialVisibilityGutter: 30,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 2,
              partialVisibilityGutter: 30,
            },
          }}
          showDots
          sliderClass=""
          slidesToSlide={4}
          swipeable
        >
          {partners.map((partner) => {
            return (
              <div key={partner.id} className="slide">
                <a href={partner.link} target="_blank" rel="noreferrer">
                  <img src={partner.logo_src} alt={partner.logo_alt} />
                </a>
              </div>
            );
          })}
        </Carousel>
      )}
    </SPartners>
  );
}
