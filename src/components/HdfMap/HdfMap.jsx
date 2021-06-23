import axios from 'axios';
import { useEffect, useState } from 'react';
import dotenv from 'dotenv';
import SMap from './Style';

dotenv.config();

export default function HdfMap() {
  const [translations, setTranslations] = useState({});
  const [externeLinks, SetExterneLinks] = useState({});
  const [colors, setColors] = useState({});

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/external_links`)
      .then(({ data }) => {
        SetExterneLinks(data);
      });
    axios.get(`${process.env.REACT_APP_API_URL}/texts`).then(({ data }) => {
      setTranslations(data);
    });
    axios.get(`${process.env.REACT_APP_API_URL}/colors`).then(({ data }) => {
      setColors(data);
    });
  }, []);

  return (
    <SMap
      className="map"
      id="map"
      background={colors.map_background_color}
      text={colors.map_text_color}
      background_button={colors.map_button_background_color}
      text_button={colors.map_button_text_color}
    >
      <h1 className="title-map">{translations.first_section || null}</h1>
      <p className="description-map">{translations.description_map || null}</p>
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
