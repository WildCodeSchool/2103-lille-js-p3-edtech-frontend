import axios from 'axios';
import { useEffect, useState } from 'react';
import dotenv from 'dotenv';
import SActuTwit from './Style';

dotenv.config();

export default function HdfTwitter() {
  const [images, setImages] = useState({});
  const [translations, setTranslations] = useState({});
  const [externeLinks, SetExterneLinks] = useState({});

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/images`).then(({ data }) => {
      setImages(data);
    });
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
    <SActuTwit className="ActuTwit">
      <div className="twoActus">
        <div className="actu1">
          <div>
            <h1 className="title-actu1">{translations.title_actu1 || null}</h1>
            <p className="content-actu1">
              {translations.content_actu1 || null}
            </p>
            <p>
              <a
                className="link-actu1"
                href={externeLinks?.link_actu1}
                target="_blank"
                rel="noreferrer"
              >
                Lien vers actu1
              </a>
            </p>
          </div>
          <div>
            <img
              className="photo_actu"
              src={images?.photo_actu1?.src}
              alt={images?.photo_actu1?.alt}
            />
          </div>
        </div>
        <div className="actu2">
          <div>
            <h1 className="title-actu2">{translations.title_actu2 || null}</h1>
            <p className="content-actu2">
              {translations.content_actu2 || null}
            </p>
            <p>
              <a
                className="link-actu2"
                href={externeLinks?.link_actu2}
                target="_blank"
                rel="noreferrer"
              >
                Lien vers actu2
              </a>
            </p>
          </div>
          <div>
            <img
              className="photo_actu"
              src={images?.photo_actu2?.src}
              alt={images?.photo_actu2?.alt}
            />
          </div>
        </div>
      </div>
      <div className="actu-widget-twitter">
        <h2>Twitter widget</h2>
        <div>
          <a
            className="twitter-timeline"
            data-width="600px"
            data-height="500px"
            data-dnt="true"
            href={externeLinks?.link_twittier}
          >
            Tweets by edtech_hdf
          </a>
          <script async src={externeLinks?.link_widget} charset="utf-8">
            Twitter Hautes de France
          </script>
        </div>
      </div>
    </SActuTwit>
  );
}
