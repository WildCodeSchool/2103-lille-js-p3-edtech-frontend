import axios from 'axios';
import { useEffect, useState } from 'react';
import dotenv from 'dotenv';
import SNavBar from './Style';

dotenv.config();

export default function NavBar() {
  const [translations, setTranslations] = useState({});

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/texts`).then(({ data }) => {
      setTranslations(data);
    });
  }, []);
  return (
    <SNavBar>
      <nav>
        <ul>
          <a href="#Actualités">
            <li className="actu">{translations.first_btn || null}</li>
          </a>
          <a
            href="https://www.helloasso.com/associations/edtech-hauts-de-france"
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
          <a href="http://eepurl.com/hhJSqj " target="_blank" rel="noreferrer">
            <img
              src="/img/navBar/pictogrammes/Picto_Newsletter.png"
              alt="Picto_Newsletter"
            />
          </a>
          <a
            href="https://www.facebook.com/Edtech.HdF"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/img/navBar/pictogrammes/Picto_Facebook.png"
              alt="Picto_Facebook"
            />
          </a>
          <a
            href="https://www.linkedin.com/company/edtech-hauts-de-france/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/img/navBar/pictogrammes/Picto_Linkedin.png"
              alt="Picto_LinkedIn"
            />
          </a>
          <a
            href="https://twitter.com/edtech_hdf"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/img/navBar/pictogrammes/Picto_Twitter.png"
              alt="Picto_Facebook"
            />
          </a>
        </div>
      </nav>
    </SNavBar>
  );
}
