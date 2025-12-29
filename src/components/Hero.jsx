import React from 'react';
import { Confetti, FloatingStars } from './Effects';

const Hero = ({ onCelebrate }) => {
  const messages = [
    '🤍 Semoga Hari Istimewa Ini Penuh Kebahagiaan 🤍',
    '⭐ Wishing You The Best Birthday Ever ⭐',
    '💝 Terima kasih udah hadir di dunia ini 💝',
  ];

  const handleClick = () => {
    onCelebrate?.();
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Confetti />
      <FloatingStars />

      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 text-6xl animate-float">🎈</div>
        <div className="absolute top-20 right-20 text-5xl animate-float" style={{ animationDelay: '1s' }}>🎁</div>
        <div className="absolute bottom-32 left-1/4 text-5xl animate-float" style={{ animationDelay: '2s' }}>🎊</div>
        <div className="absolute bottom-20 right-1/4 text-6xl animate-float" style={{ animationDelay: '1.5s' }}>🎉</div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="animate-slideUp mb-6">
          <h1 className="text-6xl md:text-8xl font-bold gradient-text mb-4 drop-shadow-lg">
             Selamat Ulang Tahunnnnn!
          </h1>
          <div className="text-4xl animate-heartbeat mb-8">
            🎂
          </div>
        </div>

        <div className="space-y-4 mb-8 animate-slideUp" style={{ animationDelay: '0.2s' }}>
          {messages.map((msg, idx) => (
            <p
              key={idx}
              className="text-2xl md:text-3xl text-white font-semibold drop-shadow-lg"
              style={{
                animation: `slideUp 1s ease-out ${0.3 + idx * 0.1}s both`,
              }}
            >
              {msg}
            </p>
          ))}
        </div>

        <button
          onClick={handleClick}
          className="mt-12 px-8 py-4 bg-white text-purple-600 font-bold text-xl rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 animate-bounce"
        >
          Rayakan Bersama! 🎊
        </button>
      </div>
    </div>
  );
};

export default Hero;
