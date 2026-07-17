import React, { useState, useEffect, useRef } from "react";

const About = () => {
  const [activeTab, setActiveTab] = useState("mission");
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    section.classList.add("animate-load");
  }, []);

  const section = {
    padding: "5rem 0",
    background: "linear-gradient(135deg, #0f0c29, #302b63, #24243e)",
    color: "#fff",
    fontFamily: "Roboto, sans-serif",
    opacity: 0,
    transform: "translateY(30px)",
    transition: "opacity 1s ease, transform 1s ease",
  };

  const container = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 1.5rem",
    display: "flex",
    flexWrap: "wrap",
    gap: "2rem",
  };

  const leftCol = { flex: "1 1 500px", minWidth: 0 };
  const rightCol = {
    flex: "1 1 500px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const headingSm = {
    color: "#0ff",
    marginBottom: "1rem",
    fontWeight: "bold",
    fontSize: "1.5rem",
    textShadow: "0 0 10px #0ff",
  };

  const headingLg = {
    fontSize: "2.5rem",
    fontWeight: "bold",
    marginBottom: "1.5rem",
    textShadow: "0 0 5px #0ff, 0 0 10px #0ff",
    animation: "typewriter 6s steps(40, end) infinite",
    whiteSpace: "nowrap",
    overflow: "hidden",
    borderRight: "2px solid #0ff",
  };

  const tabBar = {
    display: "flex",
    flexWrap: "wrap",
    margin: "2rem 0",
    gap: "1rem",
  };

  const tabBtn = (tab) => ({
    padding: "0.7rem 1.5rem",
    borderRadius: "50px",
    border: "none",
    cursor: "pointer",
    fontWeight: "bold",
    background: activeTab === tab ? "#0ff" : "#1a1a2e",
    color: activeTab === tab ? "#000" : "#0ff",
    boxShadow: "0 0 10px #0ff",
    transition: "0.3s",
  });

  const tabPanel = {
    background: "#1a1a2e",
    borderRadius: "10px",
    padding: "1.5rem",
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    boxShadow: "0 0 15px #0ff44c",
  };

  const btnPrimary = {
    background: "transparent",
    border: "2px solid #0ff",
    padding: "0.9rem 2.4rem",
    borderRadius: "30px",
    color: "#0ff",
    fontWeight: 600,
    cursor: "pointer",
    textTransform: "uppercase",
    letterSpacing: "1px",
    boxShadow: "0 0 15px #0ff",
    transition: "0.3s",
  };

  const callBox = {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    marginTop: "2.5rem",
  };

  const phoneIconBox = {
    background: "#0ff",
    color: "#000",
    width: "65px",
    height: "65px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "1.5rem",
    position: "relative",
    boxShadow: "0 0 15px #0ff",
    animation: "pulse 2s infinite",
  };

  const phoneNotif = {
    position: "absolute",
    top: "4px",
    right: "4px",
    color: "#000",
    fontSize: "0.8rem",
  };

  const imgStyle = {
    width: "100%",
    borderRadius: "12px",
    boxShadow: "0 0 20px #0ff",
    transition: "transform 0.4s ease",
  };

  const tabContent = {
    mission: `"Empowering every individual to achieve their fitness potential."`,
    vision: "Creating a healthier world, one workout at a time.",
    goal: "Fostering a welcoming and motivating gym culture.",
  };

  return (
    <>
      <style>{`
        @keyframes pulse {
          0% { box-shadow: 0 0 10px #0ff; }
          50% { box-shadow: 0 0 25px #0ff; }
          100% { box-shadow: 0 0 10px #0ff; }
        }

        @keyframes typewriter {
          0% { width: 0 }
          50% { width: 100% }
          100% { width: 0 }
        }

        .btn-neon:hover,
        .tab-btn:hover {
          background-color: #0ff !important;
          color: #000 !important;
          transform: scale(1.08);
        }

        .about-img:hover {
          transform: scale(1.05);
        }

        .animate-load {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>

      <section ref={sectionRef} style={section} id="about">
        <div style={container}>
          <div style={leftCol}>
            <h4 style={headingSm}>✨ About Fitness Center ✨</h4>
            <h2 style={headingLg}>Build Your Dream Body With Us.</h2>
            <p style={{ marginBottom: "1.5rem" }}>
              “Choose us for a supportive, results‑driven fitness experience that transforms your goals into reality.”
            </p>

            <div style={tabBar}>
              <button
                style={tabBtn("mission")}
                onClick={() => setActiveTab("mission")}
                className="tab-btn"
              >
                Our Mission
              </button>
              <button
                style={tabBtn("vision")}
                onClick={() => setActiveTab("vision")}
                className="tab-btn"
              >
                Our Vision
              </button>
              <button
                style={tabBtn("goal")}
                onClick={() => setActiveTab("goal")}
                className="tab-btn"
              >
                Our Goal
              </button>
            </div>

            <div style={tabPanel}>
              <i className="fas fa-bolt fa-2x" style={{ color: "#0ff" }} />
              <p style={{ margin: 0 }}>{tabContent[activeTab]}</p>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem", marginTop: "2.5rem" }}>
              <button className="btn-neon" style={btnPrimary}>
                Make Appointment
              </button>

              <div style={callBox}>
                <div style={phoneIconBox}>
                  <img src="https://cdn-icons-png.flaticon.com/512/126/126341.png" alt="call" width="32" />
                  <span style={phoneNotif}><i className="fa fa-comment-dots" /></span>
                </div>
                <div>
                  <small>Call our experts</small><br />
                  <a href="tel:+92345678901" style={{ color: "#0ff", fontWeight: 600, textDecoration: "none" }}>
                    Free: +92 345 678901
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div style={rightCol}>
            <img
              src="https://th.bing.com/th/id/OIP.m0niyFe9jFpePGcTE7v0tgHaEO"
              alt="About us"
              style={imgStyle}
              className="about-img"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
