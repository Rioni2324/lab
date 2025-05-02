import React, { useState } from 'react';

const testimonials = [
  {
    name: "Erion G.",
    title: "Bodybuilder",
    quote: "Që kur fillova me përdor SUPPLEMAX, rezultatet në trupin tim u dyfishuan.",
    image: "https://i.pravatar.cc/100?img=1",
    rating: 5,
    social: "https://www.instagram.com/erion",
  },
  {
    name: "Lira M.",
    title: "Fitness Coach",
    quote: "Klientët e mi janë të kënaqur me suplementet. Produkt i nivelit tjetër!",
    image: "https://i.pravatar.cc/100?img=5",
    rating: 4,
    social: "https://www.linkedin.com/in/lira",
  },
  {
    name: "Driton R.",
    title: "Athlete",
    quote: "Energjia gjatë stërvitjeve është 🔥. 100% e rekomandoj.",
    image: "https://i.pravatar.cc/100?img=8",
    rating: 5,
    social: "https://www.instagram.com/driton",
  },
  {
    name: "Amar G.",
    title: "Athlete",
    quote: "Energjia gjatë stërvitjeve është 🔥. 100% e rekomandoj.",
    image: "https://i.pravatar.cc/100?img=8",
    rating: 5,
    social: "https://www.linkedin.com/in/amar",
  },
  {
    name: "Amar G.",
    title: "Athlete",
    quote: "Energjia gjatë stërvitjeve është 🔥. 100% e rekomandoj.",
    image: "https://i.pravatar.cc/100?img=8",
    rating: 5,
    social: "https://www.linkedin.com/in/amar",
  },
  {
    name: "Amar G.",
    title: "Athlete",
    quote: "Energjia gjatë stërvitjeve është 🔥. 100% e rekomandoj.",
    image: "https://i.pravatar.cc/100?img=8",
    rating: 5,
    social: "https://www.linkedin.com/in/amar",
  },
  {
    name: "Amar G.",
    title: "Athlete",
    quote: "Energjia gjatë stërvitjeve është 🔥. 100% e rekomandoj.",
    image: "https://i.pravatar.cc/100?img=8",
    rating: 5,
    social: "https://www.linkedin.com/in/amar",
  },
  {
    name: "Amar G.",
    title: "Athlete",
    quote: "Energjia gjatë stërvitjeve është 🔥. 100% e rekomandoj.",
    image: "https://i.pravatar.cc/100?img=8",
    rating: 5,
    social: "https://www.linkedin.com/in/amar",
  },
  
  // Add more testimonials if needed
];

export default function Testimonials() {
  const [visibleTestimonials, setVisibleTestimonials] = useState(4); // initially show 4 testimonials
  const [showMore, setShowMore] = useState(true); // state to toggle "Show More"/"Hide Testimonials" button

  const handleToggleTestimonials = () => {
    if (showMore) {
      setVisibleTestimonials(testimonials.length); // show all testimonials
    } else {
      setVisibleTestimonials(4); // reset to 4 testimonials
    }
    setShowMore(!showMore); // toggle the state for button text
  };

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
          {testimonials.slice(0, visibleTestimonials).map((t, index) => (
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
              <div style={{ display: 'flex', justifyContent: 'center', marginTop: '8px' }}>
                {[...Array(t.rating)].map((_, i) => (
                  <span key={i} style={{ color: '#FFD700', fontSize: '16px' }}>★</span>
                ))}
              </div>
              <a href={t.social} target="_blank" rel="noopener noreferrer" style={{ display: 'block', marginTop: '8px', color: '#FF3F80', fontSize: '0.875rem' }}>
                Follow on Social Media
              </a>
            </div>
          ))}
        </div>
        <button
          onClick={handleToggleTestimonials}
          style={{
            marginTop: '40px', padding: '12px 24px', backgroundColor: '#FF3F80', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer'
          }}
        >
          {showMore ? "More Testimonials" : "Hide Testimonials"}
        </button>
      </div>
    </section>
  );
}
