const Banner = () => {
  const img = "https://images.alphacoders.com/100/thumb-1920-1002901.jpg";

  const containerStyle = {
    width: "100%",
    position: "relative"
  };

  const imageContainerStyle = {
    position: "relative",
    width: "100%",
    height: "70vh",
    overflow: "hidden"
  };

  const imageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    filter: "brightness(0.7)"
  };

  const overlayStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    color: "white",
    zIndex: 2
  };

  const titleStyle = {
    fontSize: "4rem",
    marginBottom: "1rem",
    textShadow: "2px 2px 10px rgba(0, 0, 0, 0.8)",
    background: "linear-gradient(45deg, #ffffff, #9a20dc)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text"
  };

  const subtitleStyle = {
    fontSize: "1.5rem",
    textShadow: "2px 2px 5px rgba(0, 0, 0, 0.8)",
    color: "#cccccc"
  };

  return (
    <div style={containerStyle}>
      <div style={imageContainerStyle}>
        <img 
          src={img} 
          alt="Avengers Assembled" 
          style={imageStyle}
        />
        <div style={overlayStyle}>
          <h1 style={titleStyle}>AVENGERS ASSEMBLE</h1>
          <p style={subtitleStyle}>Earth's Mightiest Heroes United</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;