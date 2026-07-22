/* Slower 10-night route with fewer hotel changes and three voteable stays per base. */

const slowRoute = {
  id: 'route-slow-south',
  type: 'route',
  category: 'Recommended slow route',
  icon: '🚗',
  title: 'Five bases, more time to enjoy each region',
  description: 'One memorable mountain night followed by four longer bases: the Trabocchi coast, Gargano, Valle d’Itria and Matera.',
  details: `Day 1 — Rome to Santo Stefano di Sessanio / Rocca Calascio. One family transit night with a dramatic mountain fortress, the octagonal church of Santa Maria della Pietà and sunset views across Gran Sasso.\n\nDays 2–3 — Costa dei Trabocchi. Two nights around Fossacesia or San Vito Chietino for the abbey of San Giovanni in Venere, beaches, cycling, a trabocco seafood dinner and time by the pool.\n\nDays 4–5 — Gargano. Two nights around Vieste or Mattinata for a sea-cave boat trip, beaches, Foresta Umbra, Monte Sant’Angelo and relaxed evenings.\n\nDays 6–8 — Valle d’Itria. Three nights in a masseria or trullo with a pool. Use one day for Alberobello, Locorotondo and Cisternino; another for Egnazia, Ostuni or the coast; and keep time for the property itself. Castel del Monte can be visited during the transfer south.\n\nDays 9–10 — Matera. Two nights so the Sassi are not reduced to a rushed afternoon. Include the cave districts, rock churches, Murgia viewpoint and a slower food-focused second day.\n\nDay 11 — Matera to Rome. Allow roughly five to six hours with a proper lunch stop. Do not schedule this drive immediately before a long-haul flight.\n\nFor an 11-night version, add the extra night to Gargano or Matera rather than creating another base.`,
  meta: ['10 nights / 11 days', 'Only 5 accommodation bases', 'Mostly 2–3 night stays'],
  stops: ['Rome', 'Rocca Calascio', 'Trabocchi Coast ×2', 'Gargano ×2', 'Valle d’Itria ×3', 'Matera ×2', 'Rome'],
  image: commonsImage('Rocca Calascio 2009 by-RaBoe.jpg'),
  imagePage: commonsPage('Rocca Calascio 2009 by-RaBoe.jpg'),
  imageAlt: 'Rocca Calascio high in the Abruzzo mountains',
  mapUrl: googleRoute(['Rome, Italy', 'Santo Stefano di Sessanio, Italy', 'Fossacesia, Italy', 'Vieste, Italy', 'Cisternino, Italy', 'Matera, Italy', 'Rome, Italy'])
};

routes.splice(0, routes.length, slowRoute);

routePoints.splice(0, routePoints.length,
  ['Rome', 41.9028, 12.4964],
  ['Santo Stefano di Sessanio / Rocca Calascio', 42.3288, 13.6884],
  ['Costa dei Trabocchi / Fossacesia', 42.2462, 14.5181],
  ['Gargano / Vieste', 41.8827, 16.1769],
  ['Valle d’Itria / Cisternino', 40.7433, 17.4258],
  ['Matera', 40.6664, 16.6043],
  ['Rome', 41.9028, 12.4964]
);

places.unshift(
  {
    id: 'place-rocca-calascio', type: 'place', category: 'Scenic / medieval', icon: '🏰',
    title: 'Rocca Calascio and Santo Stefano di Sessanio',
    description: 'A spectacular first-night stop in the Gran Sasso mountains rather than another city hotel.',
    details: 'Rocca Calascio stands at roughly 1,500 metres and is among the highest fortifications in Italy. Combine the fortress and Santa Maria della Pietà with an evening in the preserved stone village of Santo Stefano di Sessanio. This is a one-night experience, not another long base.',
    meta: ['Night 1', 'Mountain views', 'Some uphill walking'],
    image: commonsImage('Rocca Calascio 2009 by-RaBoe.jpg'),
    imagePage: commonsPage('Rocca Calascio 2009 by-RaBoe.jpg'),
    imageAlt: 'Rocca Calascio fortress in Abruzzo',
    officialUrl: 'https://www.italia.it/en/abruzzo/l-aquila/rocca-calascio',
    mapUrl: googleMap('Rocca Calascio Italy')
  },
  {
    id: 'place-san-giovanni-venere', type: 'place', category: 'Church / viewpoint', icon: '⛪',
    title: 'Abbey of San Giovanni in Venere',
    description: 'A major Benedictine abbey on a promontory overlooking the Costa dei Trabocchi.',
    details: 'The abbey gives the coast both a remarkable church and one of its finest viewpoints. It stands above the Gulf of Venus and can be combined with Fossacesia beach or a trabocco lunch without changing accommodation.',
    meta: ['Trabocchi base', 'Free-entry planning stop', 'Sea viewpoint'],
    image: commonsImage('Abbazia di San Giovanni in Venere - Fossacesia.jpg'),
    imagePage: commonsPage('Abbazia di San Giovanni in Venere - Fossacesia.jpg'),
    imageAlt: 'Abbey of San Giovanni in Venere above the Adriatic',
    officialUrl: 'https://cultura.gov.it/luogo/abbazia-di-san-giovanni-in-venere',
    mapUrl: googleMap('Abbazia di San Giovanni in Venere Fossacesia Italy')
  }
);

