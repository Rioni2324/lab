import React from 'react';

function Newsletter() {
  return (
    <section style={{ padding: '40px 20px', backgroundColor: '#fce4ec', textAlign: 'center' }}>
      <h2>📬 Join Our Newsletter</h2>
      <p>Get fitness tips, exclusive deals & product updates</p>
      <input type="email" placeholder="Your email" style={{ padding: '10px', width: '250px' }} />
      <button style={{ padding: '10px 20px', marginLeft: '10px' }}>Subscribe</button>
    </section>
  );
}

export default Newsletter;
