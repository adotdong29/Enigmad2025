import React from 'react';

const SuccessOverlay = ({ show }) => {
  if (!show) return null;
  
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 animate-success-fade">
      <div className="text-6xl font-bold text-[#2E7D32] enigma-font animate-success-bounce">
        Correct!
      </div>
    </div>
  );
};

export default SuccessOverlay;