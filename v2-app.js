const TRIP_PIN = '2027';
const PROFILES = ['W', 'N', 'L'];
const STORAGE_KEY = 'la-strada-2027-v2';
const OLD_STORAGE_KEY = 'la-strada-2027-state-v1';

const commonsImage = fileName => `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(fileName)}?width=1600`;
const googleMap = query => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
const googleRoute = stops => `https://www.google.com/maps/dir/${stops.map(stop => encodeURIComponent(stop)).join('/')}`;

const BASES = [
  {
    id: 'mountain', order: 1, days: 'Day 1', nights: 1, name: 'Gran Sasso mountain night', short: 'Rocca Calascio',
    coords: [42.3288, 13.6884], from: 'Rome', drive: 'About 2 hr 30 min',
    image: commonsImage('Rocca Calascio 2009 by-RaBoe.jpg'),
    intro: 'A spectacular first night among stone villages, high mountain views and one of Italy’s most cinematic fortresses.',
    why: 'This replaces a routine first-night hotel with a genuine experience while still moving the trip east toward the Adriatic.',
    plan: ['Leave Rome after breakfast and drive into the Gran Sasso mountains.', 'Walk up to Rocca Calascio and the octagonal Santa Maria della Pietà.', 'Dinner and one quiet night in Santo Stefano di Sessanio.'],
    officialUrl: 'https://www.italia.it/en/abruzzo/l-aquila/rocca-calascio',
    mapUrl: googleMap('Rocca Calascio Italy')
  },
  {
    id: 'trabocchi', order: 2, days: 'Days 2–3', nights: 2, name: 'Costa dei Trabocchi', short: 'Fossacesia coast',
    coords: [42.2462, 14.5181], from: 'Rocca Calascio', drive: 'About 2 hr 10 min',
    image: commonsImage('Costa dei trabocchi.jpg'),
    intro: 'Two unhurried days for coves, the Via Verde cycle path, a seafood meal above the sea and the Abbey of San Giovanni in Venere.',
    why: 'The coast gives the trip a softer rhythm after the mountain night and combines history, swimming, food and beautiful views without moving hotels.',
    plan: ['Arrival afternoon at the abbey viewpoint and Fossacesia beach.', 'Full day for cycling or swimming, a trabocco lunch or dinner and pool time.', 'Leave after breakfast for Gargano.'],
    officialUrl: 'https://www.abruzzoturismo.it/it/costa-dei-trabocchi',
    mapUrl: googleMap('Costa dei Trabocchi Abruzzo Italy')
  },
  {
    id: 'gargano', order: 3, days: 'Days 4–5', nights: 2, name: 'Gargano', short: 'Vieste or Mattinata',
    coords: [41.8827, 16.1769], from: 'Costa dei Trabocchi', drive: 'About 3 hr',
    image: commonsImage('Vieste - Panorama.jpeg'),
    intro: 'White cliffs, sea caves, beaches, forest roads and one of Puglia’s most dramatic coastal landscapes.',
    why: 'Two nights permit one proper coastal day rather than using Gargano as another roadside stop.',
    plan: ['Arrival, old-town walk and relaxed dinner in Vieste or Mattinata.', 'Full day for a sea-cave boat trip, beach and optional Foresta Umbra.', 'Monte Sant’Angelo can be added on arrival or departure.'],
    officialUrl: 'https://www.viesteturismo.com/',
    mapUrl: googleMap('Vieste Gargano Italy')
  },
  {
    id: 'valle', order: 4, days: 'Days 6–8', nights: 3, name: 'Valle d’Itria', short: 'Trulli and masserie',
    coords: [40.7433, 17.4258], from: 'Gargano', drive: 'About 3 hr 20 min',
    image: commonsImage('Trulli panorama.jpg'),
    intro: 'The longest base: three nights among trulli, olive groves and white hill towns, ideally in a property worth enjoying in its own right.',
    why: 'This is where a slower road trip pays off. The group can explore without attempting Alberobello, Ostuni, Egnazia and the coast in one exhausting day.',
    plan: ['Transfer south with an optional stop at Castel del Monte or Trani.', 'Hill-town day: Alberobello, Locorotondo and Cisternino.', 'Flexible day: Egnazia, Ostuni, Monopoli, a beach or simply the pool.'],
    officialUrl: 'https://visit.puglia.it/en/valle-d-itria',
    mapUrl: googleMap("Valle d'Itria Puglia Italy")
  },
  {
    id: 'matera', order: 5, days: 'Days 9–10', nights: 2, name: 'Matera', short: 'The Sassi',
    coords: [40.6664, 16.6043], from: 'Valle d’Itria', drive: 'About 1 hr 20 min',
    image: commonsImage('Panorama of the two Sassi of Matera.jpg'),
    intro: 'Two nights to experience the cave districts after the day-trippers leave and to choose between a central cave stay or a relaxing country property.',
    why: 'Matera deserves more than a rushed afternoon. Two nights allow the Sassi, rock churches, the Murgia viewpoint and a slower food-focused day.',
    plan: ['Arrive early enough for a first walk through Sasso Barisano.', 'Full day for the Sassi, rupestrian churches and sunset viewpoint.', 'Return to Rome on Day 11, allowing roughly five to six hours plus stops.'],
    officialUrl: 'https://www.materaturismo.it/en/',
    mapUrl: googleMap('Sassi di Matera Italy')
  }
];

