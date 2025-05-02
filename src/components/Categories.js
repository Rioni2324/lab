import React from 'react';
import { Link } from 'react-router-dom';


function Categories() {
  const categories = [
    {
      name: 'Supplements',
      img: 'https://www.gymsupplementsus.com/cdn/shop/collections/whey-protein_-collection-at-www.gymsupplementsus.com.jpg?v=1668158278&width=1296', 
      description: 'Boost your performance with our premium supplements.',
    },
    {
      name: 'Equipment',
      img: 'https://images.dickssportinggoods.com/marketing/DSG_FIT_8551734_Multi_FitnessPostHolidayCampaignCreative_1226_S2.jpg',
      description: 'High-quality gear for your home or gym workouts.',
    },
    {
      name: 'Apparel',
      img: 'https://www.createmytee.com/UserFiles/Custom-Gym-Fitness-T-Shirts_370450.jpg',
      description: 'Comfortable and stylish workout clothing.',
    },
    {
      name: 'Accessories',
      img: 'https://images.unsplash.com/photo-1605296867304-46d5465a13f1',
      description: 'Essential accessories to enhance your fitness journey.',
    },
  ];

  return (
    <section
      style={{
        padding: '60px 20px',
        backgroundColor: '#e0f7fa',
        textAlign: 'center',
      }}
    >
      <h2 style={{ fontSize: '2.5rem', marginBottom: '40px' }}>
        🏋️ Shop by Category
      </h2>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '30px',
          justifyContent: 'center',
          marginTop: '30px',
        }}
      > 
      {categories.map((category, i) => (
          <Link
            key={i}
            to={`/shop?category=${category.name}`}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <div
              style={{
                textAlign: 'center',
                width: '250px',
                padding: '20px',
                border: '1px solid #ccc',
                borderRadius: '8px',
                backgroundColor: '#fff',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.3s',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = 'scale(1.05)')
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = 'scale(1)')
              }
            > 
            <img
                src={category.img}
                alt={category.name}
                style={{
                  width: '100%',
                  height: '150px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                }}
              />
              <h3 style={{ margin: '15px 0 10px', fontSize: '1.5rem' }}>
                {category.name}
              </h3>
              <p style={{ color: '#666', marginBottom: '15px' }}>
                {category.description}
              </p>
              <button
                style={{
                  padding: '10px 20px',
                  backgroundColor: '#ff4081',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                }}
              > 
              Shop Now
              </button>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );

}

export default Categories;
