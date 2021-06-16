import axios from 'axios';
import { useEffect, useState } from 'react';

import SFooter from './Style';

export default function Footer() {
  const [translations, setTranslations] = useState({});
  const [externeLinks, SetExterneLinks] = useState({});
  const [images, setImages] = useState({});

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
  }, []);

  return (
    <SFooter
      className="background"
      style={{
        backgroundImage: `url(${images?.background_footer?.src})`,
      }}
    >
      <div className="links">
        <ul>
          <a href="#Actualités">
            <li className="list">{translations.first_btn || null}</li>
          </a>
          <a
            href={externeLinks?.link_helloasso}
            target="_blank"
            rel="noreferrer"
          >
            <li className="list">{translations.second_btn || null}</li>
          </a>
          <a href="#Contact">
            <li className="list">{translations.third_btn || null}</li>
          </a>
        </ul>
      </div>
      <div className="copyright">
        <a
          className="list"
          href="https://edtechfrance.fr/mentions-legales/"
          target="_blank"
          rel="noreferrer"
        >
          {translations.cgu || null}
        </a>
      </div>
    </SFooter>
  );
}
