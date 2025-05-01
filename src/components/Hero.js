import React from 'react';

function Hero() {
  return (
    <section style={{
      backgroundImage: 'url("https://images.unsplash.com/photo-1605296867304-46d5465a13f1")',
      backgroundSize: 'cover',
      color: 'white',
      padding: '100px 20px',
      textAlign: 'center'
    }}>
      <h1 style={{ fontSize: '3rem' }}>Unleash Your Power</h1>
      <p style={{ fontSize: '1.2rem' }}>Shop the best fitness gear, supplements, and accessories</p>
      <button style={{
        padding: '15px 30px',
        fontSize: '16px',
        marginTop: '20px',
        backgroundColor: '#ff4081',
        border: 'none',
        color: 'white',
        cursor: 'pointer'
      }}>
        Explore Now
      </button>
    </section>
  );
}

export default Hero;
