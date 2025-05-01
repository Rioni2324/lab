import React from 'react';

function FeaturedProducts() {
  const products = [
    { name: 'Whey Protein', price: '$39.99', img: 'https://via.placeholder.com/200' },
    { name: 'Yoga Mat', price: '$19.99', img: 'https://via.placeholder.com/200' },
    { name: 'Kettlebell 20kg', price: '$59.99', img: 'https://via.placeholder.com/200' }
  ];

  return (
    <section style={{ padding: '60px 20px', backgroundColor: '#fff' }}>
      <h2 style={{ textAlign: 'center' }}>🔥 Featured Products</h2>
      <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap', justifyContent: 'center', marginTop: '40px' }}>
        {products.map((product, i) => (
          <div key={i} style={{ border: '1px solid #ccc', padding: '20px', width: '250px', textAlign: 'center' }}>
            <img src={product.img} alt={product.name} style={{ width: '100%' }} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <p>⭐⭐⭐⭐☆</p>
            <button style={{ padding: '10px', marginTop: '10px' }}>Add to Cart</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedProducts;
