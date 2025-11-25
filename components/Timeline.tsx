import React from 'react';
import { DaySchedule } from '../types';
import EventCard from './EventCard';

interface TimelineProps {
  daySchedule: DaySchedule;
}

const Timeline: React.FC<TimelineProps> = ({ daySchedule }) => {
  return (
    <div className="max-w-md mx-auto px-4 py-6 pb-24">
      <div className="mb-6">
        <h2 className="text-2xl font-serif font-bold text-thai-red">{daySchedule.displayDate}</h2>
        <p className="text-gray-500">{daySchedule.weekday} • {daySchedule.location}</p>
      </div>
      
      <div className="relative">
        {/* Continuous line background is handled in individual items for better mobile control, 
            but strictly speaking, a absolute line here works too. 
            We stick to the item-based line for easier dynamic heights. */}
        
        {daySchedule.items.map((item, index) => (
          <EventCard 
            key={item.id} 
            item={item} 
            isLast={index === daySchedule.items.length - 1} 
          />
        ))}
        
        {daySchedule.items.length === 0 && (
          <div className="text-center py-10 text-gray-400">
            No activities planned for this day.
          </div>
        )}
      </div>
      
      <div className="mt-8 text-center">
         <div className="inline-block p-4 rounded-full bg-thai-cream border border-thai-gold/30">
            <img 
              src="https://api.iconify.design/noto:elephant.svg" 
              alt="Elephant" 
              className="w-12 h-12 opacity-80"
            />
         </div>
         <p className="text-xs text-gray-400 mt-2 font-serif">Siam Journey</p>
      </div>
    </div>
  );
};

export default Timeline;