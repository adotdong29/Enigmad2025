import { useState, useCallback } from 'react';
import { encryption } from '../utils/encryption';

export const useBombeMachine = () => {
  const [rotorPositions, setRotorPositions] = useState([0, 0, 0]);
  const [plugboardConnections, setPlugboardConnections] = useState(new Map());

  const setRotor = useCallback((index, position) => {
    setRotorPositions(prev => {
      const newPositions = [...prev];
      newPositions[index] = position;
      return newPositions;
    });
  }, []);

  const addPlugboardConnection = useCallback((from, to) => {
    setPlugboardConnections(prev => {
      const newConnections = new Map(prev);
      newConnections.set(from.toUpperCase(), to.toUpperCase());
      newConnections.set(to.toUpperCase(), from.toUpperCase());
      return newConnections;
    });
  }, []);

  const removePlugboardConnection = useCallback((letter) => {
    setPlugboardConnections(prev => {
      const newConnections = new Map(prev);
      const connected = newConnections.get(letter.toUpperCase());
      if (connected) {
        newConnections.delete(letter.toUpperCase());
        newConnections.delete(connected);
      }
      return newConnections;
    });
  }, []);

  const processMessage = useCallback((message, isEncryption = true) => {
    const processFunction = isEncryption ? 
      encryption.encrypt : 
      encryption.decrypt;

    return processFunction(
      message,
      rotorPositions,
      plugboardConnections
    );
  }, [rotorPositions, plugboardConnections]);

  return {
    rotorPositions,
    plugboardConnections,
    setRotor,
    addPlugboardConnection,
    removePlugboardConnection,
    encryptMessage: (message) => processMessage(message, true),
    decryptMessage: (message) => processMessage(message, false)
  };
};