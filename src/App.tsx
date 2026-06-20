import Navbar from "./components/layout/Navbar";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <div className="relative min-h-screen bg-[#f8f8f6] overflow-hidden">
      
      <div
        className="static-shape-blend absolute top-0 right-0 z-0 pointer-events-none"
        style={{
          width: "40%",
          height: "170vh",
          clipPath: "polygon(100% 0, 0 0, 100% 100%)", 
          filter: "blur(60px)", 
          opacity: 0.85
        }}
      />

      <Navbar />

      <div className="relative z-10">
        <HomePage />
      </div>

    </div>
  );
}

export default App;