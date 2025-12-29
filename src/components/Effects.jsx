import React from 'react';

export const Confetti = () => {
  const balloons = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 2,
    duration: 4 + Math.random() * 3,
    color: ['#ff006e', '#fb5607', '#ffbe0b', '#8338ec', '#3a86ff'][Math.floor(Math.random() * 5)],
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {balloons.map(balloon => (
        <div
          key={balloon.id}
          className="balloon"
          style={{
            left: `${balloon.left}%`,
            width: '30px',
            height: '30px',
            backgroundColor: balloon.color,
            animation: `rise ${balloon.duration}s linear infinite`,
            animationDelay: `${balloon.delay}s`,
            bottom: '-30px',
          }}
        />
      ))}
    </div>
  );
};

export const FloatingStars = () => {
  const stars = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    delay: Math.random() * 3,
    duration: 2 + Math.random() * 2,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none">
      {stars.map(star => (
        <div
          key={star.id}
          className="animate-twinkle absolute"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            width: '3px',
            height: '3px',
            backgroundColor: 'white',
            borderRadius: '50%',
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

export const ParticleEffect = ({ onClick }) => {
  const [particles, setParticles] = React.useState([]);

  const createParticles = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const newParticles = Array.from({ length: 12 }, (_, i) => ({
      id: Date.now() + i,
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      angle: (i / 12) * Math.PI * 2,
      velocity: 5 + Math.random() * 5,
    }));

    setParticles(prev => [...prev, ...newParticles]);
    setTimeout(() => {
      setParticles([]);
    }, 1000);

    onClick?.();
  };

  return {
    particles,
    createParticles,
  };
};
