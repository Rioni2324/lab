import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';  
import Shop from './components/Shop';
import Categories from './components/Categories';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* Correct reference */}
        <Route path="/shop" element={<Shop />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
      <Footer />
      </div>
  );
}

export default App;
