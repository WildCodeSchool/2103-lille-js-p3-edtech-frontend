import axios from 'axios';
import { useEffect, useState } from 'react';
import dotenv from 'dotenv';
import SActuTwit from './Style';

dotenv.config();

export default function HdfTwitter() {
  const [actus, setActus] = useState({});
  const [translations, setTranslations] = useState({});
  const [externalLinks, SetExternalLinks] = useState({});

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/actus`).then(({ data }) => {
      setActus(data);
    });
    axios
      .get(`${process.env.REACT_APP_API_URL}/external_links`)
      .then(({ data }) => {
        SetExternalLinks(data);
      });
    axios.get(`${process.env.REACT_APP_API_URL}/texts`).then(({ data }) => {
      setTranslations(data);
    });
  }, []);

  return (
    <SActuTwit id="Actualités">
      <h1 id="actualites">{translations.fourth_section || null}</h1>
      <div className="ActuTwit">
        <div className="twoActus-twit twoActus ">
          <div className="actu1">
            <div>
              <h1 className="title-actu">{translations.title_actu1 || null}</h1>
              <p className="content-actu1">
                {translations.content_actu1 || null}
              </p>
              <p>
                <a
                  className="link-actu"
                  href={externalLinks?.link_actu1}
                  target="_blank"
                  rel="noreferrer"
                >
                  {translations.text1 || null}
                </a>
              </p>
            </div>
            <div>
              <img
                className="photo_actu"
                src={actus?.photo_actu1?.src}
                alt={actus?.photo_actu1?.alt}
              />
            </div>
          </div>
          <div className="actu2">
            <div>
              <h1 className="title-actu">{translations.title_actu2 || null}</h1>
              <p className="content-actu2">
                {translations.content_actu2 || null}
              </p>
              <p>
                <a
                  className="link-actu"
                  href={externalLinks?.link_actu2}
                  target="_blank"
                  rel="noreferrer"
                >
                  {translations.text2 || null}
                </a>
              </p>
            </div>
            <div>
              <img
                className="photo_actu"
                src={actus?.photo_actu2?.src}
                alt={actus?.photo_actu2?.img_alt}
              />
            </div>
          </div>
          <div className="actu3">
            <div>
              <h1 className="title-actu">{translations.title_actu3 || null}</h1>
              <p className="content-actu3">
                {translations.content_actu3 || null}
              </p>
              <p>
                <a
                  className="link-actu"
                  href={externalLinks?.link_actu3}
                  target="_blank"
                  rel="noreferrer"
                >
                  {translations.text3 || null}
                </a>
              </p>
            </div>
            <div>
              <img
                className="photo_actu"
                src={actus?.photo_actu3?.src}
                alt={actus?.photo_actu3?.alt}
              />
            </div>
          </div>
          <div className="actu4">
            <div>
              <h1 className="title-actu">{translations.title_actu4 || null}</h1>
              <p className="content-actu4">
                {translations.content_actu4 || null}
              </p>
              <p>
                <a
                  className="link-actu"
                  href={externalLinks?.link_actu4}
                  target="_blank"
                  rel="noreferrer"
                >
                  {translations.text4 || null}
                </a>
              </p>
            </div>
            <div>
              <img
                className="photo_actu"
                src={actus?.photo_actu4?.src}
                alt={actus?.photo_actu4?.alt}
              />
            </div>
          </div>
          <div className="actu5">
            <div>
              <h1 className="title-actu">{translations.title_actu5 || null}</h1>
              <p className="content-actu5">
                {translations.content_actu5 || null}
              </p>
              <p>
                <a
                  className="link-actu"
                  href={externalLinks?.link_actu5}
                  target="_blank"
                  rel="noreferrer"
                >
                  {translations.text5 || null}
                </a>
              </p>
            </div>
            <div>
              <img
                className="photo_actu"
                src={actus?.photo_actu5?.src}
                alt={actus?.photo_actu5?.alt}
              />
            </div>
          </div>
        </div>
        <div className="twoActus-twit">
          <h1 className="twit-title">Twitter widget</h1>
          <div className="twit-content">
            <a
              className="twitter-timeline"
              data-width="100vw"
              data-dnt="true"
              href={externalLinks?.link_twittier}
            >
              Tweets by edtech_hdf
            </a>
            <script async src={externalLinks?.link_widget} charset="utf-8">
              Twitter Hautes de France
            </script>
          </div>
        </div>
      </div>
    </SActuTwit>
  );
}
