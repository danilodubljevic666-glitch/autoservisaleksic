import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ONama from './components/ONama';
import Galerija from './components/Galerija';
import Usluge from './components/Usluge';
import Kontakt from './components/Kontakt';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import './index.css';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ONama />
        <Galerija />
        <Usluge />
        <Kontakt />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
