import { Route, Routes } from 'react-router-dom';
import Navbar from "./assets/Navbar";
import Home from "./assets/Home";
import About from "./assets/About";
import Characters from "./assets/Characters";

const App = () => {
  const appStyle = {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #0c0c0c 0%, #1a1a2e 50%, #16213e 100%)',
    fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
    color: '#ffffff'
  };

  return (
    <div style={appStyle}>
      <Navbar />
      <main style={{ minHeight: 'calc(100vh - 80px)' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/characters" element={<Characters />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;