import React from 'react';

function Categories() {
  const categories = ['Supplements', 'Equipment', 'Apparel', 'Accessories'];

  return (
    <section style={{ padding: '40px 20px', backgroundColor: '#e0f7fa' }}>
      <h2 style={{ textAlign: 'center' }}>🏋️ Shop by Category</h2>
      <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '30px' }}>
        {categories.map((cat, i) => (
          <div key={i} style={{ textAlign: 'center' }}>
            <img src={`https://via.placeholder.com/80?text=${cat}`} alt={cat} />
            <p>{cat}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categories;
