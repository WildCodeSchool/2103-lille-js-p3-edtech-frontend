import { useEffect, useState } from 'react';
import axios from 'axios';
import dotenv from 'dotenv';
import SPartners from './Style';

dotenv.config();

export default function Partners() {
  const [partners, setPartners] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/partners`).then(({ data }) => {
      setPartners(data);
    });
  }, []);
  return (
    <SPartners>
      <h1>Partenaires</h1>
      <div className="partner-logo">
        {partners.map((partner) => {
          return (
            <a href={partner.link} target="_blank" rel="noreferrer">
              <img src={partner.logo_src} alt={partner.logo_alt} />
            </a>
          );
        })}
      </div>
    </SPartners>
  );
}
