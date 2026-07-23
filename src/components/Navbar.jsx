import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';

const Navbar = () => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const bodyParts = ['biceps', 'triceps', 'shoulders', 'back', 'abs', 'legs','chest'];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Teko:wght@500;600;700&display=swap');

        .navbar {
          font-family: 'Roboto', sans-serif;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 2rem;
          background: ${darkMode ? '#0f0c29' : '#f8f9fa'};
          color: ${darkMode ? '#f0f0f0' : '#111'};
          box-shadow: ${darkMode ? '0 2px 10px rgba(0,255,255,0.1)' : '0 2px 6px rgba(0,0,0,0.1)'};
          position: sticky;
          top: 0;
          z-index: 999;
          animation: fadeInDown 1s ease;
        }

        .brand {
          font-size: 30px;
          font-family: 'Teko', sans-serif;
          letter-spacing: 1px;
          color: ${darkMode ? '#00eaff' : '#007bff'};
          text-shadow: 0 0 15px ${darkMode ? '#00eaff' : '#007bff'};
        }

        .nav-links a {
          margin: 0 1rem;
          text-decoration: none;
          color: ${darkMode ? '#f0f0f0' : '#111'};
          font-weight: 600;
          transition: 0.3s;
          position: relative;
        }

        .nav-links a:hover {
          color: ${darkMode ? '#00f0ff' : '#007bff'};
        }

        .dropdown {
          position: absolute;
          top: 100%;
          background: ${darkMode ? '#1c1c1c' : '#fff'};
          border-radius: 10px;
          box-shadow: 0 4px 10px rgba(0,0,0,0.2);
          display: flex;
          flex-direction: column;
          animation: fadeIn 0.4s ease-in-out;
          min-width: 150px;
          padding: 0.5rem;
        }

        .dropdown a {
          padding: 0.5rem 1rem;
          font-size: 14px;
          border-radius: 5px;
          color: ${darkMode ? '#f0f0f0' : '#222'};
        }

        .dropdown a:hover {
          background: ${darkMode ? '#2b2b2b' : '#f0f0f0'};
          color: #00bcd4;
        }

        .theme-toggle {
          padding: 6px 12px;
          border: none;
          border-radius: 6px;
          background: ${darkMode ? '#292929' : '#e0e0e0'};
          color: ${darkMode ? '#fff' : '#000'};
          cursor: pointer;
          font-weight: 500;
          transition: 0.3s ease;
        }

        .theme-toggle:hover {
          background: ${darkMode ? '#3a3a3a' : '#d0d0d0'};
        }

        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }

        @media (max-width: 768px) {
          .navbar {
            padding: 1rem;
            flex-wrap: wrap;
          }

          .brand {
            font-size: 24px;
            flex: 1;
          }

          .nav-links {
            display: ${mobileMenuOpen ? 'flex' : 'none'} !important;
            flex-direction: column;
            width: 100%;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: ${darkMode ? '#0f0c29' : '#f8f9fa'};
            flex-basis: 100%;
            gap: 0.5rem;
            padding: 1rem;
            border-top: 1px solid ${darkMode ? '#00eaff' : '#ccc'};
          }

          .nav-links a {
            margin: 0.5rem 0;
            display: block;
          }

          .hamburger-btn {
            background: none;
            border: none;
            color: ${darkMode ? '#00eaff' : '#007bff'};
            font-size: 24px;
            cursor: pointer;
            padding: 0.5rem;
            display: flex;
            order: 3;
          }

          .theme-toggle {
            order: 4;
            font-size: 12px;
            padding: 4px 8px;
          }
        }

        @media (min-width: 769px) {
          .hamburger-btn {
            display: none;
          }

          .nav-links {
            display: flex !important;
          }
        }
      `}</style>

      <nav className="navbar">
        <div className="brand">Modern Gym</div>

        <div className="nav-links" style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>

          {/* Workouts Dropdown */}
          <div
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
            style={{ position: 'relative' }}
          >
            <span style={{ cursor: 'pointer', margin: '0 1rem' }}>Workouts ▾</span>
            {dropdownOpen && (
              <div className="dropdown">
                {bodyParts.map((part) => (
                  <Link key={part} to={`/workouts?part=${part}`}>
                    {part.charAt(0).toUpperCase() + part.slice(1)}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/supplements">Supplements</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <button className="hamburger-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? '✕' : '☰'}
        </button>

        <button className="theme-toggle" onClick={toggleTheme}>
          {darkMode ? '☀ Light Mode' : '🌙 Dark Mode'}
        </button>
      </nav>
    </>
  );
};

export default Navbar;
