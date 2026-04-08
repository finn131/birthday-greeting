import React, { useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';

export const useConfetti = () => {
  const triggerConfetti = (options = {}) => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#ff006e', '#fb5607', '#ffbe0b', '#8338ec', '#3a86ff'],
      ...options,
    });
  };

  const triggerCelebration = () => {
    // First burst
    confetti({
      particleCount: 150,
      spread: 100,
      origin: { y: 0.5 },
    });

    // Left burst
    setTimeout(() => {
      confetti({
        particleCount: 100,
        spread: 100,
        origin: { x: 0, y: 0.5 },
        angle: 60,
      });
    }, 100);

    // Right burst
    setTimeout(() => {
      confetti({
        particleCount: 100,
        spread: 100,
        origin: { x: 1, y: 0.5 },
        angle: 120,
      });
    }, 100);
  };

  return { triggerConfetti, triggerCelebration };
};

export const ConfettiComponent = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    confetti.create(canvasRef.current, { resize: true, useWorker: true });
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none" />;
};
