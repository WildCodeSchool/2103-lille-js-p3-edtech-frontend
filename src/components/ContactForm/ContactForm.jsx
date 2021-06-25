import { useEffect, useState } from 'react';
import axios from 'axios';
import dotenv from 'dotenv';
import SContact from './Style';

dotenv.config();

export default function ContactForm() {
  const [translations, setTranslations] = useState({});
  const [status, setStatus] = useState('Envoyer');
  const [colors, setColors] = useState({});
  const [isSent, setIsSent] = useState(false);
  const [details, setDetails] = useState({
    firstname: '',
    lastname: '',
    society: '',
    phoneNumber: '',
    email: '',
    message: '',
  });
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/texts`).then(({ data }) => {
      setTranslations(data);
    });
    axios.get(`${process.env.REACT_APP_API_URL}/colors`).then(({ data }) => {
      setColors(data);
    });
  }, []);

  const handleChange = (evt) => {
    const newDetails = { ...details };
    newDetails[evt.target.name] = evt.target.value;
    setDetails(newDetails);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`${process.env.REACT_APP_API_URL}/contact`, details).then(
      (response) => {
        console.log(response);
        setIsSent(true);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  return (
    <SContact
      id="Contact"
      background={colors.contact_background_color}
      text={colors.contact_text_color}
      background_button={colors.contact_button_background_color}
      background_button_hover={colors.contact_button_background_color_hover}
      text_button={colors.contact_button_text_color}
      background_button_inactive={
        colors.contact_button_background_color_inactive
      }
      text_button_inactive={colors.contact_button_text_color_inactive}
    >
      <h1>{translations.fifth_section || null}</h1>
      <div className="accroche">
        <p>{translations.contact_catchPhrase}</p>
      </div>

      {isSent ? (
        <div className="button">
          <button type="button" className="inactive">
            Message envoyé !
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="container">
            <div className="firstBloc">
              <p>{translations.first_input || null}</p>
              <div className="firstname">
                <label htmlFor="firstname">
                  <input
                    type="text"
                    id="firstname"
                    name="firstname"
                    value={details.firstname}
                    onChange={handleChange}
                    required={
                      translations?.requirable_first_input === 'obligatoire'
                    }
                  />
                </label>
              </div>
              <p>{translations.second_input || null}</p>
              <div className="lastname">
                <label htmlFor="lastname">
                  <input
                    type="text"
                    id="lastname"
                    name="lastname"
                    value={details.lastname}
                    onChange={handleChange}
                    required={
                      translations?.requirable_second_input === 'obligatoire'
                    }
                  />
                </label>
              </div>
              <p>{translations.third_input || null}</p>
              <div className="structure">
                <label htmlFor="structure">
                  <input
                    type="text"
                    name="structure"
                    value={details.structure}
                    onChange={handleChange}
                    id="structure"
                    required={
                      translations?.requirable_third_input === 'obligatoire'
                    }
                  />
                </label>
              </div>
              <p>{translations.fourth_input || null}</p>
              <div className="phoneNumber">
                <label htmlFor="phoneNumber">
                  <input
                    type="text"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={details.phoneNumber}
                    onChange={handleChange}
                    required={
                      translations?.requirable_fourth_input === 'obligatoire'
                    }
                  />
                </label>
              </div>
            </div>
            <div className="secondBloc">
              <p>{translations.fifth_input || null}</p>
              <div className="email">
                <label htmlFor="email">
                  <input
                    type="text"
                    id="email"
                    name="email"
                    value={details.email}
                    onChange={handleChange}
                    required={
                      translations?.requirable_fifth_input === 'obligatoire'
                    }
                  />
                </label>
              </div>
              <p>{translations.sixth_input || null}</p>
              <div className="message">
                <label htmlFor="message">
                  <textarea
                    type="text"
                    id="message"
                    name="message"
                    value={details.message}
                    onChange={handleChange}
                    required={
                      translations?.requirable_sixth_input === 'obligatoire'
                    }
                  />
                </label>
              </div>
            </div>
          </div>
          <div className="RGPD">
            <input
              type="checkbox"
              onChange={(e) => setSelected(e.target.checked)}
              required
            />
            <span>
              {selected
                ? "J'accepte de partager mes informations à l'association edTech HdF"
                : 'Veuillez valider vos données RGBD'}
            </span>
          </div>
          <div className="button">
            <button type="submit" className="active" disabled={handleSubmit}>
              Envoyer
            </button>
          </div>
        </form>
      )}
    </SContact>
  );
}