const STAYS = [
  { id:'stay-mountain-locanda', base:'mountain', name:'Locanda Sul Lago', eur:164, image:commonsImage('Rocca Calascio 2009 by-RaBoe.jpg'), description:'Family-friendly countryside inn with restaurant, parking and outdoor space.', features:['Restaurant','Free parking','Family friendly'], best:'Best all-round first-night option', url:'https://www.booking.com/hotel/it/locanda-sul-lago.html?checkin=2027-07-05&checkout=2027-07-06&no_rooms=1&group_adults=3&group_children=1&age=8&selected_currency=EUR', mapUrl:googleMap('Locanda Sul Lago Santo Stefano di Sessanio Italy'), note:'A provisional July 2027 search showed about €164 for the group. Recheck once the exact date is fixed.' },
  { id:'stay-mountain-roccia', base:'mountain', name:'La Casa nella Roccia', eur:142, image:commonsImage('Santo Stefano di Sessanio - panorama.jpg'), description:'A simpler family accommodation in the stone village with parking and space for the group.', features:['Lower price','Free parking','Family room'], best:'Best value', url:'https://www.booking.com/hotel/it/la-casa-nella-roccia-santo-stefano-di-sessanio.html?checkin=2027-07-05&checkout=2027-07-06&no_rooms=1&group_adults=3&group_children=1&age=8&selected_currency=EUR', mapUrl:googleMap('La Casa nella Roccia Santo Stefano di Sessanio Italy'), note:'A provisional July 2027 search showed about €142 for the group.' },
  { id:'stay-mountain-palazzo', base:'mountain', name:'Residence Il Palazzo', eur:155, image:commonsImage('Santo Stefano di Sessanio.jpg'), description:'Rooms and apartments in a restored historic building inside Santo Stefano di Sessanio.', features:['Historic building','Apartment option','Restaurant'], best:'Most atmospheric', url:'https://residenceilpalazzo.it/', mapUrl:googleMap('Residence Il Palazzo Santo Stefano di Sessanio Italy'), note:'The displayed amount is a planning allowance rather than a confirmed July 2027 quote.' },
  { id:'stay-trabocchi-villa-emilia', base:'trabocchi', name:'Villa Emilia', eur:155, image:commonsImage('Costa dei trabocchi.jpg'), description:'A country B&B near Fossacesia, the abbey and the coast, with a seasonal pool and garden.', features:['Pool','Country setting','Near abbey'], best:'Best balance of pool and location', url:'https://www.bbvillaemilia.it/', mapUrl:googleMap('Villa Emilia Fossacesia Italy'), note:'The amount is a per-night planning allowance for the group.' },
  { id:'stay-trabocchi-levante', base:'trabocchi', name:'Hotel Levante', eur:175, image:commonsImage('Fossacesia marina.jpg'), description:'A straightforward family hotel at Fossacesia Marina with a seasonal pool and easy beach access.', features:['Pool','Beach access','Convenient'], best:'Easiest beach option', url:'https://www.hotellevante.it/', mapUrl:googleMap('Hotel Levante Fossacesia Italy'), note:'Less agriturismo character, but extremely practical for a short coastal stay.' },
  { id:'stay-trabocchi-frasimon', base:'trabocchi', name:'Relais FraSimon Antico Casale', eur:185, image:commonsImage('San Vito Chietino, Costa dei Trabocchi.jpg'), description:'A polished rural relais near San Vito Chietino with pool, breakfast, family rooms and parking.', features:['Pool','Family room','Private parking'], best:'Most polished', url:'https://relaisfrasimon.it/', mapUrl:googleMap('Relais FraSimon Antico Casale San Vito Chietino Italy'), note:'Likely a budget stretch in peak July, but worth comparing.' },
  { id:'stay-gargano-passione', base:'gargano', name:'Agriturismo Passione Natura', eur:155, image:commonsImage('Vieste - Panorama.jpeg'), description:'Farm stay near Vieste with family rooms, infinity pool, local food and mini golf.', features:['Infinity pool','Mini golf','Family rooms'], best:'Best for the child and adults', url:'https://www.visitvieste.com/agriturismo-passione-natura/', mapUrl:googleMap('Agriturismo Passione Natura Vieste Italy'), note:'A strong mix of relaxation, food and on-site activities.' },
  { id:'stay-gargano-azzarone', base:'gargano', name:'Agriturismo Azzarone', eur:145, image:commonsImage('Gargano coast.jpg'), description:'Apartments among olive trees with pool, restaurant, playground, parking and kitchenettes.', features:['Pool','Playground','Kitchenette'], best:'Best self-catering option', url:'https://www.visitvieste.com/agriturismo-azzarone/', mapUrl:googleMap('Agriturismo Azzarone Vieste Italy'), note:'Apartment space may be especially useful for a two-night family stay.' },
  { id:'stay-gargano-giorgio', base:'gargano', name:'Agriturismo Giorgio', eur:140, image:commonsImage('Mattinata - panorama.jpg'), description:'A quieter pool option among olive groves near Mattinata, with restaurant and apartments.', features:['Pool','Restaurant','Quieter base'], best:'Best lower-cost option', url:'https://www.agriturismi.it/en/mattinata?piscina=on', mapUrl:googleMap('Agriturismo Giorgio Mattinata Italy'), note:'Mattinata is quieter than Vieste and convenient for the southern coves.' },
  { id:'stay-valle-colarossa', base:'valle', name:'TrulliColarossa', eur:175, image:commonsImage('Trulli panorama.jpg'), description:'Traditional trulli near Alberobello with pool, breakfast and dedicated children’s space.', features:['Pool','Child-friendly','Trullo stay'], best:'Best family trullo experience', url:'https://www.trullicolarossa.it/', mapUrl:googleMap('TrulliColarossa Alberobello Italy'), note:'A strong family-focused option without requiring a full luxury-estate budget.' },
  { id:'stay-valle-bb', base:'valle', name:'Trulli Valle d’Itria B&B', eur:180, image:commonsImage('Valle d Itria trulli.jpg'), description:'Independent trullo apartments between Cisternino, Martina Franca and Ostuni.', features:['Heated pool','Apartments','Central location'], best:'Best location for day trips', url:'https://www.trullivalleditria.it/en/', mapUrl:googleMap("Trulli Valle d'Itria B&B Italy"), note:'The central position and independent apartments suit a slower three-night stay.' },
  { id:'stay-valle-odegitria', base:'valle', name:'Tenuta Odegitria', eur:190, image:commonsImage('Trullo in Valle d Itria.jpg'), description:'A family-run trulli estate near Martina Franca with pool, tennis and holiday homes.', features:['Pool','Tennis','Holiday home'], best:'Best property facilities', url:'https://tenutaodegitria.it/en/', mapUrl:googleMap('Tenuta Odegitria Martina Franca Italy'), note:'The option to spend time at the property may justify the budget stretch.' },
  { id:'stay-matera-matinelle', base:'matera', name:'Agriturismo Le Matinelle', eur:155, image:commonsImage('Matera panorama.jpg'), description:'A rural Matera base with garden, swimming pool, restaurant and farm atmosphere.', features:['Pool','Restaurant','Easy parking'], best:'Best for pool and parking', url:'https://www.lematinelle.com/', mapUrl:googleMap('Agriturismo Le Matinelle Matera Italy'), note:'The trade-off is driving into Matera rather than walking from a Sassi hotel.' },
  { id:'stay-matera-belvedere', base:'matera', name:'Hotel Il Belvedere', eur:190, image:commonsImage('Panorama of the two Sassi of Matera.jpg'), description:'A Sassi hotel with cave and classic rooms, atmospheric terraces and room types for four.', features:['Inside Sassi','Rooms for 4','Panoramic terrace'], best:'Best city experience', url:'https://www.hotelbelvedere.matera.it/en/rooms/', mapUrl:googleMap('Hotel Il Belvedere Matera Italy'), note:'No pool, but it lets the group experience Matera after the day-trippers leave.' },
  { id:'stay-matera-origini', base:'matera', name:'Le Origini Suites & Rooms', eur:185, image:commonsImage('Sassi di Matera at sunset.jpg'), description:'Cave suites and panoramic rooms overlooking the Sassi, with breakfast and family-oriented offers.', features:['Cave rooms','Central','Views'], best:'Best cave-room alternative', url:'https://www.hotelleorigini.it/en/', mapUrl:googleMap('Le Origini Suites and Rooms Matera Italy'), note:'A central atmosphere-led alternative to the countryside pool option.' }
];

