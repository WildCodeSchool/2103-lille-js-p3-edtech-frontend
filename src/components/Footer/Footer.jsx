import axios from 'axios';
import { useEffect, useState } from 'react';
import SFooter from './Style';

export default function Footer() {
  const [translations, setTranslations] = useState({});
  const [images, setImages] = useState({});

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/texts`).then(({ data }) => {
      setTranslations(data);
    });
    axios.get(`${process.env.REACT_APP_API_URL}/images`).then(({ data }) => {
      setImages(data);
    });
  }, []);

  return (
    <SFooter className="background">
      <div
        style={{
          backgroundImage: `url(${images?.background_footer?.src})`,
        }}
      />
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

      <div className="infos">
        <div>
          <h3>Edtech Hauts-de-France</h3>

          <p>
            165 Avenue de Bretagne <br />
            59000 Lille
          </p>
          <p> </p>
          <p> </p>
          <p> </p>
          <p> </p>
          <p> </p>
        </div>
      </div>
    </SFooter>
  );
}
