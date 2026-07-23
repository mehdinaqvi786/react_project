const MuscleGroup = ({ muscleName, onClick }) => {
  const boxStyle = {
    backgroundColor: "#ececec",
    padding: "1rem 2rem",
    borderRadius: "12px",
    margin: "0.5rem",
    cursor: "pointer",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    textAlign: "center",
    fontWeight: "600",
    fontSize: "1rem",
    transition: "all 0.3s ease",
  };

  return (
    <>
      <style>{`
        @media (max-width: 768px) {
          .muscle-group-box {
            padding: 0.8rem 1.5rem !important;
            font-size: 0.9rem !important;
            margin: 0.4rem !important;
          }
        }

        @media (max-width: 480px) {
          .muscle-group-box {
            padding: 0.6rem 1rem !important;
            font-size: 0.8rem !important;
            margin: 0.3rem !important;
          }
        }
      `}</style>
      <div style={boxStyle} className="muscle-group-box" onClick={onClick}>
        {muscleName}
      </div>
    </>
  );
};

export default MuscleGroup;
