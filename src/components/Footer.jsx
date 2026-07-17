import React, { useEffect, useState } from 'react';

const Footer = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(true), 300);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Teko:wght@500;600;700&display=swap');

        @keyframes fadeInUpFooter {
          0% {
            opacity: 0;
            transform: translateY(40px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .gym-footer {
          text-align: center;
          padding: 2rem;
          background: linear-gradient(135deg, #000000, #0a0a23, #111122); /* Ultra dark navy */
          color: #e0e0e0;
          font-size: 1rem;
          font-family: 'Roboto', sans-serif;
          letter-spacing: 1px;
          opacity: 0;
          animation: ${visible ? 'fadeInUpFooter 1s ease forwards' : 'none'};
        }

        .gym-footer strong {
          font-family: 'Teko', sans-serif;
          font-weight: 600;
          font-size: 1.2rem;
          color: #00eaff;
          text-shadow: 0 0 12px #00eaff;
        }
      `}</style>

      <footer className="gym-footer">
        <p style={{ margin: 0 }}>
          &copy; {new Date().getFullYear()} <strong>Modern Gym</strong> 🏋️‍♂️ — All Rights Reserved
        </p>
      </footer>
    </>
  );
};

export default Footer;
