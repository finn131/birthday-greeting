import React, { useState } from 'react';

export const BirthdayCard = ({ name, message, onOpen }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    onOpen?.();
  };

  return (
    <div className="perspective h-80 w-full max-w-md cursor-pointer">
      <div
        className={`relative w-full h-full transition-transform duration-1000 transform-gpu`}
        style={{
          transformStyle: 'preserve-3d',
          transform: isOpen ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
        onClick={handleOpen}
      >
        {/* Front of card */}
        <div
          className="absolute w-full h-full bg-gradient-to-br from-pink-400 via-purple-400 to-indigo-500 rounded-2xl shadow-2xl p-8 flex flex-col justify-center items-center text-white"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="text-6xl mb-4 animate-bounce">🎂</div>
          <h2 className="text-3xl font-bold text-center mb-2">Happy Birthday!</h2>
          <p className="text-sm text-center opacity-90">Click to open</p>
        </div>

        {/* Back of card */}
        <div
          className="absolute w-full h-full bg-gradient-to-br from-yellow-300 via-pink-300 to-red-400 rounded-2xl shadow-2xl p-8 flex flex-col justify-center items-center text-white"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <div className="text-center">
            <h3 className="text-4xl font-bold mb-4 drop-shadow-lg">{name}</h3>
            <p className="text-lg leading-relaxed drop-shadow-md">{message}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const GiftBox = ({ onOpen }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
    onOpen?.();
  };

  return (
    <div
      className="relative w-32 h-32 cursor-pointer"
      onClick={handleClick}
    >
      {/* Box body */}
      <div
        className={`w-full h-20 bg-gradient-to-b from-red-400 to-red-600 rounded transition-transform duration-500 shadow-xl ${
          isOpen ? 'scale-95' : 'hover:scale-110'
        }`}
      >
        <div className="w-full h-2 bg-yellow-300 absolute top-0" />
      </div>

      {/* Lid */}
      <div
        className={`absolute -top-8 left-1/2 transform -translate-x-1/2 w-36 h-16 bg-gradient-to-b from-red-300 to-red-500 rounded-t transition-all duration-500 shadow-lg ${
          isOpen ? 'rotate-45 -translate-y-12' : ''
        }`}
      >
        <div className="w-full h-3 bg-yellow-300 absolute bottom-0" />
      </div>

      {/* Ribbon */}
      <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-2 h-20 bg-yellow-300" />

      {/* Bow */}
      {!isOpen && (
        <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
          <div className="flex gap-2">
            <div className="w-4 h-4 bg-yellow-300 rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
            <div className="w-4 h-4 bg-yellow-300 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
          </div>
        </div>
      )}

      {isOpen && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-4xl animate-pulse">✨</div>
        </div>
      )}
    </div>
  );
};
