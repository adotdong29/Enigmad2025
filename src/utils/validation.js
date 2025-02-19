import { levels } from '../data/levels';

export const validation = {
  checkPattern: (selectedDots, levelIndex) => {
    const level = levels[levelIndex];
    const requiredDots = new Set(level.requiredDots);
    return requiredDots.size === selectedDots.size && 
           [...requiredDots].every(dot => selectedDots.has(dot));
  },

  checkAnswer: (userAnswer, levelIndex) => {
    const level = levels[levelIndex];
    return userAnswer.toUpperCase() === level.correctMessage;
  }
};

// src/utils/helpers.js
export const helpers = {
  formatTime: (ms) => {
    const seconds = Math.floor(ms / 1000);
    const minutes = Math.floor(seconds / 60);
    return `${minutes}:${(seconds % 60).toString().padStart(2, '0')}`;
  },
  
  calculateScore: (timeSpent, patternSize) => {
    const baseScore = 100;
    const timeBonus = timeSpent < 60000 ? 50 : 0;  // Bonus for solving under 1 minute
    const efficiencyBonus = patternSize <= 3 ? 25 : 0;  // Bonus for minimal patterns
    return baseScore + timeBonus + efficiencyBonus;
  }
};