import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [showCredits, setShowCredits] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => setShowCredits(true), 1000);
    setTimeout(() => setShowButton(true), 2000);
  }, []);

  return (
    <div className="min-h-screen bg-[#DDC0A4] relative overflow-hidden">
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 5}s`
            }}
          >
            <div className="w-4 h-4 rotate-45 border-2 border-[#8B4513] opacity-20" />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h1 className="text-7xl font-bold text-[#2C1810] mb-8 enigma-font animate-fade-in">
          Enigmad
        </h1>
        
        <div className={`text-xl text-[#2C1810] mb-12 transition-opacity duration-1000 enigma-font
          ${showCredits ? 'opacity-100' : 'opacity-0'}`}>
          created by Andy Dong
        </div>
        
        <button
          onClick={() => navigate('/game')}
          className={`px-8 py-3 bg-[#8B4513] text-[#F5E6D3] text-xl rounded-lg 
            hover:bg-[#D35400] transition-all duration-300
            shadow-lg hover:shadow-xl
            ${showButton ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'}`}
        >
          Start Game
        </button>
      </div>
    </div>
  );
};

export default Home;