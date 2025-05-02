import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';  
import Shop from './components/Shop';
import Categories from './components/Categories';
import Header from './components/Header';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* Correct reference */}
        <Route path="/shop" element={<Shop />} />
        <Route path="/categories" element={<Categories />} />
        <Route path= "/testimonials" element = {<Testimonials />} />
      </Routes>
      <Footer />
      </div>
  );
}

export default App;
