import React, { useState } from 'react';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <>
      <style>{`
        .contact-section {
          background: linear-gradient(135deg, #0f0c29, #302b63, #24243e);
          min-height: 100vh;
          padding: 4rem 2rem;
          font-family: 'Segoe UI', sans-serif;
          color: #fff;
          text-align: center;
        }

        .contact-title {
          font-size: 2.5rem;
          margin-bottom: 2rem;
          text-shadow: 0 0 10px #0ff;
          animation: fadeIn 1s ease;
        }

        .contact-form {
          max-width: 500px;
          margin: auto;
          background: #1b1b2f;
          padding: 2rem;
          border-radius: 15px;
          box-shadow: 0 0 20px #0ff5;
          animation: fadeInUp 1.2s ease;
        }

        .contact-form input,
        .contact-form textarea {
          width: 100%;
          padding: 12px;
          margin: 10px 0;
          border: none;
          border-radius: 8px;
          background: #0f172a;
          color: #fff;
          font-size: 1rem;
        }

        .contact-form input::placeholder,
        .contact-form textarea::placeholder {
          color: #aaa;
        }

        .contact-form button {
          background: #00fff7;
          color: #000;
          padding: 12px;
          font-weight: bold;
          width: 100%;
          border: none;
          border-radius: 30px;
          cursor: pointer;
          font-size: 1rem;
          box-shadow: 0 0 15px #0ff;
          transition: all 0.3s ease;
          animation: pulse 1.5s infinite;
        }

        .contact-form button:hover {
          background: #0ff;
          transform: scale(1.05);
        }

        .success-message {
          color: #0f0;
          margin-top: 1rem;
          font-weight: bold;
          text-shadow: 0 0 10px #0f0;
        }

        .map-heading {
          font-size: 2rem;
          margin-top: 4rem;
          text-shadow: 0 0 8px #0ff;
          animation: fadeIn 1.5s ease;
        }

        .map-container {
          margin-top: 1.5rem;
          box-shadow: 0 0 20px #0ff6;
          border-radius: 20px;
          overflow: hidden;
          width: 90%;
          max-width: 900px;
          margin-left: auto;
          margin-right: auto;
          animation: fadeInUp 1.5s ease;
        }

        iframe {
          width: 100%;
          height: 400px;
          border: none;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes pulse {
          0% { box-shadow: 0 0 10px #0ff; }
          50% { box-shadow: 0 0 20px #0ff; }
          100% { box-shadow: 0 0 10px #0ff; }
        }
      `}</style>

      <div className="contact-section">
        <h2 className="contact-title">Contact Us</h2>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>

          {submitted && (
            <div className="success-message">✅ Your message has been sent!</div>
          )}
        </form>

        {/* Location Heading */}
        <h3 className="map-heading">📍 Our Gym Location - Iqbal Town, Lahore</h3>

        {/* Map */}
        <div className="map-container">
          <iframe
            title="Iqbal Town Gym Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13615.630930043018!2d74.27627404999999!3d31.4887986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919043c5473cf4b%3A0x804f7be795a5b493!2sIqbal%20Town%2C%20Lahore!5e0!3m2!1sen!2s!4v1719608793055!5m2!1sen!2s"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Contact;
