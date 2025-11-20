import { useState } from "react";

const Characters = () => {
  const [selectedHero, setSelectedHero] = useState(null);

  const avengersDetails = [
    {
      character: "Iron Man",
      img: "https://wallpapercat.com/w/full/1/6/a/320051-2160x3840-iphone-4k-iron-man-background.jpg",
      origin: "Earth",
      power: "Powered Armor Suit",
      description: "Genius, billionaire, playboy, philanthropist with advanced armored suits."
    },
    {
      character: "Thor",
      img: "https://i.pinimg.com/736x/94/f2/e1/94f2e17d68f60d906e8cc0322b6a7aa3.jpg",
      origin: "Asgard",
      power: "God of Thunder",
      description: "Norse god of thunder wielding the enchanted hammer Mjolnir."
    },
    {
      character: "Captain America",
      img: "https://i.pinimg.com/736x/bf/cb/fd/bfcbfd8c6728376ba41f4558b8fbcf1d.jpg",
      origin: "Earth",
      power: "Super Soldier Serum",
      description: "Super-soldier from World War II with enhanced strength and agility."
    },
    {
      character: "Spider-Man",
      img: "https://wallpapers.com/images/featured/4k-spiderman-pldtgcv0s70pp654.jpg",
      origin: "Earth",
      power: "Spider Abilities",
      description: "Teenager with spider-like abilities including wall-crawling and web-shooting."
    },
    {
      character: "Wanda Maximoff",
      img: "https://i.pinimg.com/736x/57/55/d2/5755d2ef66014913a37b475d06df4707.jpg",
      origin: "Earth",
      power: "Chaos Magic",
      description: "Powerful sorceress with reality-warping abilities and chaos magic."
    },
    {
      character: "Doctor Strange",
      img: "https://wallpapers.com/images/featured/doctor-strange-6es4yutxrbl0nas9.jpg",
      origin: "Earth",
      power: "Mystic Arts",
      description: "Former neurosurgeon turned Master of the Mystic Arts."
    },
    {
      character: "Hulk",
      img: "https://wallpapercat.com/w/full/9/7/6/79564-3840x2160-desktop-4k-hulk-background-photo.jpg",
      origin: "Earth",
      power: "Gamma Radiation",
      description: "Scientist who transforms into a giant green behemoth when angered."
    }
  ];

  const containerStyle = {
    maxWidth: "1400px",
    margin: "0 auto",
    padding: "2rem",
    minHeight: "calc(100vh - 80px)"
  };

  const headerStyle = {
    textAlign: "center",
    marginBottom: "3rem"
  };

  const titleStyle = {
    fontSize: "3rem",
    background: "linear-gradient(45deg, #ff6b6b, #9a20dc)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    marginBottom: "0.5rem"
  };

  const subtitleStyle = {
    fontSize: "1.2rem",
    color: "#cccccc"
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "2rem",
    padding: "1rem 0"
  };

  const cardStyle = {
    background: "linear-gradient(135deg, rgba(154, 32, 220, 0.1) 0%, rgba(255, 107, 107, 0.1) 100%)",
    borderRadius: "15px",
    overflow: "hidden",
    transition: "all 0.3s ease",
    border: "1px solid rgba(154, 32, 220, 0.3)",
    backdropFilter: "blur(10px)"
  };

  const imageStyle = {
    width: "100%",
    height: "300px",
    objectFit: "cover",
    transition: "transform 0.3s ease"
  };

  const cardContentStyle = {
    padding: "1.5rem",
    position: "relative",
    zIndex: 2
  };

  const characterNameStyle = {
    fontSize: "1.5rem",
    marginBottom: "1rem",
    color: "#ffffff",
    textAlign: "center"
  };

  const characterInfoStyle = {
    marginBottom: "1rem"
  };

  const infoTextStyle = {
    marginBottom: "0.5rem",
    color: "#cccccc"
  };

  const strongStyle = {
    color: "#9a20dc"
  };

  const buttonStyle = {
    width: "100%",
    padding: "12px 24px",
    background: "linear-gradient(45deg, #9a20dc, #ff6b6b)",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "all 0.3s ease",
    fontSize: "1rem"
  };

  const modalOverlayStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "rgba(0, 0, 0, 0.8)",
    backdropFilter: "blur(5px)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 2000,
    padding: "2rem"
  };

  const modalContentStyle = {
    background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
    borderRadius: "20px",
    padding: "2rem",
    maxWidth: "500px",
    width: "100%",
    position: "relative",
    border: "2px solid #9a20dc",
    boxShadow: "0 20px 60px rgba(154, 32, 220, 0.3)"
  };

  const closeButtonStyle = {
    position: "absolute",
    top: "1rem",
    right: "1rem",
    background: "none",
    border: "none",
    color: "white",
    fontSize: "2rem",
    cursor: "pointer",
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "background 0.3s ease"
  };

  const modalImageStyle = {
    width: "100%",
    height: "300px",
    objectFit: "cover",
    borderRadius: "10px",
    marginBottom: "1.5rem"
  };

  const modalTitleStyle = {
    fontSize: "2rem",
    marginBottom: "1rem",
    background: "linear-gradient(45deg, #ff6b6b, #9a20dc)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    textAlign: "center"
  };

  const modalDescriptionStyle = {
    fontStyle: "italic",
    marginTop: "1rem",
    paddingTop: "1rem",
    borderTop: "1px solid rgba(154, 32, 220, 0.3)"
  };

  const handleKnowMore = (hero) => {
    setSelectedHero(hero);
  };

  const closeModal = () => {
    setSelectedHero(null);
  };

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <h1 style={titleStyle}>Meet The Avengers</h1>
        <p style={subtitleStyle}>Earth's Mightiest Heroes</p>
      </div>

      <div style={gridStyle}>
        {avengersDetails.map((hero, index) => (
          <div
            key={index}
            style={cardStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-10px)";
              e.currentTarget.style.boxShadow = "0 20px 40px rgba(154, 32, 220, 0.3)";
              e.currentTarget.style.borderColor = "#9a20dc";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
              e.currentTarget.style.borderColor = "rgba(154, 32, 220, 0.3)";
            }}
          >
            <div style={{ position: "relative", overflow: "hidden" }}>
              <img
                src={hero.img}
                alt={hero.character}
                style={imageStyle}
                onMouseEnter={(e) => e.target.style.transform = "scale(1.1)"}
                onMouseLeave={(e) => e.target.style.transform = "scale(1)"}
              />
              <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: "linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.8) 100%)",
                opacity: 0.7
              }}></div>
            </div>
            
            <div style={cardContentStyle}>
              <h2 style={characterNameStyle}>{hero.character}</h2>
              <div style={characterInfoStyle}>
                <p style={infoTextStyle}><span style={strongStyle}>Origin:</span> {hero.origin}</p>
                <p style={infoTextStyle}><span style={strongStyle}>Power:</span> {hero.power}</p>
              </div>
              <button
                style={buttonStyle}
                onMouseEnter={(e) => {
                  e.target.style.transform = "translateY(-2px)";
                  e.target.style.boxShadow = "0 5px 15px rgba(154, 32, 220, 0.4)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "translateY(0)";
                  e.target.style.boxShadow = "none";
                }}
                onClick={() => handleKnowMore(hero)}
              >
                Know More
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedHero && (
        <div style={modalOverlayStyle} onClick={closeModal}>
          <div style={modalContentStyle} onClick={(e) => e.stopPropagation()}>
            <button 
              style={closeButtonStyle}
              onMouseEnter={(e) => e.target.style.background = "rgba(255, 255, 255, 0.1)"}
              onMouseLeave={(e) => e.target.style.background = "none"}
              onClick={closeModal}
            >
              ×
            </button>
            <img
              src={selectedHero.img}
              alt={selectedHero.character}
              style={modalImageStyle}
            />
            <div>
              <h2 style={modalTitleStyle}>{selectedHero.character}</h2>
              <p style={infoTextStyle}><span style={strongStyle}>Origin:</span> {selectedHero.origin}</p>
              <p style={infoTextStyle}><span style={strongStyle}>Power:</span> {selectedHero.power}</p>
              <p style={{...infoTextStyle, ...modalDescriptionStyle}}>{selectedHero.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Characters;