const ACTIVITIES = [
  { id:'act-rocca', base:'mountain', type:'View and history', name:'Rocca Calascio at sunset', image:commonsImage('Rocca Calascio 2009 by-RaBoe.jpg'), description:'Walk to the high medieval fortress and the octagonal church of Santa Maria della Pietà.', duration:'2–3 hours', officialUrl:'https://www.italia.it/en/abruzzo/l-aquila/rocca-calascio', mapUrl:googleMap('Rocca Calascio Italy') },
  { id:'act-santo-stefano', base:'mountain', type:'Historic village', name:'Santo Stefano di Sessanio', image:commonsImage('Santo Stefano di Sessanio.jpg'), description:'Stone lanes, mountain atmosphere and a memorable place for the first evening meal.', duration:'1–2 hours', officialUrl:'https://www.italia.it/en/abruzzo/l-aquila/santo-stefano-di-sessanio', mapUrl:googleMap('Santo Stefano di Sessanio Italy') },
  { id:'act-gran-sasso', base:'mountain', type:'Scenery', name:'Gran Sasso viewpoints', image:commonsImage('Gran Sasso d Italia.jpg'), description:'Short scenic stops through the national park rather than adding another formal attraction.', duration:'Flexible', officialUrl:'https://www.gransassolagapark.it/', mapUrl:googleMap('Gran Sasso National Park Italy') },
  { id:'act-abbey', base:'trabocchi', type:'Church and view', name:'Abbey of San Giovanni in Venere', image:commonsImage('Abbazia di San Giovanni in Venere - Fossacesia.jpg'), description:'A major Benedictine abbey on a promontory overlooking the Adriatic and surrounding countryside.', duration:'1–2 hours', officialUrl:'https://cultura.gov.it/luogo/abbazia-di-san-giovanni-in-venere', mapUrl:googleMap('Abbazia di San Giovanni in Venere Fossacesia Italy') },
  { id:'act-trabocco-dinner', base:'trabocchi', type:'Food experience', name:'Dinner on a trabocco', image:commonsImage('Costa dei trabocchi.jpg'), description:'A fixed seafood meal on one of the traditional wooden fishing platforms above the sea.', duration:'Evening', officialUrl:'https://www.abruzzoturismo.it/it/costa-dei-trabocchi', mapUrl:googleMap('trabocco restaurant San Vito Chietino Italy') },
  { id:'act-via-verde', base:'trabocchi', type:'Coast and cycling', name:'Via Verde coastal ride', image:commonsImage('Via Verde Costa dei Trabocchi.jpg'), description:'Rent bicycles for an easy coastal section linking coves, beaches and trabocchi.', duration:'Half day', officialUrl:'https://www.abruzzoturismo.it/en/via-verde-dei-trabocchi', mapUrl:googleMap('Via Verde Costa dei Trabocchi bike rental') },
  { id:'act-vieste-boat', base:'gargano', type:'Boat and scenery', name:'Vieste sea-cave boat trip', image:commonsImage('Vieste - Panorama.jpeg'), description:'See Gargano’s cliffs, arches and caves from the water, with swimming stops on suitable tours.', duration:'Half day', officialUrl:'https://www.viesteturismo.com/', mapUrl:googleMap('Vieste boat tour sea caves') },
  { id:'act-monte-santangelo', base:'gargano', type:'UNESCO and pilgrimage', name:'Monte Sant’Angelo', image:commonsImage("Monte Sant'Angelo - Santuario di San Michele Arcangelo.jpg"), description:'A high historic town and ancient sanctuary with sweeping views across Gargano.', duration:'2–3 hours', officialUrl:'https://montesantangelo.it/en/topics/turismo', mapUrl:googleMap("Monte Sant'Angelo Italy") },
  { id:'act-foresta', base:'gargano', type:'Nature', name:'Foresta Umbra', image:commonsImage('Foresta Umbra.jpg'), description:'A cooler inland forest drive and walk that contrasts with Gargano’s beaches and cliffs.', duration:'Half day', officialUrl:'https://www.parcogargano.it/', mapUrl:googleMap('Foresta Umbra Gargano Italy') },
  { id:'act-alberobello', base:'valle', type:'UNESCO town', name:'Alberobello', image:commonsImage('Trulli panorama.jpg'), description:'The famous trulli districts, best visited early before the largest crowds arrive.', duration:'2–3 hours', officialUrl:'https://whc.unesco.org/en/list/787/', mapUrl:googleMap('Alberobello Italy') },
  { id:'act-villages', base:'valle', type:'Hill towns and food', name:'Locorotondo and Cisternino', image:commonsImage('Panorama Locorotondo.jpg'), description:'White lanes, views over the valley and a butcher-style bombette dinner in Cisternino.', duration:'Half to full day', officialUrl:'https://visit.puglia.it/en/valle-d-itria', mapUrl:googleMap('Locorotondo Cisternino Italy') },
  { id:'act-egnazia', base:'valle', type:'Roman archaeology', name:'Egnazia Archaeological Park', image:commonsImage('Archaeological Site at Egnazia.jpg'), description:'An ancient settlement and museum close to the Adriatic and many Valle d’Itria masserie.', duration:'2–3 hours', officialUrl:'https://museipuglia.cultura.gov.it/musei-puglia/museo-archeologico-nazionale-e-parco-archeologico-di-egnazia/', mapUrl:googleMap('Parco Archeologico di Egnazia Italy') },
  { id:'act-sassi', base:'matera', type:'UNESCO city', name:'Explore both Sassi districts', image:commonsImage('Panorama of the two Sassi of Matera.jpg'), description:'Walk Sasso Barisano and Sasso Caveoso slowly enough to understand the city rather than simply photograph it.', duration:'Full day', officialUrl:'https://www.materaturismo.it/en/', mapUrl:googleMap('Sassi di Matera Italy') },
  { id:'act-rock-churches', base:'matera', type:'Churches and history', name:'Rupestrian churches', image:commonsImage('Matera rupestrian church.jpg'), description:'Choose a small group of rock-cut churches instead of attempting every ticketed site.', duration:'2–3 hours', officialUrl:'https://www.parcomurgia.it/', mapUrl:googleMap('Matera rupestrian churches Italy') },
  { id:'act-murgia', base:'matera', type:'Viewpoint', name:'Murgia Timone sunset', image:commonsImage('Matera Murgia panorama.jpg'), description:'Cross the ravine for the classic view back toward the Sassi in late afternoon or at sunset.', duration:'1–2 hours', officialUrl:'https://www.parcomurgia.it/', mapUrl:googleMap('Belvedere Murgia Timone Matera') }
];

