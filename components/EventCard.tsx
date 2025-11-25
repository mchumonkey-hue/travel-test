import React, { useState } from 'react';
import { MapPin, Info, Utensils, Train, Camera, ShoppingBag, Bed, Sparkles } from 'lucide-react';
import { ItineraryItem } from '../types';
import { getGeminiTravelTip, getThaiPhrase } from '../services/geminiService';

interface EventCardProps {
  item: ItineraryItem;
  isLast: boolean;
}

const EventCard: React.FC<EventCardProps> = ({ item, isLast }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [aiTip, setAiTip] = useState<string | null>(null);
  const [isLoadingAi, setIsLoadingAi] = useState(false);

  const getIcon = () => {
    switch (item.type) {
      case 'food': return <Utensils className="w-5 h-5 text-thai-red" />;
      case 'transport': return <Train className="w-5 h-5 text-thai-green" />;
      case 'shopping': return <ShoppingBag className="w-5 h-5 text-purple-600" />;
      case 'hotel': return <Bed className="w-5 h-5 text-blue-600" />;
      default: return <Camera className="w-5 h-5 text-thai-gold" />;
    }
  };

  const handleAskAI = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (aiTip) return;
    
    setIsLoadingAi(true);
    const tip = await getGeminiTravelTip(item.location, item.title);
    setAiTip(tip);
    setIsLoadingAi(false);
  };

  const openMap = (e: React.MouseEvent) => {
    e.stopPropagation();
    const query = encodeURIComponent(`${item.location} Thailand`);
    window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, '_blank');
  };

  return (
    <div className="relative flex group">
      {/* Time Column */}
      <div className="flex flex-col items-center mr-4 w-16 flex-shrink-0">
        <span className="text-sm font-bold text-gray-500 font-sans">{item.time}</span>
        <div className="relative flex items-center justify-center w-8 h-8 mt-2 bg-white border-2 border-thai-gold rounded-full shadow-sm z-10">
          {getIcon()}
        </div>
        {!isLast && <div className="w-0.5 h-full bg-stone-300 mt-2 mb-2 group-hover:bg-thai-gold transition-colors duration-300"></div>}
      </div>

      {/* Card */}
      <div 
        onClick={() => setIsExpanded(!isExpanded)}
        className={`flex-1 mb-8 bg-white rounded-xl shadow-md border-l-4 border-thai-gold overflow-hidden transition-all duration-300 ${isExpanded ? 'ring-2 ring-thai-gold/50' : 'hover:shadow-lg'}`}
      >
        {item.image && (
          <div className="h-32 w-full overflow-hidden relative">
            <img src={item.image} alt={item.title} className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <h3 className="absolute bottom-2 left-4 text-white font-serif text-lg font-bold shadow-black drop-shadow-md">{item.title}</h3>
          </div>
        )}
        
        <div className="p-4">
          {!item.image && <h3 className="text-lg font-bold text-gray-800 font-serif mb-1">{item.title}</h3>}
          
          <div className="flex items-center text-gray-600 mb-2 cursor-pointer hover:text-blue-600 transition-colors" onClick={openMap}>
            <MapPin className="w-4 h-4 mr-1" />
            <span className="text-sm truncate underline decoration-dotted">{item.location}</span>
          </div>

          <p className="text-gray-600 text-sm leading-relaxed mb-3">
            {item.description}
          </p>

          {isExpanded && (
            <div className="mt-4 pt-3 border-t border-gray-100 animate-fadeIn">
               {item.locationThai && (
                 <div className="mb-3 p-2 bg-gray-50 rounded text-center">
                   <p className="text-xs text-gray-500">Show to driver:</p>
                   <p className="text-xl font-serif text-thai-green">{item.locationThai}</p>
                 </div>
               )}

               <div className="flex gap-2">
                 <button 
                  onClick={openMap}
                  className="flex-1 bg-thai-green text-white py-2 rounded-lg text-sm font-semibold hover:bg-emerald-800 transition-colors flex items-center justify-center gap-2"
                 >
                   <MapPin size={16} /> Navigate
                 </button>
                 <button 
                   onClick={handleAskAI}
                   className="flex-1 bg-gradient-to-r from-thai-gold to-orange-400 text-white py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                   disabled={isLoadingAi}
                 >
                   <Sparkles size={16} /> {isLoadingAi ? 'Asking Spirit...' : 'Gemini Tips'}
                 </button>
               </div>
               
               {aiTip && (
                 <div className="mt-3 p-3 bg-orange-50 border border-orange-100 rounded-lg text-sm text-gray-700 italic flex items-start gap-2">
                    <Sparkles className="w-4 h-4 text-thai-gold flex-shrink-0 mt-0.5" />
                    <p>"{aiTip}"</p>
                 </div>
               )}
            </div>
          )}
          
          {!isExpanded && (
            <div className="flex justify-center mt-2">
              <Info className="w-4 h-4 text-gray-300" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventCard;