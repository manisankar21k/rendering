import Banner from "./Banner";
import Title from "./Title";

const Home = () => {
  const homeContentStyle = {
    textAlign: "center",
    padding: "3rem 2rem",
    background: "linear-gradient(135deg, rgba(26, 26, 46, 0.8) 0%, rgba(22, 33, 62, 0.8) 100%)"
  };

  return (
    <div style={{ minHeight: "calc(100vh - 80px)" }}>
      <Title />
      <Banner />
      <div style={homeContentStyle}>
        <h1 style={{
          fontSize: "3rem",
          marginBottom: "1rem",
          background: "linear-gradient(45deg, #ff6b6b, #9a20dc)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text"
        }}>
          Welcome to Avengers Headquarters
        </h1>
        <p style={{
          fontSize: "1.3rem",
          color: "#cccccc",
          maxWidth: "600px",
          margin: "0 auto"
        }}>
          Discover Earth's Mightiest Heroes and their incredible stories
        </p>
      </div>
    </div>
  );
};

export default Home;