const ROUTE_URL = googleRoute(['Rome, Italy','Rocca Calascio, Italy','Fossacesia, Italy','Vieste, Italy','Cisternino, Italy','Matera, Italy','Rome, Italy']);

let state = loadState();
let activeProfile = localStorage.getItem('la-strada-profile') || null;
let currentView = 'trip';
let selectedBase = 'mountain';
let mapInstance = null;
let rates = { GBP: .86, CNY: 7.8, date: 'planning rates' };
let toastTimer;

function loadState() {
  const fallback = { votes:{}, comments:{}, confirmed:{}, suggestions:[], budget:{ car:0, food:0, activities:0 }, currency:'EUR' };
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
    if (!Object.keys(saved).length) {
      const old = JSON.parse(localStorage.getItem(OLD_STORAGE_KEY) || '{}');
      if (old.comments) fallback.comments = old.comments;
      if (old.suggestions) fallback.suggestions = old.suggestions;
    }
    return { ...fallback, ...saved, budget:{...fallback.budget, ...(saved.budget || {})} };
  } catch { return fallback; }
}
function saveState() { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }
function escapeHtml(value='') { return String(value).replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c])); }
function byId(id) { return document.getElementById(id); }
function getBase(id) { return BASES.find(base => base.id === id); }
function getStay(id) { return STAYS.find(stay => stay.id === id); }
function getActivity(id) { return ACTIVITIES.find(activity => activity.id === id); }
function itemById(id) { return getStay(id) || getActivity(id); }
function votesFor(id) { return state.votes[id] || {}; }
function commentsFor(id) { return state.comments[id] || []; }
function baseStays(baseId) { return STAYS.filter(stay => stay.base === baseId); }
function baseActivities(baseId) { return ACTIVITIES.filter(activity => activity.base === baseId); }
function imageTag(src, alt, cls='') { return `<img class="${cls}" src="${escapeHtml(src)}" alt="${escapeHtml(alt)}" loading="lazy" referrerpolicy="no-referrer">`; }

function showToast(message) {
  const toast = byId('toast');
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2200);
}

function formatCurrency(eur, currency=state.currency) {
  const value = currency === 'EUR' ? eur : eur * rates[currency];
  return new Intl.NumberFormat('en-GB', { style:'currency', currency, maximumFractionDigits:0 }).format(value);
}
function priceOtherCurrencies(eur) {
  return ['EUR','GBP','CNY'].filter(code => code !== state.currency).map(code => formatCurrency(eur, code)).join(' · ');
}

function initAccess() {
  const gate = byId('gate');
  const profileGate = byId('profileGate');
  byId('pinForm').addEventListener('submit', event => {
    event.preventDefault();
    const input = byId('pinInput');
    if (input.value === TRIP_PIN) {
      gate.classList.add('is-hidden');
      if (activeProfile && PROFILES.includes(activeProfile)) enterApp(activeProfile);
      else profileGate.classList.remove('is-hidden');
      byId('pinMessage').textContent = '';
    } else {
      byId('pinMessage').textContent = 'That PIN is not correct.';
      input.value = '';
      input.focus();
    }
  });
  document.querySelectorAll('[data-profile]').forEach(button => button.addEventListener('click', () => enterApp(button.dataset.profile)));
  byId('profileButton').addEventListener('click', () => {
    byId('app').classList.add('is-hidden');
    profileGate.classList.remove('is-hidden');
  });
}
function enterApp(profile) {
  activeProfile = profile;
  localStorage.setItem('la-strada-profile', profile);
  byId('profileGate').classList.add('is-hidden');
  byId('gate').classList.add('is-hidden');
  byId('app').classList.remove('is-hidden');
  byId('profileInitial').textContent = profile;
  byId('profileRole').textContent = profile === 'W' ? 'Administrator' : 'Traveller';
  renderView(currentView);
}

function setupNavigation() {
  document.addEventListener('click', event => {
    const viewButton = event.target.closest('[data-view]');
    if (viewButton) { renderView(viewButton.dataset.view); return; }
    const baseButton = event.target.closest('[data-open-base]');
    if (baseButton) { renderBaseDetail(baseButton.dataset.openBase); return; }
    const detailButton = event.target.closest('[data-detail]');
    if (detailButton) { openDetail(detailButton.dataset.detail); return; }
    const voteButton = event.target.closest('[data-vote-item]');
    if (voteButton) { setVote(voteButton.dataset.voteItem, voteButton.dataset.choice); return; }
    const filterButton = event.target.closest('[data-base-filter]');
    if (filterButton) { selectedBase = filterButton.dataset.baseFilter; renderView(currentView); return; }
    const confirmButton = event.target.closest('[data-confirm-base]');
    if (confirmButton) { confirmBase(confirmButton.dataset.confirmBase); return; }
    const currencyButton = event.target.closest('[data-currency]');
    if (currencyButton) { state.currency = currencyButton.dataset.currency; saveState(); renderView(currentView); return; }
    const removeSuggestion = event.target.closest('[data-remove-suggestion]');
    if (removeSuggestion) { removeSuggestionItem(Number(removeSuggestion.dataset.removeSuggestion)); return; }
  });
  byId('closeSheet').addEventListener('click', () => byId('detailSheet').close());
  byId('detailSheet').addEventListener('click', event => {
    const rect = event.currentTarget.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) event.currentTarget.close();
  });
}

function renderView(view) {
  currentView = view;
  document.querySelectorAll('[data-view]').forEach(button => button.classList.toggle('active', button.dataset.view === view));
  const root = byId('viewRoot');
  if (view === 'trip') root.innerHTML = renderTripBoard();
  else if (view === 'stays') root.innerHTML = renderStaysPage();
  else if (view === 'explore') root.innerHTML = renderExplorePage();
  else if (view === 'decisions') root.innerHTML = renderDecisionsPage();
  else if (view === 'budget') root.innerHTML = renderBudgetPage();
  else if (view === 'map') root.innerHTML = renderMapPage();
  else root.innerHTML = renderTripBoard();
  root.focus({preventScroll:true});
  window.scrollTo({top:0, behavior:'smooth'});
  if (view === 'map') setTimeout(initMap, 50);
  wirePageForms();
}

function stayScore(stay) {
  const values = Object.values(votesFor(stay.id));
  return values.reduce((sum, choice) => sum + ({first:3, second:2, pass:0}[choice] ?? 0), 0);
}
function leadingStay(baseId) {
  const candidates = [...baseStays(baseId)].sort((a,b) => stayScore(b)-stayScore(a));
  return stayScore(candidates[0]) ? candidates[0] : null;
}
function profilesWithFirstChoice(baseId) {
  return PROFILES.filter(profile => baseStays(baseId).some(stay => votesFor(stay.id)[profile] === 'first'));
}
function accommodationProgress() {
  return BASES.filter(base => profilesWithFirstChoice(base.id).length === 3).length;
}
function nextIncompleteBase() { return BASES.find(base => profilesWithFirstChoice(base.id).length < 3) || BASES.find(base => !state.confirmed[base.id]); }

