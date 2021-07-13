import axios from 'axios';
import { useEffect, useState } from 'react';
import SFooter from './Style';

export default function Footer() {
  const [translations, setTranslations] = useState({});
  const [colors, setColors] = useState({});
  const [images, setImages] = useState({});

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/texts`).then(({ data }) => {
      setTranslations(data);
    });
    axios.get(`${process.env.REACT_APP_API_URL}/images`).then(({ data }) => {
      setImages(data);
    });
    axios.get(`${process.env.REACT_APP_API_URL}/colors`).then(({ data }) => {
      setColors(data);
    });
  }, []);

  return (
    <SFooter
      className="background"
      background={colors.footer_background_color}
      text={colors.footer_text_color}
    >
      <div className="logo">
        <img src={images?.logo_footer?.src} alt={images?.picto_footer?.alt} />
      </div>

      <div className="links">
        <ul>
          <a href="#map">
            <li className="list">{translations.first_section || null}</li>
          </a>
          <a href="#Actualités">
            <li className="list">{translations.fourth_section || null}</li>
          </a>
          <a href="#members">
            <li className="list">{translations.second_section || null}</li>
          </a>
          <a href="#partners">
            <li className="list">{translations.third_section || null}</li>
          </a>
        </ul>
        <div className="date">{translations.date || null}</div>
      </div>
      <div className="date_responsive">{translations.date || null}</div>

      <div className="infos">
        <div className="adress">
          <h3>{translations.edtechhdf_title || null}</h3>

          <p>
            {translations.edtech_adress || null} <br />
            {translations.edtech_city || null}
          </p>
          <p className="inputAdress">{translations.edtech_input1 || null} </p>
          <p className="inputAdress"> {translations.edtech_input2 || null}</p>
          <p className="inputAdress">{translations.edtech_input3 || null} </p>
          <p className="inputAdress">{translations.edtech_input4 || null} </p>
        </div>
      </div>
    </SFooter>
  );
}
