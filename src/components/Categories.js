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
      
}

export default Categories;
