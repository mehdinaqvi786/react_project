import React, { useState } from 'react';

const Supplements = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  const supplements = {
    gain: [
      {
        name: "Mass Gainer",
        benefit: "Supports calorie surplus for weight gain.",
        image: "https://th.bing.com/th/id/OIP.bFlYwXOcwM1r6ksV6GLgLAAAAA?w=170&h=180&c=7&r=0&o=7&dpr=1.1&pid=1.7&rm=3",
      },
      {
        name: "Creatine Monohydrate",
        benefit: "Boosts strength and muscle volume.",
        image: "https://th.bing.com/th/id/OIP.4aEaS0VsHr7sQvjn2sczhgHaHa?w=196&h=197&c=7&r=0&o=7&dpr=1.1&pid=1.7&rm=3",
      },
      {
        name: "Whey Protein",
        benefit: "Promotes muscle recovery and growth.",
        image: "https://th.bing.com/th/id/R.c988f9b1888001ac48f259b3505958ac?rik=ckfNneqphqYXAg&pid=ImgRaw&r=0",
      },
    ],
    loss: [
      {
        name: "L-Carnitine",
        benefit: "Helps burn fat and boost energy.",
        image: "https://th.bing.com/th/id/OIP.p_MCrgHPu_bquRJR56ycpwHaGG?w=259&h=213&c=7&r=0&o=7&dpr=1.1&pid=1.7&rm=3",
      },
      {
        name: "CLA",
        benefit: "Supports fat metabolism and weight management.",
        image: "https://th.bing.com/th/id/OIP.LAYVYlybkneSltCr8tzczAHaHa?w=195&h=194&c=7&r=0&o=7&dpr=1.1&pid=1.7&rm=3",
      },
      {
        name: "Green Tea Extract",
        benefit: "Rich in antioxidants, boosts fat burning.",
        image: "https://i5.walmartimages.com/seo/Green-Tea-Extract-Capsules-1000mg-98-Standardized-EGCG-3X-Strength-Natural-Energy-Heart-Support-Polyphenols-Gentle-Caffeine-240_c8a3b3e0-1ed9-41e8-b68d-44eed17ce23b.31fda483fe805b0c8267e8d6d4d395d9.jpeg",
      },
    ],
    pre: [
      {
        name: "Caffeine Booster",
        benefit: "Improves alertness and workout focus.",
        image: "https://tse4.mm.bing.net/th/id/OIP.oyqRkehPUHkvuWRv1IiEuQHaJ3?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
      },
      {
        name: "Beta-Alanine",
        benefit: "Delays muscle fatigue during intense workouts.",
        image: "https://th.bing.com/th/id/OIP.oolgZ-vtm0VAtLezgZBkWQHaHa?w=133&h=180&c=7&r=0&o=7&dpr=1.1&pid=1.7&rm=3",
      },
      {
        name: "Pre-Workout Blend",
        benefit: "Packed with nitric oxide boosters for pumps.",
        image: "https://th.bing.com/th/id/OIP.HEvgbQivqPKVDPPqzsDscwHaHa?w=200&h=200&c=7&r=0&o=7&dpr=1.1&pid=1.7&rm=3",
      },
    ],
  };

  const cardContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '2rem',
    marginTop: '2rem',
  };

  const categoryBoxStyle = {
    width: '300px',
    height: '260px',
    background: 'linear-gradient(135deg, #0f0c29, #302b63, #24243e)',
    color: '#fff',
    borderRadius: '20px',
    textAlign: 'center',
    padding: '1.5rem',
    cursor: 'pointer',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    boxShadow: '0 0 20px #0ff',
  };

  const supplementCardStyle = {
    width: '280px',
    background: '#1b1b2f',
    borderRadius: '12px',
    padding: '15px',
    color: '#fff',
    boxShadow: '0 0 15px #0ff4',
    opacity: 0,
    animation: 'fadeInUpSlow 1s ease forwards',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  };

  return (
    <>
      <style>{`
        @keyframes fadeInUpSlow {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .supplement-section {
          background: linear-gradient(135deg, #0f0c29, #302b63, #24243e);
          min-height: 100vh;
          padding: 4rem 2rem;
          font-family: 'Segoe UI', sans-serif;
          color: #fff;
        }

        .supplement-title {
          text-align: center;
          font-size: 2.5rem;
          margin-bottom: 2rem;
          text-shadow: 0 0 10px #0ff;
        }

        .category-box:hover {
          transform: scale(1.05);
          box-shadow: 0 0 40px #0ff;
        }

        .supplement-image {
          width: 100%;
          height: 180px;
          object-fit: cover;
          border-radius: 10px;
          margin-bottom: 1rem;
        }

        .category-image {
          width: 80px;
          height: 80px;
          object-fit: cover;
          border-radius: 10px;
          margin-bottom: 1rem;
        }

        .supplement-card:hover {
          transform: scale(1.05);
          box-shadow: 0 0 25px #0ff;
        }

        .show-btn {
          margin-top: 1rem;
          padding: 10px 20px;
          border: none;
          background: #00fff7;
          color: #000;
          font-weight: bold;
          border-radius: 30px;
          cursor: pointer;
          box-shadow: 0 0 10px #0ff;
          transition: all 0.3s ease;
          animation: pulse 1.5s infinite;
        }

        .show-btn:hover {
          transform: scale(1.1);
          background: #0ff;
          box-shadow: 0 0 20px #0ff;
        }

        @keyframes pulse {
          0% { box-shadow: 0 0 10px #0ff; }
          50% { box-shadow: 0 0 20px #0ff; }
          100% { box-shadow: 0 0 10px #0ff; }
        }

        @media (max-width: 768px) {
          .supplement-section {
            padding: 2rem 1rem;
          }

          .supplement-title {
            font-size: 1.8rem;
            margin-bottom: 1.5rem;
          }

          .category-box {
            width: 100%;
            max-width: 280px;
            height: 240px;
          }

          .supplement-card {
            width: 100%;
            max-width: 260px;
          }

          .category-image {
            width: 70px;
            height: 70px;
          }

          .supplement-image {
            height: 150px;
          }

          .show-btn {
            padding: 8px 16px;
            font-size: 0.85rem;
          }
        }

        @media (max-width: 480px) {
          .supplement-section {
            padding: 1.5rem 1rem;
          }

          .supplement-title {
            font-size: 1.3rem;
            margin-bottom: 1rem;
          }

          .category-box {
            width: 100%;
            max-width: 100%;
            height: 220px;
            padding: 1rem;
          }

          .supplement-card {
            width: 100%;
            max-width: 100%;
            padding: 12px;
          }

          .category-image {
            width: 60px;
            height: 60px;
          }

          .supplement-image {
            height: 130px;
          }

          .show-btn {
            padding: 6px 12px;
            font-size: 0.75rem;
            margin-top: 0.5rem;
          }

          .supplement-card h3 {
            font-size: 1rem;
            margin-bottom: 0.5rem;
          }

          .supplement-card p {
            font-size: 0.8rem !important;
          }
        }
      `}</style>

      <div className="supplement-section">
        <h2 className="supplement-title">Supplements Categories</h2>

        {/* Category Cards */}
        <div style={cardContainerStyle}>
          <div
            className="category-box"
            style={categoryBoxStyle}
            onClick={() => setActiveCategory('gain')}
          >
            <img
              src="https://th.bing.com/th/id/OIP.bFlYwXOcwM1r6ksV6GLgLAAAAA?w=170&h=180&c=7&r=0&o=7&dpr=1.1&pid=1.7&rm=3"
              alt="Weight Gain"
              className="category-image"
            />
            <h3>Weight Gain</h3>
            <p>Supplements for gaining healthy mass</p>
            <button className="show-btn">Show Supplements</button>
          </div>

          <div
            className="category-box"
            style={categoryBoxStyle}
            onClick={() => setActiveCategory('loss')}
          >
            <img
              src="https://th.bing.com/th/id/OIP.p_MCrgHPu_bquRJR56ycpwHaGG?w=259&h=213&c=7&r=0&o=7&dpr=1.1&pid=1.7&rm=3"
              alt="Weight Loss"
              className="category-image"
            />
            <h3>Weight Loss</h3>
            <p>Supplements to burn fat and lose weight</p>
            <button className="show-btn">Show Supplements</button>
          </div>

          <div
            className="category-box"
            style={categoryBoxStyle}
            onClick={() => setActiveCategory('pre')}
          >
            <img
              src="https://tse4.mm.bing.net/th/id/OIP.oyqRkehPUHkvuWRv1IiEuQHaJ3?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt="Pre Workout"
              className="category-image"
            />
            <h3>Pre Workout</h3>
            <p>Supplements for energy and focus</p>
            <button className="show-btn">Show Supplements</button>
          </div>
        </div>

        {/* Supplements List */}
        {activeCategory && (
          <div style={{ marginTop: '4rem' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>
              {activeCategory === 'gain'
                ? 'Weight Gain Supplements'
                : activeCategory === 'loss'
                ? 'Weight Loss Supplements'
                : 'Pre Workout Supplements'}
            </h2>

            <div style={cardContainerStyle}>
              {supplements[activeCategory].map((item, i) => (
                <div
                  className="supplement-card"
                  key={i}
                  style={{
                    ...supplementCardStyle,
                    animationDelay: `${i * 0.3}s`,
                    opacity: 1,
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="supplement-image"
                  />
                  <h3 style={{ color: '#0ff' }}>{item.name}</h3>
                  <p style={{ fontSize: '0.9rem', color: '#ccc' }}>{item.benefit}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Supplements;
