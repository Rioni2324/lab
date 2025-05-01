import React from 'react';

function Footer() {
  return (
    <footer style={{ padding: '20px', backgroundColor: '#333', color: 'white', textAlign: 'center' }}>
      <p>&copy; {new Date().getFullYear()} FitZone. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