const areaImage = {
  mountain: commonsImage('Rocca Calascio 2009 by-RaBoe.jpg'),
  coast: commonsImage('Costa dei trabocchi.jpg'),
  gargano: commonsImage('Vieste - Panorama.jpeg'),
  trulli: commonsImage('Trulli panorama.jpg'),
  matera: commonsImage('Panorama of the two Sassi of Matera.jpg')
};

const candidateStays = [
  {
    id: 'stay-mountain-locanda', type: 'stay', category: 'Night 1 · Gran Sasso', icon: '🏔️',
    title: 'Locanda Sul Lago',
    description: 'A family-friendly countryside inn at Santo Stefano di Sessanio with restaurant, parking and outdoor space.',
    details: 'Provisional July 2027 search price for three adults and one eight-year-old was about €164 for one night. This should be rechecked when the exact date is fixed.',
    eur: 164, meta: ['1 night', 'Restaurant', 'Free parking', 'Provisional price'], image: areaImage.mountain, imageAlt: 'Gran Sasso mountain scenery near Santo Stefano di Sessanio',
    bookingUrl: 'https://www.booking.com/hotel/it/locanda-sul-lago.html?checkin=2027-07-05&checkout=2027-07-06&no_rooms=1&group_adults=3&group_children=1&age=8&selected_currency=EUR',
    mapUrl: googleMap('Locanda Sul Lago Santo Stefano di Sessanio Italy')
  },
  {
    id: 'stay-mountain-roccia', type: 'stay', category: 'Night 1 · Gran Sasso', icon: '🪨',
    title: 'La Casa nella Roccia',
    description: 'A simpler family accommodation in Santo Stefano di Sessanio with parking and space for the group.',
    details: 'Provisional July 2027 search price for the group was about €142 for one night. It is the lower-cost mountain candidate and should be rechecked once dates are fixed.',
    eur: 142, meta: ['1 night', 'Family room', 'Free parking', 'Provisional price'], image: areaImage.mountain, imageAlt: 'Gran Sasso mountain scenery near Santo Stefano di Sessanio',
    bookingUrl: 'https://www.booking.com/hotel/it/la-casa-nella-roccia-santo-stefano-di-sessanio.html?checkin=2027-07-05&checkout=2027-07-06&no_rooms=1&group_adults=3&group_children=1&age=8&selected_currency=EUR',
    mapUrl: googleMap('La Casa nella Roccia Santo Stefano di Sessanio Italy')
  },
  {
    id: 'stay-mountain-palazzo', type: 'stay', category: 'Night 1 · Gran Sasso', icon: '🏘️',
    title: 'Residence Il Palazzo',
    description: 'Rooms and apartments in a restored 17th-century building inside Santo Stefano di Sessanio.',
    details: 'A character-led option with an on-site restaurant and apartment choices. The displayed amount is a planning allowance rather than a confirmed July 2027 quote.',
    eur: 155, meta: ['1 night', 'Historic building', 'Apartment option', 'Estimate'], image: areaImage.mountain, imageAlt: 'Gran Sasso mountain scenery near Santo Stefano di Sessanio',
    bookingUrl: 'https://residenceilpalazzo.it/', mapUrl: googleMap('Residence Il Palazzo Santo Stefano di Sessanio Italy')
  },

  {
    id: 'stay-trabocchi-villa-emilia', type: 'stay', category: 'Nights 2–3 · Trabocchi Coast', icon: '🌿',
    title: 'Villa Emilia',
    description: 'A family-run country B&B near Fossacesia, the abbey and the coast, with a seasonal pool and garden.',
    details: 'A strong balance of countryside atmosphere and access to the coast. The displayed amount is a per-night group planning allowance, not a confirmed July 2027 tariff.',
    eur: 155, meta: ['2 nights', 'Pool', 'Near Fossacesia', 'Estimate'], image: areaImage.coast, imageAlt: 'Costa dei Trabocchi in Abruzzo',
    bookingUrl: 'https://www.bbvillaemilia.it/', mapUrl: googleMap('Villa Emilia Fossacesia Italy')
  },
  {
    id: 'stay-trabocchi-levante', type: 'stay', category: 'Nights 2–3 · Trabocchi Coast', icon: '🏨',
    title: 'Hotel Levante',
    description: 'A straightforward family hotel at Fossacesia Marina with a seasonal pool and easier beach access.',
    details: 'Less agriturismo character, but convenient for the abbey, Via Verde and the beach. The displayed amount is a group planning allowance.',
    eur: 175, meta: ['2 nights', 'Pool', 'Beach access', 'Estimate'], image: areaImage.coast, imageAlt: 'Costa dei Trabocchi in Abruzzo',
    bookingUrl: 'https://www.hotellevante.it/', mapUrl: googleMap('Hotel Levante Fossacesia Italy')
  },
  {
    id: 'stay-trabocchi-frasimon', type: 'stay', category: 'Nights 2–3 · Trabocchi Coast', icon: '🏡',
    title: 'Relais FraSimon Antico Casale',
    description: 'A rural relais near San Vito Chietino with pool, breakfast, family rooms and private parking.',
    details: 'The most polished countryside option in this shortlist, about 1.2 km from the coast. It may stretch the target budget in July but deserves a vote.',
    eur: 185, meta: ['2 nights', 'Pool and sauna', 'Quadruple room', 'Budget stretch'], image: areaImage.coast, imageAlt: 'Costa dei Trabocchi in Abruzzo',
    bookingUrl: 'https://relaisfrasimon.it/', mapUrl: googleMap('Relais FraSimon Antico Casale San Vito Chietino Italy')
  },

  {
    id: 'stay-gargano-passione', type: 'stay', category: 'Nights 4–5 · Gargano', icon: '🫒',
    title: 'Agriturismo Passione Natura',
    description: 'Farm stay near Vieste with family rooms, infinity pool, local food and an 18-hole mini-golf course.',
    details: 'Only a few kilometres from Vieste and Pizzomunno beach. This looks particularly suitable for balancing adult relaxation with something enjoyable for the child.',
    eur: 155, meta: ['2 nights', 'Infinity pool', 'Family rooms', 'Mini golf'], image: areaImage.gargano, imageAlt: 'Vieste and the Gargano coastline',
    bookingUrl: 'https://www.visitvieste.com/agriturismo-passione-natura/', mapUrl: googleMap('Agriturismo Passione Natura Vieste Italy')
  },
  {
    id: 'stay-gargano-azzarone', type: 'stay', category: 'Nights 4–5 · Gargano', icon: '🌳',
    title: 'Agriturismo Azzarone',
    description: 'Apartments among olive trees with pool, restaurant, playground, parking and kitchenettes.',
    details: 'A practical family option between Vieste, beaches and Foresta Umbra. Self-catering space may be useful for a two-night stay.',
    eur: 145, meta: ['2 nights', 'Pool', 'Restaurant', 'Apartments'], image: areaImage.gargano, imageAlt: 'Vieste and the Gargano coastline',
    bookingUrl: 'https://www.visitvieste.com/agriturismo-azzarone/', mapUrl: googleMap('Agriturismo Azzarone Vieste Italy')
  },
  {
    id: 'stay-gargano-giorgio', type: 'stay', category: 'Nights 4–5 · Gargano', icon: '🌊',
    title: 'Agriturismo Giorgio, Mattinata',
    description: 'A lower-cost pool option among olive groves near Mattinata, with restaurant and apartments.',
    details: 'Mattinata is quieter than Vieste and convenient for the southern Gargano coves. The displayed group price is an estimate derived from advertised room ranges.',
    eur: 140, meta: ['2 nights', 'Pool', 'Restaurant', 'Value candidate'], image: areaImage.gargano, imageAlt: 'Gargano coastal scenery',
    bookingUrl: 'https://www.agriturismi.it/en/mattinata?piscina=on', mapUrl: googleMap('Agriturismo Giorgio Mattinata Italy')
  },

  {
    id: 'stay-valle-colarossa', type: 'stay', category: 'Nights 6–8 · Valle d’Itria', icon: '🏠',
    title: 'TrulliColarossa',
    description: 'Traditional trulli near Alberobello with pool, breakfast and dedicated children’s space.',
    details: 'A strong family-focused trullo experience with shared facilities and easier value than renting an entire luxury estate.',
    eur: 175, meta: ['3 nights', 'Pool', 'Child-friendly', 'Trullo stay'], image: areaImage.trulli, imageAlt: 'Trulli in the Valle d’Itria countryside',
    bookingUrl: 'https://www.trullicolarossa.it/', mapUrl: googleMap('TrulliColarossa Alberobello Italy')
  },
  {
    id: 'stay-valle-bb', type: 'stay', category: 'Nights 6–8 · Valle d’Itria', icon: '🌾',
    title: 'Trulli Valle d’Itria B&B',
    description: 'Independent trullo apartments in a restored masseria between Cisternino, Martina Franca and Ostuni.',
    details: 'The central position is excellent for day trips, while independent apartments and the heated pool support a slower three-night stay.',
    eur: 180, meta: ['3 nights', 'Heated pool', 'Independent apartments', 'Central location'], image: areaImage.trulli, imageAlt: 'Trulli in the Valle d’Itria countryside',
    bookingUrl: 'https://www.trullivalleditria.it/en/', mapUrl: googleMap("Trulli Valle d'Itria B&B Italy")
  },
  {
    id: 'stay-valle-odegitria', type: 'stay', category: 'Nights 6–8 · Valle d’Itria', icon: '🏊',
    title: 'Tenuta Odegitria',
    description: 'A family-run trulli estate near Martina Franca with pool, tennis and holiday-home accommodation.',
    details: 'A good option if the group wants more facilities at the property and intends to spend part of a day simply enjoying the accommodation.',
    eur: 190, meta: ['3 nights', 'Pool and tennis', 'Family-run', 'Budget stretch'], image: areaImage.trulli, imageAlt: 'Trulli in the Valle d’Itria countryside',
    bookingUrl: 'https://tenutaodegitria.it/en/', mapUrl: googleMap('Tenuta Odegitria Martina Franca Italy')
  },

  {
    id: 'stay-matera-matinelle', type: 'stay', category: 'Nights 9–10 · Matera', icon: '🌻',
    title: 'Agriturismo Le Matinelle',
    description: 'A rural Matera base with garden, swimming pool, restaurant and farm activities.',
    details: 'Best for parking, pool time and relaxed evenings. The trade-off is driving into Matera rather than walking directly from a Sassi hotel.',
    eur: 155, meta: ['2 nights', 'Pool', 'Restaurant', 'Easy parking'], image: areaImage.matera, imageAlt: 'The Sassi districts of Matera',
    bookingUrl: 'https://www.lematinelle.com/', mapUrl: googleMap('Agriturismo Le Matinelle Matera Italy')
  },
  {
    id: 'stay-matera-belvedere', type: 'stay', category: 'Nights 9–10 · Matera', icon: '🪨',
    title: 'Hotel Il Belvedere',
    description: 'A Sassi hotel offering cave and classic rooms, including room types that can accommodate four.',
    details: 'The location and terrace make this the atmospheric city choice. It sacrifices a pool and may cost more, but lets the group experience Matera after day-trippers leave.',
    eur: 190, meta: ['2 nights', 'Inside the Sassi', 'Rooms for 4', 'No pool'], image: areaImage.matera, imageAlt: 'The Sassi districts of Matera',
    bookingUrl: 'https://www.hotelbelvedere.matera.it/en/rooms/', mapUrl: googleMap('Hotel Il Belvedere Matera Italy')
  },
  {
    id: 'stay-matera-origini', type: 'stay', category: 'Nights 9–10 · Matera', icon: '🌄',
    title: 'Le Origini Suites & Rooms',
    description: 'Cave suites and panoramic rooms overlooking the Sassi, with family-oriented offers and breakfast.',
    details: 'A second central option for comparing atmosphere, views and room arrangement. The displayed amount is a planning allowance pending exact dates.',
    eur: 185, meta: ['2 nights', 'Cave or view rooms', 'Central', 'Estimate'], image: areaImage.matera, imageAlt: 'The Sassi districts of Matera',
    bookingUrl: 'https://www.hotelleorigini.it/en/', mapUrl: googleMap('Le Origini Suites and Rooms Matera Italy')
  }
];

stays.splice(0, stays.length, ...candidateStays);
