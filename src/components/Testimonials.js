import React from 'react';

function Testimonials() {
  const reviews = [
    { text: "These products changed my life!", name: "Alex T." },
    { text: "Amazing quality and fast delivery!", name: "Sara B." }
  ];

  return (
    <section style={{ padding: '40px 20px', backgroundColor: '#f9f9f9' }}>
      <h2 style={{ textAlign: 'center' }}>💬 What Our Customers Say</h2>
      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', marginTop: '30px' }}>
        {reviews.map((review, i) => (
          <div key={i} style={{ border: '1px solid #ccc', padding: '20px', width: '300px', backgroundColor: 'white' }}>
            <p>"{review.text}"</p>
            <strong>- {review.name}</strong>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
