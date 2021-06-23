import axios from 'axios';
import { useEffect, useState } from 'react';
import dotenv from 'dotenv';
import SHeader from './Style';

dotenv.config();

export default function Header() {
  const [images, setImages] = useState({});
  const [colors, setColors] = useState({});

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/images`).then(({ data }) => {
      setImages(data);
    });
    axios.get(`${process.env.REACT_APP_API_URL}/colors`).then(({ data }) => {
      setColors(data);
    });
  }, []);

  return (
    <SHeader
      background={colors.header_background_color}
      text={colors.header_text_color}
    >
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
