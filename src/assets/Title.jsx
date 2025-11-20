const Title = () => {
  const title = "AVENGERS";
  const year = "2012";

  const containerStyle = {
    background: "linear-gradient(135deg, #9a20dc 0%, #ff6b6b 100%)",
    padding: "1.5rem",
    textAlign: "center",
    boxShadow: "0 4px 20px rgba(154, 32, 220, 0.4)"
  };

  const contentStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "1rem",
    color: "#ffffff",
    fontWeight: "bold",
    letterSpacing: "3px"
  };

  const textStyle = {
    fontSize: "2rem",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)"
  };

  const yearStyle = {
    fontSize: "1.5rem",
    opacity: 0.9,
    background: "rgba(255, 255, 255, 0.2)",
    padding: "0.5rem 1rem",
    borderRadius: "25px"
  };

  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        <span style={textStyle}>{title}</span>
        <span style={yearStyle}>{year}</span>
      </div>
    </div>
  );
};

export default Title;