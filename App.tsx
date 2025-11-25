import React, { useState, useEffect } from 'react';
import { ITINERARY } from './constants';
import Timeline from './components/Timeline';
import { Sun, CloudRain, CloudSun, Menu, Map } from 'lucide-react';

const App: React.FC = () => {
  const [selectedDayIndex, setSelectedDayIndex] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  const currentSchedule = ITINERARY[selectedDayIndex];

  // Handle scroll for sticky nav styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 150);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const WeatherIcon = () => {
    // Simple mock logic for weather based on index for variety
    if (selectedDayIndex === 2) return <CloudSun className="text-white w-6 h-6" />;
    if (selectedDayIndex === 5) return <CloudRain className="text-white w-6 h-6" />;
    return <Sun className="text-white w-6 h-6" />;
  };

  return (
    <div className="min-h-screen relative font-sans">
      
      {/* Hero Section */}
      <div className="relative h-72 w-full overflow-hidden">
        <img 
          src={`https://picsum.photos/800/600?random=${100 + selectedDayIndex}`} 
          alt="Thailand Scenery" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-thai-cream"></div>
        
        <div className="absolute top-6 left-4 right-4 flex justify-between items-start text-white">
            <div>
              <h1 className="text-3xl font-serif font-bold shadow-black drop-shadow-md">Siam Journey</h1>
              <p className="text-sm opacity-90 shadow-black drop-shadow-sm">Bangkok & Beyond</p>
            </div>
            <div className="flex flex-col items-end">
              <div className="flex items-center gap-2 bg-black/20 backdrop-blur-sm px-3 py-1 rounded-full">
                <WeatherIcon />
                <span className="font-bold">32°C</span>
              </div>
              <span className="text-xs mt-1 shadow-black drop-shadow-sm">{currentSchedule.location}</span>
            </div>
        </div>
      </div>

      {/* Sticky Day Navigator */}
      <div className={`sticky top-0 z-40 transition-all duration-300 ${scrolled ? 'bg-thai-cream/95 backdrop-blur-md shadow-md pt-2 pb-2' : 'bg-transparent -mt-10 pb-4'}`}>
        <div className="overflow-x-auto hide-scrollbar flex gap-3 px-4 py-2 snap-x">
          {ITINERARY.map((day, index) => (
            <button
              key={day.date}
              onClick={() => {
                setSelectedDayIndex(index);
                window.scrollTo({ top: 300, behavior: 'smooth' });
              }}
              className={`
                flex-shrink-0 snap-center flex flex-col items-center justify-center 
                w-16 h-20 rounded-xl transition-all duration-300 border
                ${selectedDayIndex === index 
                  ? 'bg-thai-gold text-white border-thai-gold scale-105 shadow-lg' 
                  : 'bg-white text-gray-500 border-gray-200 hover:border-thai-gold/50'}
              `}
            >
              <span className="text-xs font-semibold uppercase">{day.displayDate}</span>
              <span className={`text-lg font-bold ${selectedDayIndex === index ? 'text-white' : 'text-gray-800'}`}>
                Day {index + 1}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Timeline Content */}
      <main className="relative z-10 min-h-[60vh]">
        <Timeline daySchedule={currentSchedule} />
      </main>

      {/* Bottom Floating Action Button (Optional for Map Overview) */}
      <div className="fixed bottom-6 right-6 z-50">
        <button 
          onClick={() => window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(currentSchedule.location)}`, '_blank')}
          className="bg-thai-red text-white p-4 rounded-full shadow-xl hover:bg-red-900 transition-colors hover:scale-110 active:scale-95 flex items-center justify-center"
        >
          <Map className="w-6 h-6" />
        </button>
      </div>

      {/* Decorative Traditional Border at Bottom */}
      <div className="fixed bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-thai-gold via-thai-red to-thai-gold z-50"></div>

    </div>
  );
};

export default App;