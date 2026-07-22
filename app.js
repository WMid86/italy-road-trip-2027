const TRIP_PIN = '2027';
const PROFILES = ['W', 'N', 'L'];
const STORAGE_KEY = 'la-strada-2027-state-v1';

const routePoints = [
  ['Rome', 41.9028, 12.4964],
  ['Assisi', 43.0707, 12.6196],
  ['Urbs Salvia', 43.1968, 13.3731],
  ['Ascoli Piceno', 42.8536, 13.5749],
  ['Costa dei Trabocchi', 42.3042, 14.4464],
  ['Saepinum', 41.4099, 14.6197],
  ['Gargano / Vieste', 41.8827, 16.1769],
  ['Trani / Andria', 41.2731, 16.4169],
  ['Castel del Monte', 41.0848, 16.2704],
  ['Egnazia', 40.8888, 17.3908],
  ['Valle d’Itria', 40.7845, 17.2372],
  ['Matera', 40.6664, 16.6043],
  ['Rome', 41.9028, 12.4964]
];

const routes = [
  {
    id: 'route-history-coast', type: 'route', category: 'Balanced', icon: '🛣️',
    title: 'History and Adriatic coast',
    description: 'The original circuit: Roman sites, hill towns, the Trabocchi coast, Gargano, Puglia and Matera.',
    details: 'This route keeps the strongest balance of archaeology, food, scenery and swimming-pool time. It includes the main Roman stops without turning every day into a museum day.',
    meta: ['10–12 days', 'Most balanced', 'Moderate driving'],
    stops: ['Rome', 'Assisi', 'Ascoli', 'Trabocchi', 'Saepinum', 'Gargano', 'Valle d’Itria', 'Matera']
  },
  {
    id: 'route-food-scenery', type: 'route', category: 'Relaxed', icon: '🍷',
    title: 'Food, farms and beautiful views',
    description: 'Fewer archaeological detours, more two-night bases, coastal meals and countryside stays with pools.',
    details: 'This version gives priority to agriturismi, regional food, hill towns and longer stays. Urbs Salvia or Saepinum could become optional day trips rather than fixed overnights.',
    meta: ['11–12 days', 'Fewer hotel changes', 'More pool time'],
    stops: ['Rome', 'Assisi', 'Southern Marche', 'Trabocchi', 'Gargano', 'Valle d’Itria', 'Matera']
  },
  {
    id: 'route-roman-focus', type: 'route', category: 'History', icon: '🏛️',
    title: 'Roman roads and ancient towns',
    description: 'A history-led version with extra archaeology at Canne della Battaglia, Egnazia and possibly Metaponto.',
    details: 'This is the strongest route for ancient history. It may require longer drives and less beach time, but it creates a clear historical story from Roman Umbria through southern Italy.',
    meta: ['10–12 days', 'Most archaeology', 'More one-night stops'],
    stops: ['Rome', 'Assisi', 'Urbs Salvia', 'Saepinum', 'Canne', 'Egnazia', 'Metaponto', 'Matera']
  }
];

const places = [
  {
    id: 'place-assisi-roman', type: 'place', category: 'Roman / ancient', icon: '🏛️', title: 'Assisi Roman Forum and Temple of Minerva',
    description: 'Roman Asisium beneath the medieval town, paired with one of Italy’s most memorable historic centres.',
    details: 'A strong opening stop because the Roman remains sit directly inside Assisi. This combines ancient history, the Basilica of St Francis and excellent Umbrian food without an extra detour.',
    meta: ['2–4 hours', 'Easy walking', 'Good first stop']
  },
  {
    id: 'place-urbs-salvia', type: 'place', category: 'Roman / ancient', icon: '🏺', title: 'Urbs Salvia Archaeological Park',
    description: 'A large Roman site with theatre, amphitheatre, walls and a temple complex in the Marche countryside.',
    details: 'A worthwhile stop for serious Roman interest. Its position between Assisi and Ascoli makes it practical, but the visit adds time to the first major driving day.',
    meta: ['2–3 hours', 'Archaeology', 'Countryside']
  },
  {
    id: 'place-ascoli', type: 'place', category: 'Historic town', icon: '⛲', title: 'Ascoli Piceno',
    description: 'Travertine piazzas, medieval streets and the home of olive all’ascolana.',
    details: 'An attractive overnight area with food value as well as architecture. The central Piazza del Popolo is especially good in the evening.',
    meta: ['Half day', 'Food stop', 'Evening walk']
  },
  {
    id: 'place-trabocchi', type: 'place', category: 'Scenic coast', icon: '🌊', title: 'Costa dei Trabocchi',
    description: 'A dramatic Adriatic coastline of coves, cycling paths and wooden fishing platforms.',
    details: 'The signature experience is a seafood meal on a trabocco. This is also an excellent two-night base because it gives the trip a slower coastal interval.',
    meta: ['1–2 days', 'Seafood', 'Swimming']
  },
  {
    id: 'place-saepinum', type: 'place', category: 'Roman / ancient', icon: '🏛️', title: 'Saepinum (Altilia)',
    description: 'An unusually complete Roman town set quietly beneath the Matese mountains.',
    details: 'The city gates, forum, streets, theatre and houses are visible in a peaceful rural setting. It is one of the most distinctive ancient sites on the route.',
    meta: ['2–3 hours', 'Major detour', 'Very atmospheric']
  },
  {
    id: 'place-gargano', type: 'place', category: 'Scenic coast', icon: '⛵', title: 'Gargano coast and Vieste',
    description: 'White cliffs, sea caves, beaches and winding roads around Puglia’s forested promontory.',
    details: 'The area deserves at least two nights. A boat trip from Vieste, the coast road and an inland drive through Foresta Umbra make a strong scenic day.',
    meta: ['2 nights', 'Boat trip', 'Best scenery']
  },
  {
    id: 'place-monte-santangelo', type: 'place', category: 'UNESCO / medieval', icon: '⛪', title: 'Monte Sant’Angelo',
    description: 'A high hill town and ancient pilgrimage site overlooking Gargano and the Adriatic.',
    details: 'This combines mountain views, medieval lanes and the Sanctuary of Saint Michael. It fits naturally into a Gargano driving loop.',
    meta: ['2–3 hours', 'Mountain road', 'Pilgrimage site']
  },
  {
    id: 'place-canne', type: 'place', category: 'Roman / ancient', icon: '⚔️', title: 'Canne della Battaglia',
    description: 'The landscape associated with Hannibal’s crushing victory over Rome in 216 BC.',
    details: 'The historical significance is greater than the scale of visible remains. Best for travellers who are specifically interested in Republican Roman military history.',
    meta: ['1–2 hours', 'Hannibal', 'Optional detour']
  },
  {
    id: 'place-castel-del-monte', type: 'place', category: 'UNESCO / medieval', icon: '🏰', title: 'Castel del Monte',
    description: 'Frederick II’s extraordinary octagonal castle standing above the Puglian landscape.',
    details: 'Not Roman, but one of southern Italy’s essential monuments. It works well between Gargano and the Trani or Andria area.',
    meta: ['2 hours', 'UNESCO', 'Iconic architecture']
  },
  {
    id: 'place-trani', type: 'place', category: 'Historic town', icon: '⛪', title: 'Trani waterfront and cathedral',
    description: 'A pale-stone cathedral beside the sea, a harbour promenade and excellent evening atmosphere.',
    details: 'Trani is a useful overnight stop with easier evening appeal than a purely inland base. It also pairs well with Castel del Monte.',
    meta: ['Half day', 'Waterfront', 'Dinner stop']
  },
  {
    id: 'place-egnazia', type: 'place', category: 'Roman / ancient', icon: '🏺', title: 'Egnazia Archaeological Park',
    description: 'An ancient settlement and museum close to the Adriatic and the Valle d’Itria.',
    details: 'Egnazia is one of the easiest Roman additions in Puglia because it lies close to Fasano and many masseria stays.',
    meta: ['2–3 hours', 'Museum', 'Easy route fit']
  },
  {
    id: 'place-valle-ditria', type: 'place', category: 'Historic town', icon: '🏘️', title: 'Valle d’Itria villages',
    description: 'Alberobello, Locorotondo, Cisternino and Martina Franca among trulli, olive groves and dry-stone walls.',
    details: 'This should be a multi-night base rather than a rushed checklist. The group can vote later on which villages deserve the most time.',
    meta: ['2–3 nights', 'Trulli', 'Food and pools']
  },
  {
    id: 'place-ostuni', type: 'place', category: 'Historic town', icon: '🤍', title: 'Ostuni',
    description: 'The white city rising above olive country with long views toward the Adriatic.',
    details: 'A photogenic evening or late-afternoon stop. Parking outside the historic centre will be important.',
    meta: ['2–4 hours', 'Views', 'Popular']
  },
  {
    id: 'place-matera', type: 'place', category: 'UNESCO / medieval', icon: '🪨', title: 'Matera and the Sassi',
    description: 'A city of cave dwellings, rupestrian churches and dramatic ravine views.',
    details: 'Matera is a likely unanimous must-do and should receive a full day or an overnight. It also forms the natural final major destination before returning to Rome.',
    meta: ['Full day', 'UNESCO', 'Essential']
  }
];

