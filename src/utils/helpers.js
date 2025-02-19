import { gameConfig } from '../constants/gameConfig';

export const helpers = {
  formatTime: (milliseconds) => {
    const seconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  },
  
  calculateScore: (timeSpent, patternSize) => {
    const { basePoints, timeBonus, patternEfficiencyBonus } = gameConfig.scoring;
    let score = basePoints;
    
    // Add time bonus if solved quickly
    if (timeSpent < 60000) { // Under 1 minute
      score += timeBonus;
    }
    
    // Add efficiency bonus for minimal patterns
    if (patternSize <= 3) {
      score += patternEfficiencyBonus;
    }
    
    return score;
  },
  
  shuffleArray: (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  },
  
  generateRandomKey: () => {
    const direction = Math.random() < 0.5 ? 'left' : 'right';
    const shift = Math.floor(Math.random() * 25) + 1;
    return `${direction} shift ${shift}`;
  }
};