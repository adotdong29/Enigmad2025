import React, { useEffect, useCallback } from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import BombeBoard from '../game/BombeBoard';
import MessageDisplay from '../game/MessageDisplay';
import DecryptionInput from '../game/DecryptionInput';
import Instructions from '../game/Instructions';
import AnimatedBackground from '../shared/AnimatedBackground';
import { useGameState } from '../../contexts/GameContext';

const Game = () => {
  const { state, dispatch } = useGameState();

  const startAnimation = useCallback(() => {
    setTimeout(() => {
      dispatch({ type: 'END_TRANSITION' });
    }, 100);
  }, [dispatch]);

  useEffect(() => {
    startAnimation();
  }, [startAnimation]);

  return (
    <div className="min-h-screen bg-[#DDC0A4] relative overflow-hidden">
      <AnimatedBackground />
      
      {/* Success overlay */}
      {state.showSuccess && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-white bg-opacity-90 success-overlay">
          <div className="text-6xl font-bold text-green-600 animate-bounce">
            Correct!
          </div>
        </div>
      )}

      {/* Main content with cascading animations */}
      <div className="relative z-10 py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className={`space-y-8 ${state.isTransitioning ? 'opacity-0 translate-y-10' : 'opacity-100 translate-y-0'} 
            transition-all duration-500 ease-out`}>
            <div style={{ transform: 'translate3d(0,0,0)' }} className="transform transition-all duration-500 delay-[100ms]">
              <Header />
            </div>
            <div style={{ transform: 'translate3d(0,0,0)' }} className="transform transition-all duration-500 delay-[200ms]">
              <Instructions />
            </div>
            <div style={{ transform: 'translate3d(0,0,0)' }} className="transform transition-all duration-500 delay-[300ms]">
              <MessageDisplay />
            </div>
            <div style={{ transform: 'translate3d(0,0,0)' }} className="transform transition-all duration-500 delay-[400ms]">
              <BombeBoard />
            </div>
            <div style={{ transform: 'translate3d(0,0,0)' }} className="transform transition-all duration-500 delay-[500ms]">
              <DecryptionInput />
            </div>
            <div style={{ transform: 'translate3d(0,0,0)' }} className="transform transition-all duration-500 delay-[600ms]">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;