const stays = [
  {
    id: 'stay-assisi', type: 'stay', category: 'Agriturismo area', icon: '🌿', title: 'Assisi, Spello or Bevagna countryside',
    description: 'Umbrian farm stays with pools, parking and easy access to Assisi.', details: 'Search outside the historic centres for better parking and larger family rooms.',
    eur: 130, meta: ['1 night', 'Pool preferred', 'Free parking']
  },
  {
    id: 'stay-marche', type: 'stay', category: 'Agriturismo area', icon: '🌻', title: 'Offida or Ascoli countryside',
    description: 'Rolling Marche hills, vineyards and farm restaurants within reach of Ascoli Piceno.', details: 'A two-night countryside base could reduce packing and allow a slower food-focused day.',
    eur: 125, meta: ['1–2 nights', 'Hill views', 'Restaurant useful']
  },
  {
    id: 'stay-trabocchi', type: 'stay', category: 'Coastal countryside', icon: '🌊', title: 'Rocca San Giovanni or Fossacesia',
    description: 'Country houses above the Trabocchi coast, close to seafood restaurants and beaches.', details: 'Look slightly inland for pool properties while keeping the sea within a short drive.',
    eur: 135, meta: ['2 nights', 'Pool and coast', 'Seafood access']
  },
  {
    id: 'stay-gargano', type: 'stay', category: 'Coastal retreat', icon: '⛱️', title: 'Mattinata or outside Vieste',
    description: 'A quieter Gargano base with coastal views, parking and access to beaches or boat trips.', details: 'Mattinata may offer easier parking and less crowding; Vieste offers more evening restaurants.',
    eur: 150, meta: ['2 nights', 'Summer premium', 'Coastal views']
  },
  {
    id: 'stay-trani', type: 'stay', category: 'Masseria area', icon: '🫒', title: 'Andria, Corato or Trani countryside',
    description: 'A practical base for Castel del Monte, Trani and Canne della Battaglia.', details: 'Choose inland for pools and value, or nearer Trani for evening atmosphere.',
    eur: 130, meta: ['1 night', 'Masseria', 'Historic day trips']
  },
  {
    id: 'stay-valle', type: 'stay', category: 'Masseria / trullo', icon: '🏡', title: 'Cisternino, Locorotondo or Martina Franca',
    description: 'The key long-stay base: trulli, olive groves, pools and access to the best-known Puglian towns.', details: 'This is the area where stretching the budget may be most worthwhile for a memorable property.',
    eur: 155, meta: ['3 nights', 'Priority pool stay', 'Best food base']
  },
  {
    id: 'stay-matera', type: 'stay', category: 'Country stay', icon: '🌄', title: 'Matera outskirts or cave-room option',
    description: 'Choose between easier parking outside the Sassi or one atmospheric night inside the old city.', details: 'A cave room may exceed the target budget, while rural accommodation can offer parking and a pool.',
    eur: 145, meta: ['1 night', 'Parking decision', 'Special final stay']
  }
];

