import axios from 'axios';
import { useEffect, useState } from 'react';
import dotenv from 'dotenv';
import SNavBar from './Style';

dotenv.config();

export default function NavBar() {
  const [translations, setTranslations] = useState({});
  const [images, setImages] = useState({});
  const [externeLinks, SetExterneLinks] = useState({});
  const [colors, setColors] = useState({});

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/texts`).then(({ data }) => {
      setTranslations(data);
    });
    axios.get(`${process.env.REACT_APP_API_URL}/images`).then(({ data }) => {
      setImages(data);
    });
    axios
      .get(`${process.env.REACT_APP_API_URL}/external_links`)
      .then(({ data }) => {
        SetExterneLinks(data);
      });
    axios.get(`${process.env.REACT_APP_API_URL}/colors`).then(({ data }) => {
      setColors(data);
    });
  }, []);
  return (
    <SNavBar
      id="navBar"
      background={colors.navbar_background_color}
      text={colors.navbar_text_color}
    >
      <nav>
        <ul>
          <a href="#Actualités">
            <li className="actu">{translations.first_btn || null}</li>
          </a>
          <a
            href={externeLinks?.link_helloasso}
            target="_blank"
            rel="noreferrer"
          >
            <li className="join">{translations.second_btn || null}</li>
          </a>
          <a href="#Contact">
            <li className="contact">{translations.third_btn || null}</li>
          </a>
        </ul>

        <div className="pictos">
          <a
            href={externeLinks?.link_newsletter}
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={images?.picto_newsletter?.src}
              alt={images?.picto_newsletter?.alt}
            />
          </a>
          <a
            href={externeLinks?.link_facebook}
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={images?.picto_facebook?.src}
              alt={images?.picto_facebook?.alt}
            />
          </a>
          <a
            href={externeLinks?.link_linkedIn}
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={images?.picto_linkedIn?.src}
              alt={images?.picto_linkedIn?.alt}
            />
          </a>
          <a href={externeLinks?.link_twitter} target="_blank" rel="noreferrer">
            <img
              src={images?.picto_twitter?.src}
              alt={images?.picto_twitter?.alt}
            />
          </a>
        </div>
      </nav>
    </SNavBar>
  );
}
