import axios from 'axios';
import { useEffect, useState } from 'react';
import dotenv from 'dotenv';
import SMap from './Style';

dotenv.config();

export default function HdfMap() {
  const [translations, setTranslations] = useState({});
  const [externeLinks, SetExterneLinks] = useState({});

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/external_links`)
      .then(({ data }) => {
        SetExterneLinks(data);
      });
    axios.get(`${process.env.REACT_APP_API_URL}/texts`).then(({ data }) => {
      setTranslations(data);
    });
  }, []);

  return (
    <SMap className="map" id="map">
      <h1 className="title-map">{translations.first_section || null}</h1>
      <div className="description">
        <img
          src="https://images-ext-2.discordapp.net/external/axV4qu9QBHztGjzsXzkSSh7lXPuoN3Cvv4iQmidOUAE/%3Fw%3D1120%26h%3D490%26q%3D70%26fm%3Dwebp%26fit%3Dfill/https/images.france.fr/zeaejvyq9bhj/dAZLYQVKQoU6a8gUeU0Mi/02f9938c1c421a313d6b238f670d2ab6/article_ImP_Lille-NordFrance_1120x490.jpg"
          alt=""
        />
        <p className="description-map">
          {translations.description_map || null}
        </p>
      </div>

      <a
        className="link-map"
        href={externeLinks?.link_map}
        target="_blank"
        rel="noreferrer"
      >
        <button type="button" className="btn-map">
          Lien vers la carte
        </button>
      </a>
    </SMap>
  );
}
