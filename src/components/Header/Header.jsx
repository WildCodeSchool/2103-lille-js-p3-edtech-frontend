import axios from 'axios';
import { useEffect, useState } from 'react';
import dotenv from 'dotenv';
import SHeader from './Style';

dotenv.config();

export default function Header() {
  const [images, setImages] = useState({});

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/images`).then(({ data }) => {
      setImages(data);
    });
  }, []);

  return (
    <SHeader>
      <div className="logo" id="/">
        <img
          src={images?.logo_header?.src}
          alt={images?.logo_header?.alt}
          width="auto"
          height="250"
        />
      </div>
    </SHeader>
  );
}
