import axios from 'axios';
import { useEffect, useState } from 'react';
import dotenv from 'dotenv';
import SNewsletter from './Style';

dotenv.config();

export default function Newsletter() {
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
    <SNewsletter
      className="newsletter"
      id="newsletter"
      background={colors.newsletter_background_color}
      text={colors.newsletter_text_color}
      background_button={colors.newsletter_button_background_color}
      text_button={colors.newsletter_button_text_color}
    >
      <h1 className="title-newsletter">{translations.sixth_section || null}</h1>
      <p className="description-newsletter">
        {translations.description_newsletter || null}
      </p>

      <a
        className="link-newsletter"
        href={externeLinks?.link_newsletter}
        target="_blank"
        rel="noreferrer"
      >
        <button type="button" className="btn-newsletter">
          {translations.btn_newsletter || null}
        </button>
      </a>
    </SNewsletter>
  );
}
