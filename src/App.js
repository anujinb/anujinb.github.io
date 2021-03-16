import React from 'react';
import Home from '../src/components/Home';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Footer from './components/Footer';
import Slider from './components/Slider';

export default function App() {
  return (
    <div>
      <Home />
      <Resume />
      <Slider />
      <Portfolio />

      <Footer />
    </div>
  );
}
