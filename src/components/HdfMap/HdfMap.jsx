import axios from 'axios';
import { useEffect, useState } from 'react';
import dotenv from 'dotenv';
import SMap from './Style';

dotenv.config();

export default function HdfMap() {
  const [externeLinks, SetExterneLinks] = useState({});

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/externelinks`)
      .then(({ data }) => {
        SetExterneLinks(data);
      });
  }, []);

  return (
    <SMap className="map">
      <iframe
        title="Map"
        width="100%"
        height="390vh"
        src={externeLinks?.link_map}
        target="_blank"
        rel="noreferrer"
        frameBorder="0"
        allowFullScreen
        allowTransparency
        allow="geolocation; camera; accelerometer; gyroscope; magnetometer; fullscreen"
      />
    </SMap>
  );
}
