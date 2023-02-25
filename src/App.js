import { Celebrate } from './blocks/Celebrate';
import { Hero } from './blocks/Hero';
import { OurDishes } from './blocks/OurDishes';
import { OurHistory } from './blocks/OurHistory';
import { Header } from './components/Header';
import { OurMenu } from './blocks/OurMenu';
import { Testimonial } from './blocks/Testimonial';

import './App.css';
import { Gallery } from './blocks/Gallery';
import { Footer } from './components/Footer';

const App = () => {
  return (
    <div className="app">
      <Header />
      <Hero />
      <OurHistory />
      <Celebrate />
      <OurDishes />
      <OurMenu />
      <Testimonial />
      <Gallery />
      <Footer />
    </div>
  );
};

export default App;
