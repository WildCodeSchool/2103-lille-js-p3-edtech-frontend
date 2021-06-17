import { useEffect, useState } from 'react';
import axios from 'axios';
import dotenv from 'dotenv';
import SContact from './Style';

dotenv.config();

export default function ContactForm() {
  const [translations, setTranslations] = useState({});
  const [status, setStatus] = useState('Envoyer');
  const [details, setDetails] = useState({
    firstname: '',
    lastname: '',
    society: '',
    phoneNumber: '',
    email: '',
    message: '',
  });

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios.post(`${process.env.REACT_APP_API_URL}/contact`, details).then(
      (response) => {
        console.log(response);
        setStatus('envoyé');
      },
      (error) => {
        console.log(error);
      }
    );
  };

  return (
    <SContact id="Contact">
      <h1>{translations.fifth_section || null}</h1>
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
            <div className="society">
              <label htmlFor="society">
                <input
                  type="text"
                  name="society"
                  value={details.society}
                  onChange={handleChange}
                  id="society"
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
                  required
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
                  required
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
        <div className="button">
          <button type="submit">{status}</button>
        </div>
      </form>
    </SContact>
  );
}
