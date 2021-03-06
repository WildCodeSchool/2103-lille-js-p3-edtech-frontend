import { useEffect, useState } from 'react';
import axios from 'axios';
import dotenv from 'dotenv';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import SMembers from './Style';

dotenv.config();

export default function Members() {
  const [members, setMembers] = useState([]);
  const [translations, setTranslations] = useState({});
  const [settings, setSettings] = useState({});
  const [colors, setColors] = useState({});

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/members`).then(({ data }) => {
      setMembers(data);
    });
    axios.get(`${process.env.REACT_APP_API_URL}/texts`).then(({ data }) => {
      setTranslations(data);
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
    <SMembers
      id="members"
      background={colors.members_background_color}
      text={colors.members_text_color}
    >
      <h1>{translations.second_section}</h1>
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
          removeArrowOnDeviceType={['tablet', 'mobile']}
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
              items: 2,
              partialVisibilityGutter: 30,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 3,
              partialVisibilityGutter: 30,
            },
          }}
          showDots
          sliderClass=""
          slidesToSlide={4}
          swipeable
        >
          {members.map((member) => {
            return (
              <div key={member.id} className="slide">
                <a href={member.link} target="_blank" rel="noreferrer">
                  <img src={member.logoSrc} alt={member.logoAlt} />
                </a>
              </div>
            );
          })}
        </Carousel>
      )}
    </SMembers>
  );
}
