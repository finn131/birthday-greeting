import React, { useState, useEffect } from 'react';

export const Countdown = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const calculateTime = () => {
      const difference = new Date(targetDate).getTime() - new Date().getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTime();
    const timer = setInterval(calculateTime, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const TimeUnit = ({ value, label }) => (
    <div className="text-center">
      <div className="bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg p-4 min-w-16">
        <div className="text-3xl font-bold text-white">{String(value || 0).padStart(2, '0')}</div>
      </div>
      <div className="text-white text-sm mt-2 font-semibold">{label}</div>
    </div>
  );

  return (
    <div className="flex gap-3 justify-center flex-wrap">
      <TimeUnit value={timeLeft.days} label="Days" />
      <TimeUnit value={timeLeft.hours} label="Hours" />
      <TimeUnit value={timeLeft.minutes} label="Minutes" />
      <TimeUnit value={timeLeft.seconds} label="Seconds" />
    </div>
  );
};

export const CountUp = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => (prev < 100 ? prev + 1 : prev));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center">
      <div className="text-6xl font-bold gradient-text mb-2">{count}%</div>
      <div className="text-white text-lg">Happiness Level</div>
    </div>
  );
};
