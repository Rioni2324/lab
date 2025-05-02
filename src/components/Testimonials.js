import React from 'react';

const testimonials = [
  {
    name: "Erion G.",
    title: "Bodybuilder",
    quote: "Që kur fillova me përdor SUPPLEMAX, rezultatet në trupin tim u dyfishuan.",
    image: "https://i.pravatar.cc/100?img=1",
  },
  {
    name: "Lira M.",
    title: "Fitness Coach",
    quote: "Klientët e mi janë të kënaqur me suplementet. Produkt i nivelit tjetër!",
    image: "https://i.pravatar.cc/100?img=5",
  },
  {
    name: "Driton R.",
    title: "Athlete",
    quote: "Energjia gjatë stërvitjeve është 🔥. 100% e rekomandoj.",
    image: "https://i.pravatar.cc/100?img=8",
  },
  {
    name: "Amar G.",
    title: "Athlete",
    quote: "Energjia gjatë stërvitjeve është 🔥. 100% e rekomandoj.",
    image: "https://i.pravatar.cc/100?img=8",
  },
  {
    name: "Driton R.",
    title: "Athlete",
    quote: "Energjia gjatë stërvitjeve është 🔥. 100% e rekomandoj.",
    image: "https://i.pravatar.cc/100?img=8",
  },
  {
    name: "Driton R.",
    title: "Athlete",
    quote: "Energjia gjatë stërvitjeve është 🔥. 100% e rekomandoj.",
    image: "https://i.pravatar.cc/100?img=8",
  },
  {
    name: "Driton R.",
    title: "Athlete",
    quote: "Energjia gjatë stërvitjeve është 🔥. 100% e rekomandoj.",
    image: "https://i.pravatar.cc/100?img=8",
  },
  {
    name: "Driton R.",
    title: "Athlete",
    quote: "Energjia gjatë stërvitjeve është 🔥. 100% e rekomandoj.",
    image: "https://i.pravatar.cc/100?img=8",
  },
];

export default function Testimonials() {
  return (
    <section style={{ padding: '60px 20px', backgroundColor: '#DFF7F9' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.25rem', fontWeight: 'bold', color: '#FF3F80', marginBottom: '24px' }}>
          Çka thone klientet?
        </h2>
        <p style={{ color: 'black', marginBottom: '48px', fontSize: '1.125rem', fontStyle: 'italic' }}>
          Mbi 1,000 kliente te kenaqur me rezultatet qe sjell SUPPLEMAX 💪
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '32px' }}>
          {testimonials.map((t, index) => (
            <div
              key={index}
              style={{
                backgroundColor: '#2d2d2d',
                padding: '24px',
                borderRadius: '16px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={e => e.target.style.transform = 'translateY(-10px)'}
              onMouseLeave={e => e.target.style.transform = 'translateY(0)'}
            >
              <img
                src={t.image}
                alt={t.name}
                style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  margin: '0 auto 16px',
                  border: '4px solid #FF3F80',
                  objectFit: 'cover',
                }}
              />
              <p style={{ color: '#FF3F80', fontStyle: 'italic', marginBottom: '16px' }}>
                "{t.quote}"
              </p>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#FF3F80' }}>
                {t.name}
              </h3>
              <p style={{ fontSize: '0.875rem', color: '#9ca3af' }}>
                {t.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
