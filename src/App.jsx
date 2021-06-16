import { TwitterTweetEmbed, TwitterTimelineEmbed } from 'react-twitter-embed';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Slider from './components/Slider/Slider';
import HdfMap from './components/HdfMap/HdfMap';
import Members from './components/Members/Members';
import Partners from './components/Partners/Partners';
import HdfTwitter from './components/HdfTwitter/HdfTwitter';
import ContactForm from './components/ContactForm/ContactForm';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Slider />
      <HdfMap />
      <Members />
      <Partners />
      <HdfTwitter />
      <TwitterTweetEmbed />
      <TwitterTimelineEmbed />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
