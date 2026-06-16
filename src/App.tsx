import Navbar from "./components/layout/Navbar";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <div className="relative min-h-screen bg-[#f8f8f6] overflow-hidden">

      
      <div
        className="
          absolute
          top-0
          right-0
          h-300
          w-[65%]
          bg-linear-to-br
          from-[#f3ead2]
          via-[#edeff2]
          to-[#cfe0ff]
          [clip-path:polygon(20%_0,100%_0,100%_100%,55%_100%)]
          z-0
          pointer-events-none
        "
      />

     
      <Navbar />

      <div className="relative z-10">
        <HomePage />
      </div>

    </div>
  );
}

export default App;