function renderTripBoard() {
  const complete = accommodationProgress();
  const confirmed = Object.keys(state.confirmed).length;
  const next = nextIncompleteBase();
  return `<div class="page">
    <section class="trip-hero">
      ${imageTag(BASES[3].image, 'Trulli and countryside in the Valle d’Itria')}
      <div class="hero-content">
        <p class="kicker light">The slower route · 10 nights</p>
        <h1>Five bases.<br>More Italy.</h1>
        <p>One memorable mountain night, then enough time in each region to enjoy the landscape, food and accommodation instead of constantly packing the car.</p>
        <div class="hero-meta"><span>3 adults + 1 child</span><span>Rome start and finish</span><span>W · N · L equal votes</span></div>
        <div class="hero-actions"><button class="primary-btn" data-view="stays">Continue accommodation vote</button><button class="secondary-btn" data-view="map">Open route map</button></div>
      </div>
    </section>

    <section class="progress-panel">
      <div class="progress-copy"><strong>${complete}/5 bases have a first choice from everyone</strong><span>${confirmed} accommodation ${confirmed === 1 ? 'choice has' : 'choices have'} been confirmed by W.</span><div class="progress-track"><i style="width:${(complete/5)*100}%"></i></div></div>
      <div class="progress-number">${Math.round((complete/5)*100)}%</div>
    </section>

    <div class="trip-layout">
      <section class="timeline" aria-label="Trip itinerary">
        ${BASES.map(renderBaseCard).join('')}
      </section>
      <aside class="sidebar-stack">
        <article class="panel next-task"><p class="kicker">Next useful decision</p><h3>${next ? escapeHtml(next.name) : 'The accommodation route is ready'}</h3><p>${next ? `${profilesWithFirstChoice(next.id).length}/3 travellers have selected a first choice here.` : 'Review the final leaders and confirm them in the Decision Centre.'}</p><button class="primary-btn" ${next ? `data-open-base="${next.id}"` : 'data-view="decisions"'}>${next ? 'Open this base' : 'Review decisions'}</button></article>
        <article class="panel"><p class="kicker">Trip shape</p><h3>Less packing, better days</h3><div class="mini-list">${BASES.map(base => `<div class="mini-row"><strong>${escapeHtml(base.short)}</strong><span>${base.nights} ${base.nights === 1 ? 'night' : 'nights'}</span></div>`).join('')}</div></article>
        <article class="panel"><p class="kicker">Useful link</p><h3>Full driving route</h3><p style="color:var(--muted);line-height:1.5">Open all five bases in Google Maps for a practical road overview.</p><a class="primary-btn" style="display:inline-block;text-decoration:none" href="${ROUTE_URL}" target="_blank" rel="noopener">Open in Google Maps ↗</a></article>
      </aside>
    </div>
  </div>`;
}

function renderBaseCard(base) {
  const leader = state.confirmed[base.id] ? getStay(state.confirmed[base.id]) : leadingStay(base.id);
  const voters = profilesWithFirstChoice(base.id).length;
  const confirmed = Boolean(state.confirmed[base.id]);
  return `<article class="base-card">
    <div class="base-photo">${imageTag(base.image, base.name)}</div>
    <div class="base-main">
      <div class="base-topline"><span class="day-pill">${base.days}</span><span class="status-pill ${confirmed ? 'confirmed' : 'open'}">${confirmed ? 'Confirmed' : `${voters}/3 first choices`}</span></div>
      <h3>${base.order}. ${escapeHtml(base.name)}</h3>
      <p>${escapeHtml(base.intro)}</p>
    </div>
    <div class="base-side"><div><strong>${base.nights} ${base.nights === 1 ? 'night' : 'nights'}</strong><span>${escapeHtml(base.drive)} from ${escapeHtml(base.from)}</span></div><button class="link-btn" data-open-base="${base.id}">${leader ? 'Review base' : 'Explore base'}</button></div>
  </article>`;
}

function renderBaseDetail(baseId) {
  const base = getBase(baseId);
  if (!base) return;
  selectedBase = baseId;
  currentView = 'base';
  document.querySelectorAll('[data-view]').forEach(button => button.classList.remove('active'));
  byId('viewRoot').innerHTML = `<div class="page">
    <button class="secondary-btn" data-view="trip" style="margin-bottom:.8rem">← Back to trip board</button>
    <section class="base-detail-hero">${imageTag(base.image, base.name)}<div class="base-detail-copy"><p class="kicker light">${base.days} · ${base.nights} ${base.nights === 1 ? 'night' : 'nights'}</p><h1>${escapeHtml(base.name)}</h1><p>${escapeHtml(base.intro)}</p><div class="detail-actions"><a class="primary-btn" href="${base.mapUrl}" target="_blank" rel="noopener" style="text-decoration:none">Open in Maps ↗</a><a class="secondary-btn" href="${base.officialUrl}" target="_blank" rel="noopener" style="text-decoration:none">Official information ↗</a></div></div></section>
    <section class="panel" style="margin-top:1rem"><p class="kicker">Why this base works</p><h3>${escapeHtml(base.why)}</h3><div class="mini-list">${base.plan.map((step,index) => `<div class="mini-row"><strong>${index+1}</strong><span>${escapeHtml(step)}</span></div>`).join('')}</div></section>
    <div class="section-heading" style="margin-top:2rem"><div><p class="kicker">Accommodation comparison</p><h2>Choose where to stay</h2><p>Rank the three candidates. Each traveller can choose one first choice, one second choice or pass.</p></div></div>
    <div class="stay-grid">${baseStays(base.id).map(renderStayCard).join('')}</div>
    <div class="section-heading" style="margin-top:2.5rem"><div><p class="kicker">Nearby choices</p><h2>What could we do?</h2><p>These are options around the base, not compulsory items in a packed schedule.</p></div></div>
    <div class="explore-grid">${baseActivities(base.id).map(renderActivityCard).join('')}</div>
  </div>`;
  byId('viewRoot').focus({preventScroll:true});
  window.scrollTo({top:0, behavior:'smooth'});
}

