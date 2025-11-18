const Navbar = () => {
  const title = "AVENGERS";
  const year = "2012"; 

  return (
    <>
      <nav
        style={{
          backgroundColor: "rgb(154, 32, 220)", 
          display: "flex",
          height: "30px",
          justifyContent: "center",
          padding: "15px",
          color: "#fff",
          fontSize: "24px",
          fontWeight: "bold",
          letterSpacing: "3px",
        }}
      >
        {title} {year ? `(${year})` : ""}
      </nav>
    </>
  );
};

export default Navbar;
