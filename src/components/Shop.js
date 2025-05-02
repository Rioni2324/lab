import React from 'react';



function Shop() {
  const products = [
    { name: 'Whey Protein', price: '$39.99', img: 'https://via.placeholder.com/200', description: 'High quality whey protein for muscle recovery.' },
    { name: 'Yoga Mat', price: '$19.99', img: 'https://via.placeholder.com/200', description: 'Non-slip yoga mat for your workout sessions.' },
    { name: 'Kettlebell 20kg', price: '$59.99', img: 'https://via.placeholder.com/200', description: 'Sturdy kettlebell for strength training.' },
    { name: 'Dumbbells Set', price: '$89.99', img: 'https://via.placeholder.com/200', description: 'Set of adjustable dumbbells for home workout.' },
    { name: 'Resistance Bands', price: '$15.99', img: 'https://via.placeholder.com/200', description: 'Resistance bands for strength and flexibility training.' },
  ];

  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      
      <section style={{ padding: '60px 20px', backgroundColor: '#fff' }}>
        <h2 style={{ textAlign: 'center' }}>🛒 Shop Our Products</h2>
        <div style={{
          display: 'flex',
          gap: '30px',
          flexWrap: 'wrap',
          justifyContent: 'center',
          marginTop: '40px'
        }}>
          {products.map((product, index) => (
            <div key={index} style={{
              border: '1px solid #ccc',
              padding: '20px',
              width: '250px',
              textAlign: 'center',
              backgroundColor: '#f9f9f9',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
            }}>
              <img src={product.img} alt={product.name} style={{ width: '100%' }} />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>{product.price}</p>
              <button style={{
                padding: '10px',
                marginTop: '10px',
                backgroundColor: '#ff4081',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer'
              }}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>
      
    </div>
  );
}

export default Shop;
