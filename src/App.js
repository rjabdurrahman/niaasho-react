import React from 'react';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import ProductCard from './components/ProductCard'

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Slider></Slider>
      <div className="d-flex justify-content-center mt-4 flex-wrap">
      <ProductCard></ProductCard>
      </div>
    </div>
  );
}

export default App;
