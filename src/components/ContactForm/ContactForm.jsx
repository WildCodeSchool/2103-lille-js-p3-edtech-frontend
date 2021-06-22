import { useEffect, useState } from 'react';
import axios from 'axios';
import dotenv from 'dotenv';
import SContact from './Style';

dotenv.config();

export default function ContactForm() {
  const [translations, setTranslations] = useState({});
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
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/texts`).then(({ data }) => {
      setTranslations(data);
    });
  }, []);

  const handleChange = (evt) => {
    const newDetails = { ...details };
    newDetails[evt.target.name] = evt.target.value;
    setDetails(newDetails);
  };
  const handleClick = () => {
    setClicked(true);
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
    <SContact id="Contact">
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
                    required
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
                    required
                  />
                </label>
              </div>
              <p>{translations.third_input || null}</p>
              <div className="structure">
                <label htmlFor="structure">
                  <input
                    type="text"
                    name="structure"
                    value={details.society}
                    onChange={handleChange}
                    id="structure"
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
                    required
                  />
                </label>
              </div>
            </div>
          </div>
          <div className="RGPD">
            <input
              type="checkbox"
              onChange={(e) => setSelected(e.target.checked)}
            />
            <span>
              {selected
                ? "J'accepte de partager mes informations à l'association edTech HdF"
                : 'Veuillez valider vos données RGBD'}
            </span>
          </div>

          {selected ? (
            <div className="button">
              <button type="submit" className="active" disabled={handleSubmit}>
                Envoyer
              </button>
            </div>
          ) : (
            <div className="button">
              <button
                type="button"
                onClick={handleClick}
                className="beforeCheck"
              >
                {clicked ? 'Veuillez cocher la case ' : 'Envoyer'}
              </button>
            </div>
          )}
        </form>
      )}
    </SContact>
  );
}
