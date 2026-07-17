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
    <div style={boxStyle} onClick={onClick}>
      {muscleName}
    </div>
  );
};

export default MuscleGroup;
