import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AnimatedBackground from '../shared/AnimatedBackground';

const Home = () => {
  const [showCredits, setShowCredits] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => setShowCredits(true), 1000);
    setTimeout(() => setShowButton(true), 2000);
  }, []);

  const handleStart = () => {
    setShowButton(false);
    setShowCredits(false);
    setTimeout(() => {
      navigate('/game');
    }, 500);
  };

  return (
    <div className="min-h-screen bg-[#DDC0A4] relative overflow-hidden">
      <AnimatedBackground />
      <div className="relative z-10 h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-7xl font-bold text-[#2C1810] mb-8 enigma-font slide-in">
            Enigmad
          </h1>
          
          <div className={`text-xl text-[#2C1810] mb-12 transition-opacity duration-1000 enigma-font
            ${showCredits ? 'opacity-100' : 'opacity-0'}`}>
            created by Andy Dong
          </div>
          
          <button
            onClick={handleStart}
            className={`px-8 py-3 bg-[#8B4513] text-[#F5E6D3] text-xl rounded-lg 
              hover:bg-[#D35400] transition-all duration-300
              shadow-lg hover:shadow-xl
              ${showButton ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'}`}
          >
            Start Game
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;