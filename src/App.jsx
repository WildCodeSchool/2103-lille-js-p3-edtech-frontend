import Header from './components/Header/Header';
import Slider from './components/Slider/Slider';
import HdfMap from './components/HdfMap/HdfMap';
import Members from './components/Members/Members';
import Partners from './components/Partners/Partners';
import Events from './components/Events/Events';
import HdfTwitter from './components/HdfTwitter/HdfTwitter';
import ContactForm from './components/ContactForm/ContactForm';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Slider />
      <HdfMap />
      <Members />
      <Partners />
      <Events />
      <HdfTwitter />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
