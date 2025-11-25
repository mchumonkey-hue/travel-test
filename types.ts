export interface ItineraryItem {
  id: string;
  time: string;
  title: string;
  location: string;
  locationThai?: string; // Optional Thai translation for showing taxi drivers
  description: string;
  type: 'transport' | 'activity' | 'food' | 'hotel' | 'shopping';
  image?: string;
  tips?: string; // Static tips
  lat?: number;
  lng?: number;
}

export interface DaySchedule {
  date: string;
  displayDate: string;
  weekday: string;
  location: string; // General location (e.g., Bangkok, Ayutthaya)
  items: ItineraryItem[];
}

export enum WeatherCondition {
  Sunny = 'Sunny',
  Cloudy = 'Cloudy',
  Rainy = 'Rainy',
  PartlyCloudy = 'Partly Cloudy'
}