function baseFilterMarkup() {
  return `<div class="base-filter">${BASES.map(base => `<button class="${selectedBase===base.id?'active':''}" data-base-filter="${base.id}">${base.order}. ${escapeHtml(base.short)}</button>`).join('')}</div>`;
}
function currencyMarkup() {
  return `<div class="currency-box"><strong>${['EUR','GBP','CNY'].map(code => `<button class="${state.currency===code?'active':''}" data-currency="${code}" style="border:0;border-radius:8px;padding:.35rem .45rem;${state.currency===code?'color:white;background:var(--forest)':'background:transparent'}">${code}</button>`).join(' ')}</strong><small>Rates dated ${escapeHtml(rates.date)}</small></div>`;
}
function renderStaysPage() {
  const base = getBase(selectedBase);
  return `<div class="page">
    <div class="section-heading"><div><p class="kicker">Compare like with like</p><h1>Accommodation vote</h1><p>Three candidates per base, aligned around the same key questions: price, pool, location, family suitability and atmosphere.</p></div></div>
    ${baseFilterMarkup()}
    <div class="compare-intro"><div><h2>${escapeHtml(base.name)}</h2><p>${base.nights} ${base.nights===1?'night':'nights'} · ${profilesWithFirstChoice(base.id).length}/3 travellers have a first choice</p></div>${currencyMarkup()}</div>
    <div class="stay-grid">${baseStays(base.id).map(renderStayCard).join('')}</div>
    <div class="panel" style="margin-top:1rem"><p class="kicker">Comparison note</p><h3>Dates are still provisional</h3><p style="color:var(--muted);line-height:1.55">Prices are per-night planning allowances for three adults and one eight-year-old. We will recheck availability, room layout and cancellation terms once the exact July 2027 dates are chosen.</p></div>
  </div>`;
}

function renderStayCard(stay) {
  const vote = votesFor(stay.id)[activeProfile];
  const base = getBase(stay.base);
  const confirmed = state.confirmed[stay.base] === stay.id;
  const leader = leadingStay(stay.base)?.id === stay.id && stayScore(stay) > 0;
  return `<article class="stay-card">
    <div class="stay-image">${imageTag(stay.image, `${base.name} area`)}<span class="card-badge">${confirmed ? 'Group choice' : leader ? 'Currently leading' : 'Candidate'}</span><span class="price-badge"><strong>${formatCurrency(stay.eur)}</strong><small>per night · ${priceOtherCurrencies(stay.eur)}</small></span></div>
    <div class="card-content"><h3>${escapeHtml(stay.name)}</h3><p>${escapeHtml(stay.description)}</p><div class="feature-row">${stay.features.map(feature => `<span class="feature-pill">${escapeHtml(feature)}</span>`).join('')}</div><div class="winner-ribbon">${escapeHtml(stay.best)}</div>
      <div class="resource-row"><a href="${stay.url}" target="_blank" rel="noopener">View property ↗</a><a href="${stay.mapUrl}" target="_blank" rel="noopener">Maps ↗</a><button class="text-action" data-detail="${stay.id}">Details & comments</button></div>
      <div class="vote-block"><div class="vote-label">Your ranking <span>${vote ? voteLabel(vote) : 'Not voted'}</span></div><div class="rank-buttons">${['first','second','pass'].map(choice => `<button class="${vote===choice?'selected':''}" data-vote-item="${stay.id}" data-choice="${choice}">${choice==='first'?'1st choice':choice==='second'?'2nd choice':'Not for me'}</button>`).join('')}</div>${renderGroupVotes(stay.id)}</div>
    </div>
  </article>`;
}
function voteLabel(choice) { return ({first:'First choice',second:'Second choice',pass:'Not for me',must:'Must do',interested:'Interested',skip:'Skip'})[choice] || 'Not voted'; }
function renderGroupVotes(itemId) {
  const votes = votesFor(itemId);
  return `<div class="group-votes">${PROFILES.map(profile => `<span class="voter-chip"><b>${profile}</b> ${votes[profile] ? voteLabel(votes[profile]) : '—'}</span>`).join('')}</div>`;
}

function renderExplorePage() {
  const base = getBase(selectedBase);
  return `<div class="page"><div class="section-heading"><div><p class="kicker">Enjoy the area, do not collect stops</p><h1>Explore around each base</h1><p>Vote on what genuinely excites the group. The final itinerary should leave room for meals, swimming and unplanned discoveries.</p></div><button class="secondary-btn" data-view="map">Open map</button></div>${baseFilterMarkup()}<div class="compare-intro"><div><h2>${escapeHtml(base.name)}</h2><p>${escapeHtml(base.why)}</p></div></div><div class="explore-grid">${baseActivities(base.id).map(renderActivityCard).join('')}</div></div>`;
}
function renderActivityCard(activity) {
  const vote = votesFor(activity.id)[activeProfile];
  return `<article class="activity-card"><div class="activity-image">${imageTag(activity.image, activity.name)}<span class="card-badge">${escapeHtml(activity.type)}</span></div><div class="card-content"><span class="type-dot">${escapeHtml(activity.duration)}</span><h3>${escapeHtml(activity.name)}</h3><p>${escapeHtml(activity.description)}</p><div class="resource-row"><a href="${activity.officialUrl}" target="_blank" rel="noopener">Official info ↗</a><a href="${activity.mapUrl}" target="_blank" rel="noopener">Maps ↗</a><button class="text-action" data-detail="${activity.id}">Discuss</button></div><div class="vote-block"><div class="vote-label">Your interest <span>${vote ? voteLabel(vote) : 'Not voted'}</span></div><div class="interest-buttons">${['must','interested','skip'].map(choice => `<button class="${vote===choice?'selected':''}" data-vote-item="${activity.id}" data-choice="${choice}">${choice==='must'?'Must do':choice==='interested'?'Interested':'Skip'}</button>`).join('')}</div>${renderGroupVotes(activity.id)}</div></div></article>`;
}

function setVote(itemId, choice) {
  const item = itemById(itemId);
  if (!item || !activeProfile) return;
  state.votes[itemId] = {...(state.votes[itemId] || {})};
  if (state.votes[itemId][activeProfile] === choice) delete state.votes[itemId][activeProfile];
  else {
    if (getStay(itemId)) {
      const sameBase = baseStays(item.base);
      if (choice === 'first' || choice === 'second') sameBase.forEach(stay => {
        if (state.votes[stay.id]?.[activeProfile] === choice) delete state.votes[stay.id][activeProfile];
      });
    }
    state.votes[itemId][activeProfile] = choice;
  }
  saveState();
  showToast('Vote saved');
  if (currentView === 'base') renderBaseDetail(item.base); else renderView(currentView);
}

