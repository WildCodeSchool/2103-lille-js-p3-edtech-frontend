import { TwitterTimelineEmbed } from 'react-twitter-embed';
import { useEffect, useState } from 'react';
import axios from 'axios';
import dotenv from 'dotenv';
import ScrollToTop from 'react-scroll-to-top';
import Header from './components/Header/Header';
import Slider from './components/Slider/Slider';
import NavBar from './components/NavBar/NavBar';
import HdfMap from './components/HdfMap/HdfMap';
import Members from './components/Members/Members';
import Partners from './components/Partners/Partners';
import Actus from './components/Actus/Actus';
import ContactForm from './components/ContactForm/ContactForm';
import Footer from './components/Footer/Footer';
import Newsletter from './components/Newsletter/Newsletter';
import SButton from './Style';

dotenv.config();

export default function App() {
  const [sections, setSections] = useState([]);
  const [colors, setColors] = useState({});
  let nameSection = null;

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/sections`).then(({ data }) => {
      const tmpSections = data.map((section) => {
        if (section.name === 'Header')
          nameSection = <Header key={section.id} />;
        if (section.name === 'NavBar')
          nameSection = <NavBar key={section.id} />;
        if (section.name === 'Slider')
          nameSection = <Slider key={section.id} />;
        if (section.name === 'HdfMap')
          nameSection = <HdfMap key={section.id} />;
        if (section.name === 'Members')
          nameSection = <Members key={section.id} />;
        if (section.name === 'Partners')
          nameSection = <Partners key={section.id} />;
        if (section.name === 'HdfTwitter')
          nameSection = <Actus key={section.id} />;
        if (section.name === 'ContactForm')
          nameSection = <ContactForm key={section.id} />;
        if (section.name === 'Newsletter')
          nameSection = <Newsletter key={section.id} />;
        if (section.name === 'Footer')
          nameSection = <Footer key={section.id} />;
        return nameSection;
      });
      setSections(tmpSections);
    });
    axios.get(`${process.env.REACT_APP_API_URL}/colors`).then(({ data }) => {
      setColors(data);
    });
  }, []);
  return (
    <div className="App">
      <TwitterTimelineEmbed sourceType="profile" screenName="edtech_hdf" />
      {sections}
      <SButton>
        <ScrollToTop
          smooth
          color={colors.btn_to_up_arrow}
          style={{
            backgroundColor: `${colors.btn_to_up_background_color}`,
            borderRadius: '100%',
            height: '30px',
            width: '30px',
          }}
        />
      </SButton>
    </div>
  );
}
