import { useEffect, useState } from 'react';
import axios from 'axios';
import dotenv from 'dotenv';
import SContact from './Style';

dotenv.config();

export default function ContactForm() {
  const [translations, setTranslations] = useState({});
  const [colors, setColors] = useState({});
  const [isSent, setIsSent] = useState(false);
  const [details, setDetails] = useState({
    firstname: '',
    lastname: '',
    society: '',
    email: '',
    phoneNumber: '',
    message: '',
  });

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
    axios.post(`${process.env.REACT_APP_API_URL}/contact`, details).then(() => {
      setIsSent(true);
    });
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
      <div className="catchPhrase">
        <p>{translations.contact_catchPhrase}</p>
      </div>

      {isSent ? (
        <div className="button">
          <button type="button" className="inactive">
            {translations.contact_messageSent || null}
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
                    type="email"
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
            <input type="checkbox" required />
            <p>{translations.RGPD || null}</p>
          </div>
          <div className="button">
            <button type="submit" className="active" disabled={handleSubmit}>
              {translations.contact_sendMessage || null}
            </button>
          </div>
        </form>
      )}
    </SContact>
  );
}
