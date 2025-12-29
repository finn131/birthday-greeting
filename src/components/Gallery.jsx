import React, { useState } from 'react';
import { BirthdayCard, GiftBox } from './Cards';
import { Countdown, CountUp } from './Countdown';
import { useConfetti } from './Confetti';

const Gallery = () => {
  const { triggerConfetti, triggerCelebration } = useConfetti();
  const [activeTab, setActiveTab] = useState('cards');

  const birthdays = [
    {
      name: 'Happy Birthday',
      message: 'Selamat bertambah usia. Semoga hari ini menjadi pengingat bahwa kamu telah tumbuh, belajar, dan bertahan sejauh ini. Terima kasih sudah menjadi pribadi yang berarti buat aku. Semoga hidupmu semakin penuh makna, bukan hanya panjang usia.',
    },
    {
      name: 'Happy Birthday',
      message: 'Tidak semua yang datang ditakdirkan untuk tinggal, sebagian hanya singgah agar kita belajar tentang melepaskan. Semoga di usia ini, kamu berdamai dengan hal-hal yang tidak jadi, dan menemukan bahagia pada jalan yang memang memilihmu. Terima kasih sudah hadir, meski hanya sebentar, namun cukup untuk meninggalkan arti.',
    },
  ];

  return (
    <div className="min-h-screen py-16 px-4 bg-gradient-to-b from-purple-600 via-indigo-600 to-purple-700">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center text-white mb-4 drop-shadow-lg">
          Gallery Spesial 🎨
        </h2>
        <p className="text-center text-white text-lg mb-12 drop-shadow-md">
          Pilih caramu buat ngerayain momen istimewa ini 
        </p>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {[
            { id: 'cards', label: '💌 Kartu Ucapan', icon: '💌' },
            { id: 'countdown', label: '⏰ Hitung Mundur', icon: '⏰' },
            { id: 'stats', label: '📊 Statistik', icon: '📊' },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                triggerConfetti();
              }}
              className={`px-6 py-3 rounded-full font-bold transition-all duration-300 transform ${
                activeTab === tab.id
                  ? 'bg-white text-purple-600 shadow-2xl scale-105'
                  : 'bg-purple-500 text-white hover:bg-purple-400'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Cards Section */}
        {activeTab === 'cards' && (
          <div className="space-y-8">
            {birthdays.map((birthday, idx) => (
              <div
                key={idx}
                className="flex justify-center animate-slideUp"
                style={{ animationDelay: `${idx * 0.2}s` }}
              >
                <BirthdayCard
                  name={birthday.name}
                  message={birthday.message}
                  onOpen={() => triggerCelebration()}
                />
              </div>
            ))}
          </div>
        )}

        {/* Gifts Section */}
        {activeTab === 'gifts' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 place-items-center">
            {Array.from({ length: 3 }).map((_, idx) => (
              <div
                key={idx}
                className="animate-slideUp"
                style={{ animationDelay: `${idx * 0.2}s` }}
              >
                <GiftBox onOpen={() => triggerCelebration()} />
              </div>
            ))}
          </div>
        )}

        {/* Countdown Section */}
        {activeTab === 'countdown' && (
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-12 animate-slideUp">
            <h3 className="text-3xl font-bold text-white text-center mb-8">
              Waktu Hingga Ulang Tahun Berikutnya
            </h3>
            <Countdown targetDate={new Date(new Date().getFullYear() + 1, new Date().getMonth(), new Date().getDate())} />
          </div>
        )}

        {/* Stats Section */}
        {activeTab === 'stats' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-12 animate-slideUp">
              <CountUp />
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-12 flex items-center justify-center animate-slideUp" style={{ animationDelay: '0.2s' }}>
              <div className="text-center">
                <div className="text-6xl font-bold gradient-text mb-2">∞</div>
                <div className="text-white text-lg">Tahun Kehidupan Yang Indah</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
