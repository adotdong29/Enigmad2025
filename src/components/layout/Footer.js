import React from 'react';
import { Heart, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="mt-12 pb-6 text-center text-gray-600">
      <div className="mb-4">
        <p className="text-sm">
          Based on the historical Bombe machine used at Bletchley Park
        </p>
        <p className="text-sm mt-1">
          Created for educational purposes
        </p>
      </div>

      <div className="flex items-center justify-center gap-2 text-sm">
        <span>Made with</span>
        <Heart size={16} className="text-red-500" />
        <span>for history and cryptography</span>
      </div>

      <div className="mt-4">
        <a
          href="https://github.com/adotdong29/Enigmad2025"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-800"
        >
          <Github size={16} />
          <span>View on GitHub</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;