import './App.css';
import Header from './components/common/Header';
import About from './components/sections/About';
import Destination from './components/sections/Destination';
import Footer from './components/sections/Footer';
import Hero from './components/sections/Hero';
import Tours from './components/sections/Tours';

function App() {
  return (
    <div className="p-4 md:flex md:flex-col">
      <Header />
      <Hero />
      <About />
      <Destination />
      <Tours />
      <Footer />
    </div>
  );
}

export default App;
