import { useEffect, useState } from 'react';
import axios from 'axios';
import dotenv from 'dotenv';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import SMembers from './Style';

dotenv.config();

export default function Members() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/members`).then(({ data }) => {
      setMembers(data);
    });
  }, []);
  return (
    <SMembers id="members">
      <h1>Members</h1>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlay
        autoPlaySpeed={4000}
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
            items: 4,
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
        {members.map((member) => {
          return (
            <div className="slide">
              <a href={member.link} target="_blank" rel="noreferrer">
                <img src={member.logo_src} alt={member.logo_alt} />
              </a>
            </div>
          );
        })}
      </Carousel>
    </SMembers>
  );
}