const foods = [
  { id: 'food-umbrian', type: 'food', category: 'Umbria', icon: '🍝', title: 'Strangozzi with truffle', description: 'Rustic Umbrian pasta, ideally paired with local olive oil and cured meats.', details: 'A natural first-night food experience around Assisi.', meta: ['Pasta', 'Truffle', 'Assisi'] },
  { id: 'food-olive-ascolane', type: 'food', category: 'Marche', icon: '🫒', title: 'Olive all’ascolana', description: 'Stuffed and fried olives from Ascoli Piceno.', details: 'Best eaten freshly fried as an aperitivo or starter in Ascoli.', meta: ['Snack', 'Local speciality', 'Child-friendly'] },
  { id: 'food-trabocco', type: 'food', category: 'Abruzzo', icon: '🐟', title: 'Dinner on a trabocco', description: 'A fixed seafood meal above the Adriatic on a traditional fishing platform.', details: 'This needs advance booking in summer and could become one of the trip’s set-piece meals.', meta: ['Seafood', 'Reservation', 'Experience'] },
  { id: 'food-arrosticini', type: 'food', category: 'Abruzzo', icon: '🔥', title: 'Arrosticini', description: 'Small charcoal-grilled skewers of sheep meat, eaten informally and in quantity.', details: 'A classic inland Abruzzo meal and a useful alternative for anyone taking a break from seafood.', meta: ['Grilled', 'Casual', 'Abruzzo'] },
  { id: 'food-burrata', type: 'food', category: 'Puglia', icon: '🧀', title: 'Fresh burrata', description: 'Puglia’s soft, creamy cheese at its best close to where it is produced.', details: 'Pair with tomatoes, olive oil and bread rather than treating it as merely a restaurant garnish.', meta: ['Cheese', 'Puglia', 'Must be fresh'] },
  { id: 'food-bombette', type: 'food', category: 'Valle d’Itria', icon: '🥩', title: 'Bombette in Cisternino', description: 'Meat rolls selected at a butcher and cooked at a fornello pronto.', details: 'A lively, informal Valle d’Itria evening with strong regional character.', meta: ['Meat', 'Cisternino', 'Interactive'] },
  { id: 'food-orecchiette', type: 'food', category: 'Puglia', icon: '🍝', title: 'Orecchiette', description: 'The region’s ear-shaped pasta, often served with turnip greens or tomato.', details: 'A dependable lunch option throughout Puglia and useful for comparing local versions.', meta: ['Pasta', 'Regional classic', 'Family-friendly'] },
  { id: 'food-focaccia', type: 'food', category: 'Puglia', icon: '🍞', title: 'Focaccia barese', description: 'Soft olive-oil bread baked with tomatoes and olives.', details: 'Ideal road-trip food for a picnic or light lunch.', meta: ['Bakery', 'Picnic', 'Bari area'] },
  { id: 'food-matera-bread', type: 'food', category: 'Basilicata', icon: '🥖', title: 'Matera bread and peperoni cruschi', description: 'The city’s famous bread with Basilicata’s crisp dried peppers.', details: 'A simple regional combination to seek out during the Matera stay.', meta: ['Bread', 'Basilicata', 'Local produce'] }
];

const voteLabels = {
  1: ['⛔', 'Definitely skip'],
  2: ['🙅', 'Rather skip'],
  3: ['🤷', 'No preference'],
  4: ['👍', 'Would like'],
  5: ['⭐', 'Must do']
};

let state = loadState();
let activeProfile = null;
let currentFilter = 'All';
let rates = { GBP: 0.86, CNY: 7.8, date: 'planning estimate' };
let map;

