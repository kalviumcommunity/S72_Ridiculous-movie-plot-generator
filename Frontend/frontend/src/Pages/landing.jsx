import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate=useNavigate()
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-600 to-pink-500 flex flex-col items-center justify-center text-white">
        <h1 className="text-5xl font-extrabold text-center mb-6">
          Ridiculous Movie Plot Generator 🎬
        </h1>
        
        <p className="text-lg text-center max-w-2xl">
          Discover the most absurd movie plots ever imagined. Rate, review, and laugh at the ridiculousness!
        </p>
  
        <div className="mt-8">
          <button 
          onClick={()=>navigate("/movieplot")}
          className="bg-yellow-400 text-black px-6 py-3 font-bold text-lg rounded-lg shadow-lg hover:bg-yellow-500 transition">
            Explore Now
          </button>
        </div>
      </div>
    );
  }
  