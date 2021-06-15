import axios from 'axios';
import { useEffect, useState } from 'react';
import dotenv from 'dotenv';
import SMap from './Style';

dotenv.config();

export default function HdfMap() {
  const [externeLinks, SetExterneLinks] = useState({});

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/external_links`)
      .then(({ data }) => {
        SetExterneLinks(data);
      });
  }, []);

  return (
    <SMap className="map">
      <h1 className="title-map">
        Cartographie représent les members de l&apos;asociation
      </h1>
      <p className="description-map">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus
        ab iure reiciendis at! Iure, libero error quae repellat similique
        officia beatae doloremque praesentium, quod nobis quaerat voluptatum
        autem, magnam debitis? Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Delectus suscipit, non error laboriosam eos animi quas
        dolores? Voluptates voluptatem beatae, audantium fugit.
      </p>

      <button type="button" className="btn-map">
        <a
          className="link-map"
          href="https://livemap.getwemap.com/embed.html?emmid=15883&iframeid=ed23008b-869a-482f-8f70-21c1041b88ed&parentLocation=https%3A%2F%2Flivemap.getwemap.com%2Fembed.html&parentOrigin=https%3A%2F%2Flivemap.getwemap.com&token=CQW96JV4PEI60Z56A7MBB7G2X#/search@48.8526893,2.3282879,5.00"
          target="_blank"
          rel="noreferrer"
        >
          Lien à cartographie
        </a>
      </button>
      {externeLinks?.link_map}
    </SMap>
  );
}
