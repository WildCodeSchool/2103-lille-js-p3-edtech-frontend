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
      const newActus = data.map((actu) => {
        const newActu = { ...actu };
        const [myDate, myTime] = actu.date_time.split('T');
        const myDateArr = myDate.split('-');
        const myFrDate = `${myDateArr[2]}.${myDateArr[1]}.${myDateArr[0]}`;
        const myTimeHour = myTime.substring(0, 5);
        newActu.date = `${myFrDate} à ${myTimeHour}`;
        return newActu;
      });
      setActus(newActus);
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
      display_actu1={translations.display_actu1}
      display_actu2={translations.display_actu2}
      display_actu3={translations.display_actu3}
      display_actu4={translations.display_actu4}
      display_actu5={translations.display_actu5}
    >
      <h1 id="actualites">{translations.fourth_section || null}</h1>
      <div className="actuTwit">
        <div className="actus-twit actus ">
          {actus.map((actu) => {
            return (
              actu.is_active === 'true' && (
                <div className="actu" id="actu1">
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
                      {actu.date}
                    </div>

                    {actu.img_src && (
                      <div>
                        <img
                          className="photo_actu"
                          src={actu.img_src || null}
                          alt={actu.img_alt || null}
                        />
                      </div>
                    )}
                  </div>
                </div>
              )
            );
          })}
        </div>
        <div className="actus-twit">
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
      </div>
    </SActuTwit>
  );
}
