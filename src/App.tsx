import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import CreateAccountPage from "./Pages/CreateAccountPage";
import PricingPage from "./Pages/PricingPage";

function App() {
  return (
    <Routes>
      {/* Home Route */}
      <Route
        path="/"
        element={
          <div className="relative min-h-screen bg-white overflow-hidden">
            <div
              className="static-shape-blend absolute top-0 right-0 z-0 pointer-events-none"
              style={{
                width: "40%",
                height: "170vh",
                clipPath: "polygon(100% 0, 0 0, 100% 100%)",
                filter: "blur(60px)",
                opacity: 0.85,
              }}
            />

            <Navbar />

            <div className="relative z-10">
              <HomePage />
            </div>
          </div>
        }
      />

      {/* Login Route */}
      <Route path="/login" element={<LoginPage />} />

      {/* Create Account Route */}
      <Route path="/create-account" element={<CreateAccountPage />} />

      {/* Pricing Route */}
      <Route
        path="/pricing"
        element={
          <div className="relative min-h-screen bg-white overflow-hidden">
            <Navbar />

            <div className="relative z-10">
              <PricingPage />
            </div>
          </div>
        }
      />
    </Routes>
  );
}

export default App;