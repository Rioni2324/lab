import React from 'react';
import FeaturedProducts from './FeaturedProducts';
import Categories from './Categories';
import Testimonials from './Testimonials';
import Newsletter from './Newsletter';
import Footer from './Footer';

function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Boost Your Fitness with Top-Quality Gear</h1>
          <p>Find everything you need to take your workout to the next level.</p>
          <button className="cta-button">Shop Now</button>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="featured-products">
        <h2>Featured Products</h2>
        <FeaturedProducts />
      </section>

      {/* Categories Section */}
      <section className="categories">
        <h2>Shop by Category</h2>
        <Categories />
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>What Our Customers Say</h2>
        <Testimonials />
      </section>

      {/* Newsletter Section */}
      <section className="newsletter">
        <h2>Sign Up for Exclusive Offers</h2>
        <Newsletter />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default HomePage;
