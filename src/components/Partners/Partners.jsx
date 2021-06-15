import { useEffect, useState } from 'react';
import axios from 'axios';
import dotenv from 'dotenv';
import SPartners from './Style';

dotenv.config();

export default function Partners() {
  const [partners, setPartners] = useState([]);
  const [translations, setTranslations] = useState({});

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/partners`).then(({ data }) => {
      setPartners(data);
    });
    axios.get(`${process.env.REACT_APP_API_URL}/texts`).then(({ data }) => {
      setTranslations(data);
    });
  }, []);
  return (
    <SPartners>
      <h1>{translations.third_section || null}</h1>
      <div className="partner-logo">
        {partners.map((partner) => {
          return (
            <a
              key={partner.id}
              href={partner.link}
              target="_blank"
              rel="noreferrer"
            >
              <img src={partner.logo_src} alt={partner.logo_alt} />
            </a>
          );
        })}
      </div>
    </SPartners>
  );
}
