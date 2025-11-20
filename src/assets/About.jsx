const About = () => {
  const containerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "3rem 2rem",
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
    marginBottom: "1rem"
  };

  const accentLineStyle = {
    width: "100px",
    height: "4px",
    background: "linear-gradient(45deg, #ff6b6b, #9a20dc)",
    margin: "0 auto",
    borderRadius: "2px"
  };

  const contentStyle = {
    background: "rgba(255, 255, 255, 0.05)",
    backdropFilter: "blur(10px)",
    borderRadius: "15px",
    padding: "2.5rem",
    border: "1px solid rgba(154, 32, 220, 0.3)",
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)"
  };

  const textStyle = {
    fontSize: "1.1rem",
    lineHeight: "1.8",
    marginBottom: "1.5rem",
    color: "#e0e0e0",
    textAlign: "justify"
  };

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <h1 style={titleStyle}>About The Avengers</h1>
        <div style={accentLineStyle}></div>
      </div>
      
      <div style={contentStyle}>
        <p style={textStyle}>
          The Avengers are a team of superheroes and the protagonists of the Marvel 
          Cinematic Universe (MCU) media franchise, based on the eponymous team from 
          Marvel Comics created by Stan Lee and Jack Kirby in 1963. Founded by 
          S.H.I.E.L.D. director Nick Fury, the team is a United States–based organization 
          composed primarily of superpowered and gifted individuals, described as 
          "Earth's Mightiest Heroes", who are committed to the world's protection from 
          a variety of threats.
        </p>
        
        <p style={textStyle}>
          The Avengers are depicted as operating in the state of New York: originally 
          from the Avengers Tower in Midtown Manhattan and subsequently in the Avengers 
          Compound in Upstate New York. Arranged as an ensemble of core MCU characters 
          originally consisting of Tony Stark / Iron Man, Steve Rogers / Captain America, 
          Thor Odinson, Bruce Banner / Hulk, Natasha Romanoff / Black Widow, and Clint 
          Barton / Hawkeye, it later expands to include 16 total members.
        </p>
        
        <p style={textStyle}>
          Regarded as an important part of the franchise, they are central to the MCU's 
          first 23 films, collectively known as the Infinity Saga. Avengers teams from 
          alternate universes were depicted in subsequent MCU properties across the 
          Multiverse Saga, including appearances in the Disney+ animated series What If...? 
          (2021–2024) and Doctor Strange in the Multiverse of Madness (2022). A new 
          incarnation of the Avengers is set to return in Avengers: Doomsday (2026) and 
          Avengers: Secret Wars (2027). Both films will be part of the MCU's Phase Six, 
          concluding the Multiverse Saga.
        </p>
      </div>
    </div>
  );
};

export default About;