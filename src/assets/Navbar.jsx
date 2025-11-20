import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const navStyle = {
    display: "flex",
    background: "linear-gradient(135deg, #000000 0%, #2d0036 100%)",
    color: "white",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 2rem",
    borderBottom: "3px solid #9a20dc",
    boxShadow: "0 2px 20px rgba(154, 32, 220, 0.3)",
    position: "sticky",
    top: 0,
    zIndex: 1000
  };

  const navLogoStyle = {
    fontSize: "1.5rem",
    fontWeight: "bold",
    background: "linear-gradient(45deg, #ff6b6b, #9a20dc)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text"
  };

  const navLinksStyle = {
    display: "flex",
    gap: "2rem"
  };

  const getLinkStyle = (path) => ({
    textDecoration: "none",
    color: "#ffffff",
    fontSize: "1.1rem",
    fontWeight: "500",
    padding: "0.5rem 1rem",
    borderRadius: "5px",
    transition: "all 0.3s ease",
    position: "relative",
    background: location.pathname === path ? "linear-gradient(45deg, #9a20dc, #ff6b6b)" : "transparent",
    transform: location.pathname === path ? "translateY(-2px)" : "none"
  });

  return (
    <nav style={navStyle}>
      <div style={navLogoStyle}>
        <span>🛡️ AVENGERS</span>
      </div>

      <div style={navLinksStyle}>
        <Link to="/" style={getLinkStyle("/")}>Home</Link>
        <Link to="/about" style={getLinkStyle("/about")}>About</Link>
        <Link to="/characters" style={getLinkStyle("/characters")}>Characters</Link>
      </div>
    </nav>
  );
};

export default Navbar;