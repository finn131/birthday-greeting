import React from 'react';

const Footer = () => {
  const wishes = [
    '💫 Setiap hari adalah kesempatan baru untuk bersyukur',
    '🌟 Kebahagiaan adalah hadiah terbesar dalam hidup',
    '💝 Kasih sayang adalah awal dari segala keajaiban',
    '🎵 Hidup adalah simfoni indah yang penuh warna',
    '🌈 Mimpi besar dimulai dengan langkah kecil hari ini',
  ];

  return (
    <div className="bg-gradient-to-t from-gray-900 to-purple-900 text-white py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 gradient-text">Pesan Khusus</h3>
            <p className="text-gray-300 leading-relaxed">
                Untukmu, di hari bertambahnya usia.
                Aku tidak menyesal pernah berharap, meski akhirnya tidak sampai pada kata kita. 
                Terima kasih sudah hadir pada satu fase hidupku, cukup untuk mengajarkanku tentang rasa, dan tentang ikhlas. 
                Semoga ke depannya, kamu dikelilingi hal-hal yang menyenangkan, dan menemukan bahagia yang benar-benar memilihmu. 
                Aku mendoakanmu, dalam diam, dengan cara yang paling tulus 🤍.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4 gradient-text">Doa & Harapan</h3>
            <ul className="space-y-2 text-gray-300">
              {wishes.map((wish, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="flex-shrink-0">✨</span>
                  <span>{wish}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-purple-700 pt-8">
          <div className="flex justify-center gap-4 mb-6">
            {['❤️', '🎂', '🎉', '🌟', '💝'].map((emoji, idx) => (
              <span key={idx} className="text-2xl animate-bounce" style={{ animationDelay: `${idx * 0.1}s` }}>
                {emoji}
              </span>
            ))}
          </div>
          <p className="text-center text-gray-400 text-sm">
            Made with 💜 for your special day 
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
