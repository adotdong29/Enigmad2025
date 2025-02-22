// src/contexts/GameContext.js
import React, { createContext, useReducer, useContext } from 'react';
import { levels } from '../data/levels';

export const GameContext = createContext();

const initialState = {
  currentLevel: 0,
  selectedDots: new Set(),
  encryptedMessage: levels[0].encryptedMessage,
  decryptionKey: '',
  isRunning: false,
  showSolution: false,
  userAnswer: '',
  score: 0,
  timeSpent: 0,
  errors: 0,
  gameComplete: false,
  showSuccess: false,
  isTransitioning: false,
  enterAnimation: false
};

const gameReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_DOT':
      const newDots = new Set(state.selectedDots);
      const dotId = `${action.row}-${action.col}`;
      if (newDots.has(dotId)) {
        newDots.delete(dotId);
      } else {
        newDots.add(dotId);
      }
      return { ...state, selectedDots: newDots };

    case 'START_BOMBE':
      return { 
        ...state, 
        isRunning: true,
        showSolution: false,
        decryptionKey: ''
      };

    case 'FINISH_BOMBE':
      return {
        ...state,
        isRunning: false,
        showSolution: true,
        decryptionKey: action.key
      };

    case 'SET_USER_ANSWER':
      return {
        ...state,
        userAnswer: action.answer
      };

    case 'ANSWER_CORRECT':
      return {
        ...state,
        score: state.score + action.score
      };

    case 'ANSWER_INCORRECT':
      return {
        ...state,
        errors: state.errors + 1
      };

    case 'SHOW_SUCCESS':
      return {
        ...state,
        showSuccess: true
      };

    case 'START_TRANSITION':
      return {
        ...state,
        isTransitioning: true,
        showSuccess: false
      };

    case 'END_TRANSITION':
      return {
        ...state,
        isTransitioning: false,
        enterAnimation: true
      };

    case 'NEXT_LEVEL':
      return {
        ...state,
        currentLevel: state.currentLevel + 1,
        selectedDots: new Set(),
        encryptedMessage: action.message,
        decryptionKey: '',
        isRunning: false,
        showSolution: false,
        userAnswer: '',
        enterAnimation: false
      };

    case 'GAME_COMPLETE':
      return {
        ...state,
        gameComplete: true
      };

    default:
      return state;
  }
};

export const GameProvider = ({ children }) => {
  const [state, dispatch] = useReducer(gameReducer, initialState);

  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGameState = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGameState must be used within a GameProvider');
  }
  return context;
};