function loadState() {
  const fallback = { votes: {}, comments: {}, suggestions: [] };
  try {
    return { ...fallback, ...JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}') };
  } catch {
    return fallback;
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function escapeHtml(value = '') {
  return String(value).replace(/[&<>'"]/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[char]));
}

function suggestionItems() {
  return state.suggestions.map(item => ({
    id: `suggestion-${item.id}`,
    type: item.category,
    category: 'Traveller suggestion',
    icon: '💡',
    title: item.title,
    description: item.text,
    details: item.link ? `${item.text}\n\nLink: ${item.link}` : item.text,
    meta: [`Suggested by ${item.author}`],
    suggestionId: item.id
  }));
}

function allItems() {
  return [...routes, ...places, ...stays, ...foods, ...suggestionItems()];
}

function findItem(id) {
  return allItems().find(item => item.id === id);
}

function getVotes(id) {
  return state.votes[id] || {};
}

function averageVote(id) {
  const values = Object.values(getVotes(id)).filter(Number.isFinite);
  return values.length ? values.reduce((a, b) => a + b, 0) / values.length : 0;
}

function formatPrice(eur) {
  const gbp = Math.round(eur * rates.GBP);
  const cny = Math.round(eur * rates.CNY);
  return `<div class="price-row"><span class="price-chip">€${eur}</span><span class="price-chip">£${gbp}</span><span class="price-chip">¥${cny.toLocaleString()}</span></div>`;
}

function initAccess() {
  const gate = document.getElementById('gate');
  const profileGate = document.getElementById('profileGate');
  const pinForm = document.getElementById('pinForm');
  const pinInput = document.getElementById('pinInput');
  const message = document.getElementById('pinMessage');

  pinForm.addEventListener('submit', event => {
    event.preventDefault();
    if (pinInput.value === TRIP_PIN) {
      gate.classList.add('is-hidden');
      profileGate.classList.remove('is-hidden');
      message.textContent = '';
    } else {
      message.textContent = 'That PIN is not correct.';
      pinInput.value = '';
      pinInput.focus();
    }
  });

  document.querySelectorAll('.profile-choice').forEach(button => {
    button.addEventListener('click', () => enterApp(button.dataset.profile));
  });
}

function enterApp(profile) {
  activeProfile = profile;
  document.getElementById('profileGate').classList.add('is-hidden');
  document.getElementById('app').classList.remove('is-hidden');
  document.getElementById('activeInitial').textContent = profile;
  document.getElementById('activeRole').textContent = profile === 'W' ? 'Administrator' : 'Traveller';
  renderAll();
  setTimeout(initMap, 50);
}

function setupNavigation() {
  document.querySelectorAll('[data-section-link]').forEach(button => {
    button.addEventListener('click', event => {
      event.preventDefault();
      showSection(button.dataset.sectionLink);
    });
  });
  document.getElementById('navToggle').addEventListener('click', () => {
    const nav = document.getElementById('mainNav');
    const open = nav.classList.toggle('open');
    document.getElementById('navToggle').setAttribute('aria-expanded', String(open));
  });
  document.getElementById('switchProfile').addEventListener('click', () => {
    document.getElementById('app').classList.add('is-hidden');
    document.getElementById('profileGate').classList.remove('is-hidden');
  });
}

function showSection(sectionId) {
  document.querySelectorAll('.page-section').forEach(section => section.classList.toggle('active', section.id === sectionId));
  document.querySelectorAll('.main-nav button').forEach(button => button.classList.toggle('active', button.dataset.sectionLink === sectionId));
  document.getElementById('mainNav').classList.remove('open');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  if (sectionId === 'overview' && map) setTimeout(() => map.invalidateSize(), 100);
}

function initMap() {
  if (map || typeof L === 'undefined') return;
  map = L.map('tripMap', { scrollWheelZoom: false }).setView([41.9, 15.0], 6);
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);
  const coords = routePoints.map(point => [point[1], point[2]]);
  L.polyline(coords, { color: '#a6402e', weight: 5, opacity: 0.88 }).addTo(map);
  routePoints.slice(0, -1).forEach((point, index) => {
    const marker = L.circleMarker([point[1], point[2]], {
      radius: index === 0 ? 9 : 7,
      color: '#fffaf0',
      weight: 3,
      fillColor: index === 0 ? '#18352d' : '#a6402e',
      fillOpacity: 1
    }).addTo(map);
    marker.bindPopup(`<strong>${escapeHtml(point[0])}</strong><br>Stop ${index + 1}`);
  });
  map.fitBounds(coords, { padding: [25, 25] });
}

function renderAll() {
  renderCards('routesGrid', routes);
  renderPlaceFilters();
  renderPlaces();
  renderCards('staysGrid', stays);
  renderCards('foodGrid', foods);
  renderSuggestions();
  renderOverview();
  renderDecisions();
  updateFxPanel();
}

function renderCards(containerId, items) {
  const container = document.getElementById(containerId);
  container.innerHTML = items.map(cardTemplate).join('');
  container.querySelectorAll('[data-open-item]').forEach(button => button.addEventListener('click', () => openItem(button.dataset.openItem)));
}

function cardTemplate(item) {
  const avg = averageVote(item.id);
  const count = Object.keys(getVotes(item.id)).length;
  const routeStops = item.stops ? `<div class="route-stops">${item.stops.map(stop => `<span>${escapeHtml(stop)}</span>`).join('')}</div>` : '';
  const price = item.eur ? formatPrice(item.eur) : '';
  return `<article class="option-card">
    <div class="card-image">
      <span class="tag">${escapeHtml(item.category)}</span>
      <span class="big-icon" aria-hidden="true">${item.icon || '📍'}</span>
    </div>
    <div class="card-body">
      <h3>${escapeHtml(item.title)}</h3>
      <p>${escapeHtml(item.description)}</p>
      ${routeStops}${price}
      <div class="card-meta">${(item.meta || []).map(value => `<span>${escapeHtml(value)}</span>`).join('')}</div>
      <div class="card-actions">
        <button class="text-button" data-open-item="${item.id}">Vote and discuss</button>
        <div class="vote-summary"><strong>${avg ? avg.toFixed(1) : '–'}</strong><span>${count}/3 votes</span></div>
      </div>
    </div>
  </article>`;
}

function renderPlaceFilters() {
  const categories = ['All', ...new Set(places.map(item => item.category))];
  const container = document.getElementById('placeFilters');
  container.innerHTML = categories.map(category => `<button class="${category === currentFilter ? 'active' : ''}" data-filter="${escapeHtml(category)}">${escapeHtml(category)}</button>`).join('');
  container.querySelectorAll('button').forEach(button => button.addEventListener('click', () => {
    currentFilter = button.dataset.filter;
    renderPlaceFilters();
    renderPlaces();
  }));
}

function renderPlaces() {
  renderCards('placesGrid', currentFilter === 'All' ? places : places.filter(item => item.category === currentFilter));
}

function openItem(id) {
  const item = findItem(id);
  if (!item) return;
  const votes = getVotes(item.id);
  const comments = state.comments[item.id] || [];
  document.getElementById('dialogContent').innerHTML = `<div class="dialog-inner">
    <p class="eyebrow">${escapeHtml(item.category)}</p>
    <h2>${escapeHtml(item.title)}</h2>
    <p>${escapeHtml(item.details || item.description).replace(/\n/g, '<br>')}</p>
    ${item.eur ? formatPrice(item.eur) : ''}
    <h3>Your vote</h3>
    <div class="dialog-votes">${Object.entries(voteLabels).map(([value, label]) => `<button data-vote="${value}" class="${votes[activeProfile] === Number(value) ? 'selected' : ''}"><span>${label[0]}</span>${label[1]}</button>`).join('')}</div>
    <div class="vote-board">${PROFILES.map(profile => `<div class="vote-person"><strong>${profile}</strong><span>${votes[profile] ? voteLabels[votes[profile]][1] : 'Not voted'}</span></div>`).join('')}</div>
    <h3>Comments</h3>
    <div class="comments">${comments.length ? comments.map(comment => `<div class="comment"><strong>${escapeHtml(comment.author)}</strong>${escapeHtml(comment.text)}</div>`).join('') : '<div class="empty-state">No comments yet.</div>'}</div>
    <form class="dialog-comment-form" data-comment-form="${item.id}">
      <textarea rows="3" maxlength="400" required placeholder="Add a comment as ${activeProfile}"></textarea>
      <button class="primary-button" type="submit">Post comment</button>
    </form>
  </div>`;
  document.querySelectorAll('[data-vote]').forEach(button => button.addEventListener('click', () => setVote(item.id, Number(button.dataset.vote))));
  document.querySelector('[data-comment-form]').addEventListener('submit', event => {
    event.preventDefault();
    const textarea = event.currentTarget.querySelector('textarea');
    addComment(item.id, textarea.value.trim());
  });
  document.getElementById('itemDialog').showModal();
}

function setVote(id, value) {
  state.votes[id] = { ...(state.votes[id] || {}), [activeProfile]: value };
  saveState();
  renderAll();
  openItem(id);
}

function addComment(id, text) {
  if (!text) return;
  state.comments[id] = [...(state.comments[id] || []), { author: activeProfile, text, ts: Date.now() }];
  saveState();
  renderAll();
  openItem(id);
}

function renderOverview() {
  const coreItems = [...routes, ...places, ...stays, ...foods];
  const reviewed = coreItems.filter(item => getVotes(item.id)[activeProfile]).length;
  const groupComplete = coreItems.filter(item => PROFILES.every(profile => getVotes(item.id)[profile])).length;
  const comments = Object.values(state.comments).reduce((sum, list) => sum + list.length, 0);
  document.getElementById('progressStats').innerHTML = [
    ['Your options reviewed', `${reviewed}/${coreItems.length}`],
    ['All three have voted', groupComplete],
    ['Comments added', comments],
    ['Traveller suggestions', state.suggestions.length]
  ].map(([label, value]) => `<div class="progress-row"><span>${label}</span><strong>${value}</strong></div>`).join('');

  const leaders = coreItems
    .filter(item => Object.keys(getVotes(item.id)).length)
    .sort((a, b) => averageVote(b.id) - averageVote(a.id))
    .slice(0, 4);
  document.getElementById('leadingChoices').innerHTML = leaders.length
    ? leaders.map(item => `<div class="mini-item"><strong>${escapeHtml(item.title)}</strong><span>${averageVote(item.id).toFixed(1)} average · ${Object.keys(getVotes(item.id)).length}/3 voted</span></div>`).join('')
    : '<div class="empty-state">No votes yet. Start with the routes.</div>';
}

function renderDecisions() {
  const items = allItems().filter(item => Object.keys(getVotes(item.id)).length > 0);
  const unanimous = [];
  const majority = [];
  const disputed = [];
  items.forEach(item => {
    const values = PROFILES.map(profile => getVotes(item.id)[profile]).filter(Number.isFinite);
    if (values.length < 2) return;
    const positive = values.filter(value => value >= 4).length;
    const negative = values.filter(value => value <= 2).length;
    if (values.length === 3 && Math.min(...values) >= 4) unanimous.push(item);
    else if (positive >= 2) majority.push(item);
    else if ((positive && negative) || Math.max(...values) - Math.min(...values) >= 2) disputed.push(item);
  });
  const columns = [
    ['Unanimous favourites', unanimous, 'Everyone voted positively.'],
    ['Majority choices', majority, 'At least two travellers voted positively.'],
    ['Still disputed', disputed, 'Votes are split or strongly different.']
  ];
  document.getElementById('decisionColumns').innerHTML = columns.map(([title, list, note]) => `<div class="decision-column"><h3>${title}</h3><p>${note}</p>${list.length ? list.map(item => `<div class="decision-item">${escapeHtml(item.title)}<span>${averageVote(item.id).toFixed(1)} average</span></div>`).join('') : '<div class="empty-state">Nothing here yet.</div>'}</div>`).join('');
}

function setupSuggestions() {
  document.getElementById('suggestionForm').addEventListener('submit', event => {
    event.preventDefault();
    const category = document.getElementById('suggestionCategory').value;
    const title = document.getElementById('suggestionTitle').value.trim();
    const text = document.getElementById('suggestionText').value.trim();
    const link = document.getElementById('suggestionLink').value.trim();
    if (!title || !text) return;
    state.suggestions.unshift({ id: Date.now(), category, title, text, link, author: activeProfile });
    saveState();
    event.currentTarget.reset();
    renderAll();
  });
}

function renderSuggestions() {
  const container = document.getElementById('suggestionsList');
  if (!state.suggestions.length) {
    container.innerHTML = '<div class="empty-state">No traveller suggestions yet.</div>';
    return;
  }
  container.innerHTML = state.suggestions.map(item => {
    const canDelete = activeProfile === 'W' || activeProfile === item.author;
    return `<article class="suggestion-card">
      <header><div><p class="eyebrow">${escapeHtml(item.category)} · suggested by ${escapeHtml(item.author)}</p><h3>${escapeHtml(item.title)}</h3></div>${canDelete ? `<button class="delete-button" data-delete-suggestion="${item.id}">Remove</button>` : ''}</header>
      <p>${escapeHtml(item.text)}</p>
      ${item.link ? `<a href="${escapeHtml(item.link)}" target="_blank" rel="noopener">Open link</a>` : ''}
      <div class="card-actions"><button class="text-button" data-open-item="suggestion-${item.id}">Vote and discuss</button><div class="vote-summary"><strong>${averageVote(`suggestion-${item.id}`) ? averageVote(`suggestion-${item.id}`).toFixed(1) : '–'}</strong><span>${Object.keys(getVotes(`suggestion-${item.id}`)).length}/3 votes</span></div></div>
    </article>`;
  }).join('');
  container.querySelectorAll('[data-delete-suggestion]').forEach(button => button.addEventListener('click', () => deleteSuggestion(Number(button.dataset.deleteSuggestion))));
  container.querySelectorAll('[data-open-item]').forEach(button => button.addEventListener('click', () => openItem(button.dataset.openItem)));
}

function deleteSuggestion(id) {
  const item = state.suggestions.find(suggestion => suggestion.id === id);
  if (!item || (activeProfile !== 'W' && activeProfile !== item.author)) return;
  state.suggestions = state.suggestions.filter(suggestion => suggestion.id !== id);
  delete state.votes[`suggestion-${id}`];
  delete state.comments[`suggestion-${id}`];
  saveState();
  renderAll();
}

async function updateRates() {
  try {
    const response = await fetch('https://api.frankfurter.dev/v1/latest?base=EUR&symbols=GBP,CNY');
    if (!response.ok) throw new Error('Rate request failed');
    const data = await response.json();
    rates = { GBP: data.rates.GBP, CNY: data.rates.CNY, date: data.date };
    renderCards('staysGrid', stays);
    updateFxPanel();
  } catch {
    updateFxPanel(true);
  }
}

function updateFxPanel(fallback = false) {
  const panel = document.getElementById('fxPanel');
  if (!panel) return;
  panel.innerHTML = `<strong>€1 = £${rates.GBP.toFixed(3)} · ¥${rates.CNY.toFixed(2)}</strong><span>${fallback ? 'Using planning rates; live update unavailable.' : `Reference rates dated ${rates.date}.`} Accommodation prices remain estimates.</span>`;
}

function setupDialog() {
  const dialog = document.getElementById('itemDialog');
  document.getElementById('closeDialog').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    const rect = dialog.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
  });
}

initAccess();
setupNavigation();
setupSuggestions();
setupDialog();
updateRates();
