import { TwitterTweetEmbed, TwitterTimelineEmbed } from 'react-twitter-embed';
import { useEffect, useState } from 'react';
import axios from 'axios';
import dotenv from 'dotenv';
import Header from './components/Header/Header';
import Slider from './components/Slider/Slider';
import NavBar from './components/NavBar/NavBar';
import HdfMap from './components/HdfMap/HdfMap';
import Members from './components/Members/Members';
import Partners from './components/Partners/Partners';
import HdfTwitter from './components/HdfTwitter/HdfTwitter';
import ContactForm from './components/ContactForm/ContactForm';
import Footer from './components/Footer/Footer';

dotenv.config();

export default function App() {
  const [sections, setSections] = useState([]);
  let nameSection = null;

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/sections`).then(({ data }) => {
      const tmpSections = data.map((section) => {
        if (section.name === 'Header') nameSection = <Header />;
        if (section.name === 'NavBar') nameSection = <NavBar />;
        if (section.name === 'Slider') nameSection = <Slider />;
        if (section.name === 'HdfMap') nameSection = <HdfMap />;
        if (section.name === 'Members') nameSection = <Members />;
        if (section.name === 'Partners') nameSection = <Partners />;
        if (section.name === 'HdfTwitter') nameSection = <HdfTwitter />;
        if (section.name === 'ContactForm') nameSection = <ContactForm />;
        if (section.name === 'Footer') nameSection = <Footer />;
        return nameSection;
      });
      setSections(tmpSections);
    });
  }, []);
  return (
    <div className="App">
      <TwitterTweetEmbed />
      <TwitterTimelineEmbed />
      {sections}
    </div>
  );
}
