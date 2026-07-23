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
    <>
      <style>{`
        @media (max-width: 768px) {
          .workout-card-container {
            margin: 0.5rem !important;
            padding: 0.8rem !important;
            max-width: 100% !important;
          }

          .workout-card-title {
            font-size: 1rem !important;
          }

          .workout-card-image {
            height: 150px !important;
          }

          .workout-card-description {
            font-size: 0.85rem !important;
            height: 70px !important;
          }
        }

        @media (max-width: 480px) {
          .workout-card-container {
            margin: 0.5rem auto !important;
            padding: 0.6rem !important;
            width: 90% !important;
            max-width: 280px !important;
          }

          .workout-card-title {
            font-size: 0.9rem !important;
          }

          .workout-card-image {
            height: 120px !important;
          }

          .workout-card-description {
            font-size: 0.8rem !important;
            height: 60px !important;
          }
        }
      `}</style>
      <div style={cardStyle} className="workout-card-container">
        {imageUrl && <img src={imageUrl} alt={title} style={imageStyle} className="workout-card-image" />}
        <h3 style={titleStyle} className="workout-card-title">{title}</h3>
        <div
          style={descriptionStyle}
          className="workout-card-description"
          dangerouslySetInnerHTML={{
            __html: description || "<em>Description not available.</em>",
          }}
        />
      </div>
    </>
  );
};

export default WorkoutCard;