function decisionStatus(baseId) {
  if (state.confirmed[baseId]) return 'confirmed';
  if (profilesWithFirstChoice(baseId).length === 3) return 'ready';
  return 'open';
}
function renderDecisionsPage() {
  const confirmed = BASES.filter(base => state.confirmed[base.id]).length;
  const ready = BASES.filter(base => decisionStatus(base.id)==='ready').length;
  const open = BASES.filter(base => decisionStatus(base.id)==='open').length;
  const activityVotes = ACTIVITIES.filter(activity => Object.keys(votesFor(activity.id)).length).length;
  return `<div class="page"><div class="section-heading"><div><p class="kicker">Turn votes into a real plan</p><h1>Decision centre</h1><p>See the leader in each base, where votes are still missing, and which choices W can confirm for the final itinerary.</p></div></div>
    <div class="decision-summary"><article class="metric-card"><strong>${confirmed}</strong><span>Confirmed bases</span></article><article class="metric-card"><strong>${ready}</strong><span>Ready to confirm</span></article><article class="metric-card"><strong>${open}</strong><span>Still need votes</span></article><article class="metric-card"><strong>${activityVotes}</strong><span>Activities discussed</span></article></div>
    <section class="decision-list">${BASES.map(renderDecisionCard).join('')}</section>
    <div class="section-heading" style="margin-top:2.4rem"><div><p class="kicker">Activity consensus</p><h2>What is rising to the top?</h2></div></div>
    <section class="decision-list">${renderActivityDecisions()}</section>
  </div>`;
}
function renderDecisionCard(base) {
  const status = decisionStatus(base.id);
  const leader = state.confirmed[base.id] ? getStay(state.confirmed[base.id]) : leadingStay(base.id);
  const firstVoters = profilesWithFirstChoice(base.id);
  return `<article class="decision-card"><div><div class="base-topline"><span class="day-pill">${base.days}</span><span class="status-pill ${status==='confirmed'?'confirmed':'open'}">${status==='confirmed'?'Confirmed':status==='ready'?'Ready to confirm':'Voting open'}</span></div><h3>${escapeHtml(base.name)}</h3><p>${leader ? `${escapeHtml(leader.name)} is ${status==='confirmed'?'the confirmed choice':'currently leading'} at ${formatCurrency(leader.eur)} per night.` : 'No accommodation is leading yet.'}</p><div class="vote-matrix">${PROFILES.map(profile => { const first = baseStays(base.id).find(stay => votesFor(stay.id)[profile]==='first'); return `<span><b>${profile}</b> ${first ? escapeHtml(first.name) : 'not voted'}</span>`; }).join('')}</div></div><button class="confirm-btn" data-confirm-base="${base.id}" ${activeProfile!=='W' || !leader || firstVoters.length<2 ? 'disabled' : ''}>${status==='confirmed'?'Change confirmation':'Confirm leader'}</button></article>`;
}
function renderActivityDecisions() {
  const scored = ACTIVITIES.map(activity => {
    const values = Object.values(votesFor(activity.id));
    const score = values.reduce((sum, choice) => sum + ({must:3,interested:2,skip:0}[choice] || 0), 0);
    return {activity, score, count:values.length};
  }).filter(row => row.count).sort((a,b) => b.score-a.score);
  if (!scored.length) return '<div class="empty">No activity votes yet. Open Explore and begin with the things each person genuinely cares about.</div>';
  return scored.slice(0,8).map(({activity,score,count}) => `<article class="decision-card"><div><h3>${escapeHtml(activity.name)}</h3><p>${escapeHtml(getBase(activity.base).short)} · ${count}/3 voted · group score ${score}</p>${renderGroupVotes(activity.id)}</div><button class="secondary-btn" data-detail="${activity.id}">Review</button></article>`).join('');
}
function confirmBase(baseId) {
  if (activeProfile !== 'W') return;
  const leader = leadingStay(baseId);
  if (!leader) return;
  state.confirmed[baseId] = leader.id;
  saveState();
  showToast(`${leader.name} confirmed`);
  renderView('decisions');
}

function selectedStayForBudget(baseId) { return getStay(state.confirmed[baseId]) || leadingStay(baseId) || baseStays(baseId)[0]; }
function accommodationTotal() { return BASES.reduce((total,base) => total + selectedStayForBudget(base.id).eur * base.nights, 0); }
function renderBudgetPage() {
  const accommodation = accommodationTotal();
  const extras = Number(state.budget.car||0)+Number(state.budget.food||0)+Number(state.budget.activities||0);
  const total = accommodation + extras;
  return `<div class="page"><div class="section-heading"><div><p class="kicker">A planning estimate, not a booking total</p><h1>Trip budget</h1><p>The accommodation estimate automatically follows confirmed choices, or the current leader where no choice has been confirmed.</p></div>${currencyMarkup()}</div>
    <div class="budget-grid"><section class="budget-table">${BASES.map(base => { const stay=selectedStayForBudget(base.id); return `<div class="budget-row"><div><strong>${escapeHtml(base.short)}</strong><br><span>${escapeHtml(stay.name)} · ${base.nights} ${base.nights===1?'night':'nights'}</span></div><strong>${formatCurrency(stay.eur*base.nights)}</strong></div>`; }).join('')}<div class="budget-row"><span>Accommodation subtotal</span><strong>${formatCurrency(accommodation)}</strong></div><div class="budget-row"><span>Rental car allowance</span><strong>${formatCurrency(Number(state.budget.car||0))}</strong></div><div class="budget-row"><span>Food allowance</span><strong>${formatCurrency(Number(state.budget.food||0))}</strong></div><div class="budget-row"><span>Activities allowance</span><strong>${formatCurrency(Number(state.budget.activities||0))}</strong></div><div class="budget-row budget-total"><span>Current planning total</span><strong>${formatCurrency(total)}</strong></div></section>
      <aside class="sidebar-stack"><section class="panel"><p class="kicker">Add allowances in euros</p><h3>Other trip costs</h3><form id="budgetForm" class="budget-inputs"><label>Rental car<input name="car" type="number" min="0" step="10" value="${Number(state.budget.car||0)}"></label><label>Food for the trip<input name="food" type="number" min="0" step="10" value="${Number(state.budget.food||0)}"></label><label>Activities and tickets<input name="activities" type="number" min="0" step="10" value="${Number(state.budget.activities||0)}"></label><button class="primary-btn">Update budget</button></form></section><section class="panel"><p class="kicker">Traveller suggestions</p><h3>Add another idea</h3><form id="suggestionForm" class="suggestion-form"><select name="base">${BASES.map(base => `<option value="${base.id}">${escapeHtml(base.short)}</option>`).join('')}</select><input name="title" maxlength="80" required placeholder="Place, property or experience"><textarea name="text" rows="3" maxlength="400" required placeholder="Why should we consider it?"></textarea><input name="url" type="url" placeholder="Optional link"><button class="primary-btn">Add suggestion</button></form></section></aside></div>
    <div class="section-heading" style="margin-top:2.4rem"><div><p class="kicker">Ideas from W, N and L</p><h2>Suggestion inbox</h2></div></div><div class="decision-list">${renderSuggestions()}</div>
  </div>`;
}
function renderSuggestions() {
  if (!state.suggestions.length) return '<div class="empty">No traveller suggestions yet.</div>';
  return state.suggestions.map(item => `<article class="suggestion-card"><header><div><span class="status-pill open">${escapeHtml(getBase(item.base)?.short || item.base)}</span><h4>${escapeHtml(item.title)}</h4></div>${activeProfile==='W'||activeProfile===item.author?`<button class="text-action" data-remove-suggestion="${item.id}">Remove</button>`:''}</header><p>${escapeHtml(item.text)} · Suggested by ${escapeHtml(item.author)}</p>${item.url?`<a href="${escapeHtml(item.url)}" target="_blank" rel="noopener">Open link ↗</a>`:''}</article>`).join('');
}
function wirePageForms() {
  const budgetForm = byId('budgetForm');
  if (budgetForm) budgetForm.addEventListener('submit', event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    state.budget = {car:Number(data.get('car')||0),food:Number(data.get('food')||0),activities:Number(data.get('activities')||0)};
    saveState(); showToast('Budget updated'); renderView('budget');
  });
  const suggestionForm = byId('suggestionForm');
  if (suggestionForm) suggestionForm.addEventListener('submit', event => {
    event.preventDefault(); const data = new FormData(event.currentTarget);
    state.suggestions.unshift({id:Date.now(),base:data.get('base'),title:String(data.get('title')).trim(),text:String(data.get('text')).trim(),url:String(data.get('url')).trim(),author:activeProfile});
    saveState(); showToast('Suggestion added'); renderView('budget');
  });
}
function removeSuggestionItem(id) { state.suggestions = state.suggestions.filter(item => item.id !== id); saveState(); renderView('budget'); }

