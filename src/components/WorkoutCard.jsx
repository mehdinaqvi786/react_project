const WorkoutCard = ({ title, description, imageUrl }) => {
  const cardStyle = {
    border: "1px solid #ccc",
    borderRadius: "10px",
    padding: "1rem",
    margin: "1rem",
    maxWidth: "350px",
    backgroundColor: "#fff",
    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
  };

  const titleStyle = {
    fontSize: "1.2rem",
    fontWeight: "bold",
    marginBottom: "0.5rem",
  };

  const descriptionStyle = {
    fontSize: "0.95rem",
    color: "#333",
    height: "80px",
    overflow: "auto",
  };

  const imageStyle = {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    borderRadius: "8px",
    marginBottom: "0.5rem",
  };

  return (
    <div style={cardStyle}>
      {imageUrl && <img src={imageUrl} alt={title} style={imageStyle} />}
      <h3 style={titleStyle}>{title}</h3>
      <div
        style={descriptionStyle}
        dangerouslySetInnerHTML={{
          __html: description || "<em>Description not available.</em>",
        }}
      />
    </div>
  );
};

export default WorkoutCard;
