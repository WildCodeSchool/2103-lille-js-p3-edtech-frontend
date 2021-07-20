import axios from 'axios';
import { useEffect, useState } from 'react';
import dotenv from 'dotenv';
import SActuTwit from './Style';

dotenv.config();

export default function HdfTwitter() {
  const [actus, setActus] = useState([]);
  const [translations, setTranslations] = useState({});
  const [externalLinks, SetExternalLinks] = useState({});
  const [colors, setColors] = useState({});

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
    axios.get(`${process.env.REACT_APP_API_URL}/colors`).then(({ data }) => {
      setColors(data);
    });
  }, []);

  return (
    <SActuTwit
      id="Actualités"
      background={colors.hdfTwitter_background_color}
      text={colors.hdfTwitter_text_color}
      background_actu={colors.actu_background_color}
      link_actu={colors.actu_link_color}
    >
      <h1 id="actualites">{translations.fourth_section || null}</h1>
      <div className="actuTwit">
        <div className=" actus ">
          {actus.map((actu) => {
            return (
              actu.isActive === 'true' && (
                <div key={actu.id} className="actu" id="actu1">
                  <div className="title-actu">
                    <h2>{actu.title || null}</h2>
                  </div>
                  <div className="imgAndp">
                    <div className="actu-content">
                      <p className="content-actu">{actu.content || null}</p>
                      <p>
                        <a
                          className="link-actu"
                          href={actu.link || null}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {actu.link || null}
                        </a>
                      </p>
                    </div>

                    {actu.imgSrc && (
                      <div>
                        <img
                          className="photo_actu"
                          src={actu.imgSrc || null}
                          alt={actu.imgAlt || null}
                        />
                      </div>
                    )}
                  </div>
                </div>
              )
            );
          })}
        </div>

        <div className="twit-content">
          <a
            className="twitter-timeline"
            data-width="100vw"
            data-dnt="true"
            href={externalLinks?.link_twitter}
          >
            {translations.twitter || null}
          </a>
          <script src={externalLinks?.link_widget} />
        </div>
      </div>
    </SActuTwit>
  );
}
