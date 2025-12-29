import React, { useState } from 'react';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import { ConfettiComponent, useConfetti } from './components/Confetti';

function App() {
  const { triggerCelebration } = useConfetti();
  const [showGallery, setShowGallery] = useState(false);

  const handleCelebrate = () => {
    triggerCelebration();
    setTimeout(() => {
      setShowGallery(true);
    }, 1000);
  };

  return (
    <div className="bg-gradient-to-b from-purple-600 to-indigo-800 min-h-screen">
      <ConfettiComponent />
      
      {!showGallery ? (
        <>
          <Hero onCelebrate={handleCelebrate} />
        </>
      ) : (
        <>
          <Gallery />
          <Footer />
        </>
      )}

      {showGallery && (
        <div className="fixed bottom-8 right-8 z-50">
          <button
            onClick={() => setShowGallery(false)}
            className="bg-white text-purple-600 font-bold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
          >
            ↑ Kembali ke Awal
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
