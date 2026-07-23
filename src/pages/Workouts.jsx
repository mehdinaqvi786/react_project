import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const Workouts = () => {
  const [exercises, setExercises] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [selected, setSelected] = useState('biceps');
  const [isDesktop, setIsDesktop] = useState(true);
  const bodyParts = ['biceps', 'triceps', 'shoulders', 'back', 'abs', 'legs','chest'];
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const part = params.get('part');
    if (part && bodyParts.includes(part)) {
      setSelected(part);
    }
  }, [location.search]);

  useEffect(() => {
    axios
      .get('/workouts.json')
      .then((res) => setExercises(res.data))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth > 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  useEffect(() => {
    const filteredExercises = exercises.filter((ex) => ex.bodyPart === selected);
    setFiltered(filteredExercises);
  }, [selected, exercises]);

  return (
    <>
      <style>{`
        @keyframes typing {
          0% { width: 0 }
          50% { width: 100% }
          100% { width: 0 }
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes pulse {
          0% { box-shadow: 0 0 10px #0ff; }
          50% { box-shadow: 0 0 25px #0ff; }
          100% { box-shadow: 0 0 10px #0ff; }
        }

        .workout-section {
          background: linear-gradient(135deg, #0f0c29, #302b63, #24243e);
          color: #fff;
          padding: 4rem 2rem;
          min-height: 100vh;
          font-family: 'Roboto', sans-serif;
        }

        .workout-title {
          font-size: 2.8rem;
          font-weight: bold;
          text-align: center;
          margin-bottom: 2rem;
          text-transform: uppercase;
          text-shadow: 0 0 10px #0ff;
          border-right: 2px solid #0ff;
          white-space: nowrap;
          overflow: hidden;
          width: fit-content;
          margin-inline: auto;
          animation: typing 6s steps(40, end) infinite;
        }

        .body-part-buttons {
          display: flex;
          overflow-x: auto;
          gap: 1rem;
          padding: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .body-part-buttons button {
          background: transparent;
          border: 2px solid #0ff;
          padding: 0.7rem 1.5rem;
          border-radius: 30px;
          color: #0ff;
          font-weight: 600;
          cursor: pointer;
          text-transform: uppercase;
          letter-spacing: 1px;
          box-shadow: 0 0 10px #0ff4;
          transition: 0.3s;
        }

        .body-part-buttons button:hover,
        .body-part-buttons button.active {
          background-color: #0ff;
          color: #000;
          transform: scale(1.05);
          box-shadow: 0 0 20px #0ff;
        }

        .exercise-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 2rem;
          justify-content: center;
          margin-top: 2rem;
        }

        .workout-card {
          width: 280px;
          background: #1b1b2f;
          border-radius: 12px;
          padding: 15px;
          color: #fff;
          box-shadow: 0 0 15px #0ff4;
          animation: fadeInUp 0.5s ease forwards, pulse 2.5s infinite;
          opacity: 0;
          transition: transform 0.2s ease-in-out, box-shadow 0.4s ease;
          will-change: transform;
          transform-style: preserve-3d;
        }

        .workout-card:hover {
          box-shadow: 0 0 25px #0ff, 0 0 40px #0ff;
        }

        .workout-card img {
          width: 100%;
          height: 180px;
          object-fit: cover;
          border-radius: 10px;
          margin-bottom: 1rem;
          transition: transform 0.4s ease-in-out;
        }

        .workout-card:hover img {
          transform: scale(1.1);
        }

        .workout-card h3 {
          font-size: 1.3rem;
          color: #0ff;
          margin-bottom: 0.5rem;
        }

        .workout-card p {
          font-size: 0.9rem;
          color: #ccc;
        }

        @media (max-width: 768px) {
          .workout-section {
            padding: 2rem 1rem;
          }

          .workout-title {
            font-size: 1.8rem;
            margin-bottom: 1.5rem;
          }

          .body-part-buttons {
            padding: 0.5rem;
            gap: 0.5rem;
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
          }

          .body-part-buttons button {
            padding: 0.5rem 1rem;
            font-size: 0.75rem;
            white-space: nowrap;
            flex-shrink: 0;
          }

          .exercise-grid {
            gap: 1rem;
            flex-direction: column;
            align-items: center;
          }

          .workout-card {
            width: 100%;
            max-width: 280px;
          }

          .workout-card img {
            height: 150px;
          }

          .workout-card h3 {
            font-size: 1.1rem;
          }

          .workout-card p {
            font-size: 0.8rem;
          }
        }

        @media (max-width: 480px) {
          .workout-title {
            font-size: 1.3rem;
          }

          .body-part-buttons button {
            padding: 0.4rem 0.8rem;
            font-size: 0.65rem;
          }

          .workout-card {
            width: 100%;
          }
        }
      `}</style>

      <div className="workout-section">
        <h2 className="workout-title">Workout by Body Part For Each Muscle Group</h2>

        {/* Buttons */}
        <div className="body-part-buttons">
          {bodyParts.map((part) => (
            <button
              key={part}
              onClick={() => setSelected(part)}
              className={selected === part ? 'active' : ''}
            >
              {part}
            </button>
          ))}
        </div>

        {/* Exercise Cards */}
        {filtered.length === 0 ? (
          <p style={{ textAlign: 'center', marginTop: '3rem' }}>No exercises available.</p>
        ) : (
          <div className="exercise-grid">
            {filtered.map((ex, i) => (
              <div
                className="workout-card"
                key={ex.id}
                style={{ animationDelay: `${i * 0.2}s` }}
                onMouseMove={isDesktop ? (e) => {
                  const card = e.currentTarget;
                  const rect = card.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  const centerX = rect.width / 2;
                  const centerY = rect.height / 2;
                  const rotateX = ((y - centerY) / centerY) * -5;
                  const rotateY = ((x - centerX) / centerX) * 5;
                  card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
                } : undefined}
                onMouseLeave={isDesktop ? (e) => {
                  const card = e.currentTarget;
                  card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
                } : undefined}
              >
                <img src={ex.image} alt={ex.title} />
                <h3>{ex.title}</h3>
                <p>{ex.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Workouts;
