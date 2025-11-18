import Navbar from "./assets/Navbar";
import Banner from "./assets/Banner";
import Card from "./assets/Card";
import Multi from "./assets/Multi";

const App = ()=>{
  const title = "AVENGERS"
  return(
    <>
    <div style={{background:"black"}}>
  
   <Navbar/>
   <Banner/>
  <p style={{ background: "rgb(154,32,220)",color: "white"}}>The {title} are a team of superheroes and the protagonists of the Marvel Cinematic Universe (MCU) media franchise, based on the eponymous team from Marvel Comics created by Stan Lee and Jack Kirby in 1963. Founded by S.H.I.E.L.D. director Nick Fury, the team is a United States–based organization composed primarily of superpowered and gifted individuals, described as "Earth's Mightiest Heroes", who are committed to the world's protection from a variety of threats.

The {title} are depicted as operating in the state of New York: originally from the {title} Tower in Midtown Manhattan and subsequently in the Avengers Compound in Upstate New York. Arranged as an ensemble of core MCU characters originally consisting of Tony Stark / Iron Man, Steve Rogers / Captain America, Thor Odinson, Bruce Banner / Hulk, Natasha Romanoff / Black Widow, and Clint Barton / Hawkeye, it later expands to include 16 total members.

Regarded as an important part of the franchise, they are central to the MCU's first 23 films, collectively known as the Infinity Saga.{title} teams from alternate universes were depicted in subsequent MCU properties across the Multiverse Saga, including appearances in the Disney+ animated series What If...? (2021–2024) and Doctor Strange in the Multiverse of Madness (2022). A new incarnation of the Avengers is set to return in Avengers: Doomsday (2026) and Avengers: Secret Wars (2027). Both films will be part of the MCU's Phase Six, concluding the Multiverse Saga.</p>
   
     <Card/>
     <Multi/>
     </div>
    </>

  )
}

export default App;