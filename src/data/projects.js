export const projects = [
  {
    id: 'musify',
    badge: 'Full Stack • MERN',
    title: 'Musify',
    subtitle: 'Spotify-like Music Streaming Platform',
    description: 'A complete music streaming web app with song uploads, real-time playback, playlists, artist profiles, admin dashboard and iTunes API integration.',
    techTags: ['React', 'Node.js', 'MongoDB', 'Redux RTK', 'Cloudinary', 'JWT', 'Tailwind'],
    features: [
      'JWT auth with refresh token rotation',
      'Cloudinary audio/image storage',
      'Global audio player with queue & equalizer',
      'Admin dashboard + iTunes API integration'
    ],
    liveDemo: '#',
    github: '#',
    image: '/images/musify-preview.png'
  },
  {
    id: 'cafemanager',
    badge: 'Full Stack • Node + Angular',
    title: 'CafeManager',
    subtitle: 'Complete Café Management System',
    description: 'A full café management system with menu management, order tracking, table management, staff roles and sales analytics dashboard.',
    techTags: ['Angular', 'Node.js', 'MongoDB', 'Mongoose', 'JWT', 'Tailwind'],
    features: [
      'Role-based access (admin, staff, cashier)',
      'Real-time order management',
      'Mongoose schemas + aggregations',
      'Sales reports + analytics dashboard'
    ],
    liveDemo: '#',
    github: '#',
    image: '/images/cafe-preview.png'
  },
  {
    id: 'tripcraft',
    badge: 'Full Stack • React + Node',
    title: 'TripCraft',
    subtitle: 'Trip Planner Web',
    description: 'A full-stack travel planning web app for discovering destinations, building day-by-day itineraries, managing group trips, tracking expenses, and getting AI-assisted suggestions.',
    techTags: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express', 'Sequelize', 'MySQL', 'AWS S3', 'Google OAuth', 'JWT'],
    features: [
      'Destination discovery and search',
      'Trip creation with day-by-day itinerary planning',
      'Collaborative trips with members, voting and expense tracking',
      'Photo uploads via AWS S3',
      'Packing lists and journal entries',
      'AI-assisted itinerary and packing suggestions',
      'Google OAuth + JWT authentication'
    ],
    liveDemo: '#',
    github: '#',
    image: '/images/tripcraft-preview.png'
  }
];