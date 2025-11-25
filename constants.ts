import { DaySchedule } from './types';

export const ITINERARY: DaySchedule[] = [
  {
    date: '2024-12-03',
    displayDate: 'Dec 3',
    weekday: 'Tuesday',
    location: 'Bangkok City',
    items: [
      {
        id: 'd1-1',
        time: '12:00',
        title: 'Arrival in Bangkok',
        location: 'Bangkok City Center',
        locationThai: 'กรุงเทพมหานคร',
        description: 'Arrive in the city, check-in to hotel.',
        type: 'transport',
      },
      {
        id: 'd1-2',
        time: '13:30',
        title: 'Chao Phraya Boat Tour',
        location: 'Sathorn Pier',
        locationThai: 'ท่าเรือสาทร',
        description: 'Take the Blue Flag Tourist Boat for scenic views.',
        type: 'activity',
        image: 'https://picsum.photos/400/300?random=1'
      },
      {
        id: 'd1-3',
        time: '14:30',
        title: 'The Grand Palace & Wat Phra Kaew',
        location: 'The Grand Palace',
        locationThai: 'พระบรมมหาราชวัง',
        description: 'Visit the spectacular Grand Palace and the Temple of the Emerald Buddha. Dress code: No shorts or sleeveless shirts.',
        type: 'activity',
        image: 'https://picsum.photos/400/300?random=2'
      },
      {
        id: 'd1-4',
        time: '16:00',
        title: 'Wat Pho (Reclining Buddha)',
        location: 'Wat Pho',
        locationThai: 'วัดโพธิ์',
        description: 'Home of the famous Reclining Buddha and traditional Thai massage school.',
        type: 'activity',
        image: 'https://picsum.photos/400/300?random=3'
      },
      {
        id: 'd1-5',
        time: '18:00',
        title: 'Wat Arun Sunset & Night View',
        location: 'Wat Arun',
        locationThai: 'วัดอรุณ',
        description: 'The Temple of Dawn. Best viewed from the opposite side of the river at sunset.',
        type: 'activity',
        image: 'https://picsum.photos/400/300?random=4'
      },
      {
        id: 'd1-6',
        time: '19:30',
        title: 'Dinner at Talat Phlu',
        location: 'Talat Phlu Food Market',
        locationThai: 'ตลาดพลู',
        description: 'Local street food paradise near the MRT. Famous for crispy pork and noodles.',
        type: 'food',
        image: 'https://picsum.photos/400/300?random=5'
      }
    ]
  },
  {
    date: '2024-12-04',
    displayDate: 'Dec 4',
    weekday: 'Wednesday',
    location: 'Ayutthaya',
    items: [
      {
        id: 'd2-1',
        time: '08:00',
        title: 'Minivan to Ayutthaya',
        location: 'Mo Chit Bus Terminal',
        locationThai: 'สถานีขนส่งหมอชิต',
        description: 'Travel to the ancient capital.',
        type: 'transport',
      },
      {
        id: 'd2-2',
        time: '10:00',
        title: 'Wat Mahathat',
        location: 'Wat Mahathat Ayutthaya',
        locationThai: 'วัดมหาธาตุ',
        description: 'Famous for the Buddha head intertwined in tree roots.',
        type: 'activity',
        image: 'https://picsum.photos/400/300?random=6'
      },
      {
        id: 'd2-3',
        time: '11:30',
        title: 'Wat Chaiwatthanaram',
        location: 'Wat Chaiwatthanaram',
        locationThai: 'วัดไชยวัฒนาราม',
        description: 'A stunning Khmer-style temple on the riverbank.',
        type: 'activity',
        image: 'https://picsum.photos/400/300?random=7'
      },
      {
        id: 'd2-4',
        time: '13:00',
        title: 'Wat Phra Si Sanphet',
        location: 'Wat Phra Si Sanphet',
        locationThai: 'วัดพระศรีสรรเพชญ์',
        description: 'The holiest temple on the site of the old Royal Palace.',
        type: 'activity',
        image: 'https://picsum.photos/400/300?random=8'
      },
      {
        id: 'd2-5',
        time: '14:30',
        title: 'Wat Ratchaburana',
        location: 'Wat Ratchaburana',
        locationThai: 'วัดราชบูรณะ',
        description: 'Known for its well-preserved prang and crypt paintings.',
        type: 'activity',
        image: 'https://picsum.photos/400/300?random=9'
      },
      {
        id: 'd2-6',
        time: '16:00',
        title: 'Train to Don Mueang',
        location: 'Ayutthaya Railway Station',
        locationThai: 'สถานีรถไฟอยุธยา',
        description: 'Scenic train ride back towards Bangkok outskirts.',
        type: 'transport',
      },
      {
        id: 'd2-7',
        time: '18:30',
        title: 'Save One Go Night Market',
        location: 'Save One Go Market',
        locationThai: 'ตลาดเซฟวันโก',
        description: 'Vibrant night market near the airport.',
        type: 'food',
        image: 'https://picsum.photos/400/300?random=10'
      }
    ]
  },
  {
    date: '2024-12-05',
    displayDate: 'Dec 5',
    weekday: 'Thursday',
    location: 'Kanchanaburi / West',
    items: [
      {
        id: 'd3-1',
        time: '09:00',
        title: 'Private Car Pick-up',
        location: 'Hotel Lobby',
        description: 'Travel to Somboon Legacy Foundation.',
        type: 'transport',
      },
      {
        id: 'd3-2',
        time: '11:00',
        title: 'Somboon Legacy Foundation',
        location: 'Somboon Legacy Foundation',
        locationThai: 'มูลนิธิสมบูรณ์',
        description: 'Hands-off Elephant Sanctuary. Observe elephants in their natural habitat without riding or bathing them directly.',
        type: 'activity',
        image: 'https://picsum.photos/400/300?random=11'
      }
    ]
  },
  {
    date: '2024-12-06',
    displayDate: 'Dec 6',
    weekday: 'Friday',
    location: 'Floating Markets',
    items: [
      {
        id: 'd4-1',
        time: '07:00',
        title: 'Private Car to Markets',
        location: 'Hotel Lobby',
        description: 'Early start to beat the crowds and heat.',
        type: 'transport',
      },
      {
        id: 'd4-2',
        time: '09:00',
        title: 'Damnoen Saduak Floating Market',
        location: 'Damnoen Saduak Floating Market',
        locationThai: 'ตลาดน้ำดำเนินสะดวก',
        description: 'The most famous floating market. Take a paddle boat ride.',
        type: 'activity',
        image: 'https://picsum.photos/400/300?random=12'
      },
      {
        id: 'd4-3',
        time: '11:30',
        title: 'Maeklong Railway Market',
        location: 'Maeklong Railway Market',
        locationThai: 'ตลาดร่มหุบ',
        description: 'Watch the train pass directly through the market stalls.',
        type: 'activity',
        image: 'https://picsum.photos/400/300?random=13'
      },
      {
        id: 'd4-4',
        time: '14:00',
        title: 'Amphawa Floating Market',
        location: 'Amphawa Floating Market',
        locationThai: 'ตลาดน้ำอัมพวา',
        description: 'Authentic weekend market with great seafood and firefly boat tours.',
        type: 'food',
        image: 'https://picsum.photos/400/300?random=14'
      }
    ]
  },
  {
    date: '2024-12-07',
    displayDate: 'Dec 7',
    weekday: 'Saturday',
    location: 'Samut Prakan',
    items: [
      {
        id: 'd5-1',
        time: '10:00',
        title: 'BTS to Samut Prakan',
        location: 'BTS Kheha Station',
        description: 'Take the Skytrain then Grab.',
        type: 'transport',
      },
      {
        id: 'd5-2',
        time: '11:00',
        title: 'The Ancient City (Muang Boran)',
        location: 'Ancient City Bangkok',
        locationThai: 'เมืองโบราณ',
        description: 'World\'s largest outdoor museum featuring replicas of Thailand\'s famous monuments. Rent a golf cart or bike.',
        type: 'activity',
        image: 'https://picsum.photos/400/300?random=15'
      },
      {
        id: 'd5-3',
        time: '18:00',
        title: 'Srinagarindra Train Night Market',
        location: 'Train Night Market Srinagarindra',
        locationThai: 'ตลาดนัดรถไฟ ศรีนครินทร์',
        description: 'Huge night market with vintage vibes, classic cars, and amazing street food.',
        type: 'shopping',
        image: 'https://picsum.photos/400/300?random=16'
      }
    ]
  },
  {
    date: '2024-12-08',
    displayDate: 'Dec 8',
    weekday: 'Sunday',
    location: 'Thonburi',
    items: [
      {
        id: 'd6-1',
        time: '10:00',
        title: 'Thonburi Seafood Market',
        location: 'Thonburi Market Sanam Luang 2',
        locationThai: 'ตลาดสดธนบุรี',
        description: 'Fresh seafood extravaganza. Pick your seafood and have it cooked on site.',
        type: 'food',
        image: 'https://picsum.photos/400/300?random=17'
      },
      {
        id: 'd6-2',
        time: '14:00',
        title: 'Shopping at Big C',
        location: 'Big C Supercenter Rajdamri',
        locationThai: 'บิ๊กซี ราชดำริ',
        description: 'Buy souvenirs, Thai snacks, and dried fruits.',
        type: 'shopping',
        image: 'https://picsum.photos/400/300?random=18'
      },
      {
        id: 'd6-3',
        time: '18:00',
        title: 'Bhawa Spa',
        location: 'Bhawa Spa on the Eight',
        locationThai: 'บาวา สปา',
        description: 'Relaxing end to the trip. 18:00 - 21:00 session.',
        type: 'activity',
        image: 'https://picsum.photos/400/300?random=19'
      }
    ]
  }
];