function renderMapPage() {
  return `<div class="page"><div class="section-heading"><div><p class="kicker">Five bases, one coherent journey</p><h1>Route map</h1><p>The map shows overnight bases. Attractions are day trips from those bases, not additional hotel changes.</p></div><a class="secondary-btn" href="${ROUTE_URL}" target="_blank" rel="noopener" style="text-decoration:none">Open driving route ↗</a></div><div class="map-shell"><div id="routeMap" aria-label="Map of the five-base route"></div><aside class="panel"><p class="kicker">Overnight bases</p><h3>Rome to Matera</h3><div class="map-list">${BASES.map(base => `<button class="map-stop" data-map-base="${base.id}"><strong>${base.order}. ${escapeHtml(base.short)}</strong><span>${base.days} · ${base.nights} ${base.nights===1?'night':'nights'} · ${escapeHtml(base.drive)}</span></button>`).join('')}</div></aside></div></div>`;
}
function initMap() {
  if (mapInstance) { mapInstance.remove(); mapInstance = null; }
  if (typeof L === 'undefined' || !byId('routeMap')) return;
  mapInstance = L.map('routeMap',{scrollWheelZoom:false}).setView([41.7,15.1],6);
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:18,attribution:'&copy; OpenStreetMap contributors'}).addTo(mapInstance);
  const points = [[41.9028,12.4964], ...BASES.map(base => base.coords), [41.9028,12.4964]];
  L.polyline(points,{color:'#b6533e',weight:5,opacity:.9}).addTo(mapInstance);
  L.circleMarker([41.9028,12.4964],{radius:9,color:'#fff',weight:3,fillColor:'#173d34',fillOpacity:1}).addTo(mapInstance).bindPopup('<strong>Rome</strong><br>Start and finish');
  BASES.forEach(base => L.circleMarker(base.coords,{radius:9,color:'#fff',weight:3,fillColor:'#b6533e',fillOpacity:1}).addTo(mapInstance).bindPopup(`<strong>${base.order}. ${escapeHtml(base.name)}</strong><br>${base.nights} ${base.nights===1?'night':'nights'}`));
  mapInstance.fitBounds(points,{padding:[30,30]});
  document.querySelectorAll('[data-map-base]').forEach(button => button.addEventListener('click', () => { const base=getBase(button.dataset.mapBase); mapInstance.flyTo(base.coords,9); }));
}

function openDetail(itemId) {
  const item = itemById(itemId);
  if (!item) return;
  const isStay = Boolean(getStay(itemId));
  const base = getBase(item.base);
  const links = isStay ? `<a href="${item.url}" target="_blank" rel="noopener">View property ↗</a><a href="${item.mapUrl}" target="_blank" rel="noopener">Open in Maps ↗</a>` : `<a href="${item.officialUrl}" target="_blank" rel="noopener">Official information ↗</a><a href="${item.mapUrl}" target="_blank" rel="noopener">Open in Maps ↗</a>`;
  byId('sheetContent').innerHTML = `<div class="sheet-hero">${imageTag(item.image, item.name)}</div><div class="sheet-body"><p class="kicker">${escapeHtml(base.name)} · ${isStay?'Accommodation':'Experience'}</p><h2>${escapeHtml(item.name)}</h2><p>${escapeHtml(isStay ? item.note : item.description)}</p>${isStay?`<div class="feature-row">${item.features.map(feature=>`<span class="feature-pill">${escapeHtml(feature)}</span>`).join('')}</div><div class="price-badge" style="position:static;display:inline-block"><strong>${formatCurrency(item.eur)}</strong><small>per night · ${priceOtherCurrencies(item.eur)}</small></div>`:''}<div class="resource-row">${links}</div><h3 style="margin-top:1.5rem">Group discussion</h3><div class="comments">${commentsFor(item.id).length?commentsFor(item.id).map(comment=>`<div class="comment"><b>${escapeHtml(comment.author)}</b>${escapeHtml(comment.text)}</div>`).join(''):'<div class="empty">No comments yet.</div>'}</div><form id="commentForm" class="comment-form" data-item="${item.id}"><textarea rows="3" maxlength="400" required placeholder="Add a comment as ${activeProfile}"></textarea><button class="primary-btn">Post comment</button></form></div>`;
  const sheet = byId('detailSheet');
  if (!sheet.open) sheet.showModal();
  byId('commentForm').addEventListener('submit', event => {
    event.preventDefault(); const text=event.currentTarget.querySelector('textarea').value.trim(); if(!text)return;
    state.comments[item.id] = [...commentsFor(item.id),{author:activeProfile,text,ts:Date.now()}]; saveState(); openDetail(item.id); showToast('Comment added');
  });
}

async function updateRates() {
  try {
    const response = await fetch('https://api.frankfurter.dev/v1/latest?base=EUR&symbols=GBP,CNY');
    if (!response.ok) throw new Error('Rate request failed');
    const data = await response.json();
    rates = {GBP:data.rates.GBP,CNY:data.rates.CNY,date:data.date};
    if (!byId('app').classList.contains('is-hidden')) {
      if (currentView === 'base') renderBaseDetail(selectedBase); else renderView(currentView);
    }
  } catch { }
}

function setupImageFallbacks() {
  document.addEventListener('error', event => {
    if (event.target.tagName === 'IMG') {
      event.target.style.display = 'none';
      event.target.parentElement?.classList.add('image-missing');
    }
  }, true);
}

function init() {
  initAccess();
  setupNavigation();
  setupImageFallbacks();
  updateRates();
}

document.addEventListener('DOMContentLoaded', init);
