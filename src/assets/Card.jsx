const Card = () => {
  const avengersDetails = [
    {
      character: "Iron Man",
      img: "https://wallpapercat.com/w/full/1/6/a/320051-2160x3840-iphone-4k-iron-man-background.jpg",
      origin: "Earth",
      power: "Powered Armor Suit"
    },
    {
      character: "Thor",
      img: "https://i.pinimg.com/736x/94/f2/e1/94f2e17d68f60d906e8cc0322b6a7aa3.jpg",
      origin: "Asgard",
      power: "God of Thunder"
    },
    {
      character: "Captain America",
      img: "https://i.pinimg.com/736x/bf/cb/fd/bfcbfd8c6728376ba41f4558b8fbcf1d.jpg",
      origin: "Earth",
      power: "Super Soldier Serum"
    },
    {
      character: "Spiderman",
      img: "https://wallpapers.com/images/featured/4k-spiderman-pldtgcv0s70pp654.jpg",
      origin: "Earth",
      power: "Spider"
    },
    {
      character: "Wanda",
      img: "https://i.pinimg.com/736x/57/55/d2/5755d2ef66014913a37b475d06df4707.jpg",
      origin: "Earth",
      power: "Mutant"
    },
    {
      character: "Doctor strange",
      img: "https://wallpapers.com/images/featured/doctor-strange-6es4yutxrbl0nas9.jpg",
      origin: "Earth",
      power: "Magics"
    },
    {
      character: "Hulk",
      img: "https://wallpapercat.com/w/full/9/7/6/79564-3840x2160-desktop-4k-hulk-background-photo.jpg",
      origin: "Earth",
      power: "gamma radiation"
    }
  ];

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '20px',
        padding: '20px',
        flexWrap: 'wrap',
      }}
    >
      {avengersDetails.map((hero, index) => (
        <div
          key={index}
          style={{
            padding: '15px',
            width: '260px',
            borderRadius: '12px',
            backgroundColor: 'rgb(154, 32, 220)', // Card color
            color: 'white',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.25)',
            transition: 'transform 0.25s',
            cursor: 'pointer',
            textAlign: 'center',
          }}
          onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
          onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          <img
            src={hero.img}
            alt={hero.character}
            style={{
              width: '100%',
              height: '300px',
              objectFit: 'cover',
              borderRadius: '10px',
              marginBottom: '10px',
            }}
          />
          <h2>{hero.character}</h2>
          <p><strong>Origin:</strong> {hero.origin}</p>
          <p><strong>Power:</strong> {hero.power}</p>
          <button
            style={{
              marginTop: '10px',
              padding: '10px 12px',
              borderRadius: '5px',
              backgroundColor: 'white',
              color: 'rgb(154, 32, 220)', // Text in hero color
              fontWeight: 'bold',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Know More
          </button>
        </div>
      ))}
    </div>
  );
};

export default Card;
