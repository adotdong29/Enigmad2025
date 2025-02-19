import React from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import BombeBoard from '../game/BombeBoard';
import MessageDisplay from '../game/MessageDisplay';
import DecryptionInput from '../game/DecryptionInput';
import Instructions from '../game/Instructions';

const Game = () => {
  return (
    <div className="min-h-screen bg-[#DDC0A4] py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <Header />
        <Instructions />
        <MessageDisplay />
        <BombeBoard />
        <DecryptionInput />
        <Footer />
      </div>
    </div>
  );
};

export default Game;