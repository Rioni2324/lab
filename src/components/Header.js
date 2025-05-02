import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function Header() {
  return (
    <header style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '15px 30px',
      backgroundColor: '#222',
      color: 'white',
      position: 'sticky',
      top: 0,
      zIndex: 1000
    }}>
      {/* Logo */}
      <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
        <span style={{ color: '#ff4081' }}>Fit</span>Zone
      </div>

      {/* Navigation */}
      <nav>
        <ul style={{
          listStyle: 'none',
          display: 'flex',
          gap: '25px',
          margin: 0,
          padding: 0
        }}>
          <li>
            <Link to="/" style={navStyle}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/shop" style={navStyle}>
              Shop
            </Link>
          </li>
          <li>
            <Link to="/categories" style={navStyle}>
              Categories
            </Link>
          </li> {/* Updated to use Link */}
          <li>
            <a href="#" style={navStyle}>
              Testimonials
            </a>
          </li>
          <li>
            <a href="#" style={navStyle}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

const navStyle = {
  color: 'white',
  textDecoration: 'none',
  fontSize: '1rem',
  transition: 'color 0.3s',
  cursor: 'pointer'
};

export default Header;
