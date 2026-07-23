/* Route Lab: three genuinely different ways to drive south from Rome. */

const ROUTE_OPTIONS = [
  {
    id: 'east',
    direction: 'Head east first',
    title: 'Mountains, Adriatic and Puglia',
    badge: 'Recommended',
    image: commonsImage('Rocca Calascio 2009 by-RaBoe.jpg'),
    summary: 'The most varied loop: a cool mountain opening, the Trabocchi coast, wild Gargano, trulli country and two nights in Matera.',
    reason: 'Best overall match for beauty, memorable food and distinctive rural stays. Starting in the mountains also gives the trip an immediate sense of occasion before the hotter coastal sections.',
    tradeoff: 'Gargano roads are slower and winding, and the final Matera-to-Rome day is long.',
    nights: 10,
    bases: [
      ['Gran Sasso / Rocca Calascio', 1],
      ['Costa dei Trabocchi', 2],
      ['Gargano', 2],
      ['Valle d’Itria', 3],
      ['Matera', 2]
    ],
    poolBases: 'Trabocchi countryside, Gargano olive farms and Valle d’Itria masserie',
    stayCharacter: ['Stone-village albergo diffuso', 'Agriturismo above the Adriatic', 'Olive-grove farm with pool', 'Trullo or masseria with pool'],
    highlights: ['Rocca Calascio', 'Trabocco seafood dinner', 'Gargano sea caves', 'Trulli and bombette', 'Matera at sunset'],
    scores: { beauty: 5, food: 5, pools: 5, relaxed: 4 },
    points: [
      ['Rome', 41.9028, 12.4964],
      ['Rocca Calascio', 42.3288, 13.6884],
      ['Costa dei Trabocchi', 42.2462, 14.5181],
      ['Vieste', 41.8827, 16.1769],
      ['Valle d’Itria', 40.7433, 17.4258],
      ['Matera', 40.6664, 16.6043],
      ['Rome', 41.9028, 12.4964]
    ],
    googleUrl: googleRoute(['Rome, Italy','Rocca Calascio, Italy','Fossacesia, Italy','Vieste, Italy','Cisternino, Italy','Matera, Italy','Rome, Italy']),
    links: [
      ['Rocca Calascio', 'https://abruzzoturismo.it/en/destination/calascio'],
      ['Trabocchi Coast', 'https://abruzzoturismo.it/en/trabocchi-coast'],
      ['Valle d’Itria', 'https://visit.puglia.it/en/valle-d-itria']
    ]
  },
  {
    id: 'south',
    direction: 'Head straight south',
    title: 'Cilento, Maratea and Basilicata',
    badge: 'Best coast and antiquity',
    image: commonsImage('Paestum, Temple of Neptune (39321392425).jpg'),
    summary: 'A warmer, more southern route built around Greek temples, buffalo mozzarella country, the dramatic Tyrrhenian coast, Matera and Puglia.',
    reason: 'Choose this if Paestum and Maratea excite the group more than Abruzzo and Gargano. It has superb food, grand archaeology and excellent countryside accommodation potential.',
    tradeoff: 'It spends more time in intense summer heat and involves a less tidy return loop after Valle d’Itria.',
    nights: 10,
    bases: [
      ['Paestum and Cilento', 2],
      ['Maratea', 2],
      ['Matera', 2],
      ['Valle d’Itria', 3],
      ['Trani / Castel del Monte', 1]
    ],
    poolBases: 'Cilento farms, Maratea hillside retreats and Valle d’Itria masserie',
    stayCharacter: ['Buffalo-farm agriturismo with pool', 'Sea-view hillside retreat', 'Matera country estate', 'White-stone masseria or private trullo'],
    highlights: ['Paestum temples', 'Buffalo mozzarella farms', 'Maratea viewpoints and beaches', 'Matera', 'Castel del Monte'],
    scores: { beauty: 5, food: 5, pools: 4, relaxed: 4 },
    points: [
      ['Rome', 41.9028, 12.4964],
      ['Paestum', 40.4230, 15.0050],
      ['Maratea', 39.9990, 15.7160],
      ['Matera', 40.6664, 16.6043],
      ['Valle d’Itria', 40.7433, 17.4258],
      ['Trani', 41.2773, 16.4170],
      ['Rome', 41.9028, 12.4964]
    ],
    googleUrl: googleRoute(['Rome, Italy','Paestum, Italy','Maratea, Italy','Matera, Italy','Cisternino, Italy','Trani, Italy','Rome, Italy']),
    links: [
      ['Paestum', 'https://www.italia.it/en/campania/salerno/paestum'],
      ['Maratea', 'https://www.marateawelcome.it/en/home/'],
      ['Valle d’Itria', 'https://visit.puglia.it/en/valle-d-itria']
    ]
  },
  {
    id: 'hills',
    direction: 'Arc north-east, then south',
    title: 'Umbria, Marche and slow food country',
    badge: 'Most relaxed and rural',
    image: commonsImage('Assisi panorama.jpg'),
    summary: 'The gentlest food-and-countryside route: Umbrian hill towns, southern Marche, the Trabocchi coast, a long masseria stay and Matera.',
    reason: 'Best for elegant agriturismi, vineyards, olive oil, churches and beautiful towns without making every day about a major attraction.',
    tradeoff: 'It sacrifices Gargano and includes one longer transfer from Abruzzo to the Valle d’Itria.',
    nights: 11,
    bases: [
      ['Assisi / Spello countryside', 2],
      ['Ascoli and southern Marche', 2],
      ['Costa dei Trabocchi', 2],
      ['Valle d’Itria', 3],
      ['Matera', 2]
    ],
    poolBases: 'Umbrian olive estates, Marche vineyard farms, Trabocchi countryside and Puglian masserie',
    stayCharacter: ['Olive estate with panoramic pool', 'Wine agriturismo in the Marche hills', 'Coastal country house', 'Trullo estate with pool'],
    highlights: ['Assisi and Spello', 'Pinturicchio and Umbrian views', 'Ascoli food', 'Trabocchi coast', 'Three slow nights in trulli country'],
    scores: { beauty: 5, food: 5, pools: 5, relaxed: 5 },
    points: [
      ['Rome', 41.9028, 12.4964],
      ['Assisi / Spello', 43.0707, 12.6196],
      ['Ascoli Piceno', 42.8536, 13.5749],
      ['Costa dei Trabocchi', 42.2462, 14.5181],
      ['Valle d’Itria', 40.7433, 17.4258],
      ['Matera', 40.6664, 16.6043],
      ['Rome', 41.9028, 12.4964]
    ],
    googleUrl: googleRoute(['Rome, Italy','Assisi, Italy','Ascoli Piceno, Italy','Fossacesia, Italy','Cisternino, Italy','Matera, Italy','Rome, Italy']),
    links: [
      ['Assisi and Spello', 'https://www.italia.it/en/umbria/things-to-do/via-lauretana-in-umbria'],
      ['Trabocchi Coast', 'https://abruzzoturismo.it/en/trabocchi-coast'],
      ['Valle d’Itria', 'https://visit.puglia.it/en/valle-d-itria']
    ]
  }
];

state.routeVotes = state.routeVotes || {};
currentView = 'routes';
let routeMapInstances = [];

function routeVotesFor(routeId) {
  return state.routeVotes[routeId] || {};
}

function routeVoteLabel(choice) {
  return ({first:'Favourite', second:'Second choice', pass:'Not for us'})[choice] || 'Not voted';
}

function routeScore(route) {
  const weights = { first: 3, second: 1, pass: -2 };
  return Object.values(routeVotesFor(route.id)).reduce((sum, choice) => sum + (weights[choice] || 0), 0);
}

function leadingRoute() {
  return [...ROUTE_OPTIONS].sort((a,b) => routeScore(b) - routeScore(a))[0];
}

function routeGroupVotes(routeId) {
  const votes = routeVotesFor(routeId);
  return `<div class="route-voter-row">${PROFILES.map(profile => `<span><b>${profile}</b>${votes[profile] ? routeVoteLabel(votes[profile]) : '—'}</span>`).join('')}</div>`;
}

function scoreDots(value) {
  return `<span class="score-dots" aria-label="${value} out of 5">${Array.from({length:5}, (_,i) => `<i class="${i < value ? 'on' : ''}"></i>`).join('')}</span>`;
}

function renderRoutesPage() {
  const leader = leadingRoute();
  const totalVotes = ROUTE_OPTIONS.reduce((sum, route) => sum + Object.keys(routeVotesFor(route.id)).length, 0);
  return `<div class="page route-lab-page">
    <section class="route-lab-hero">
      <div>
        <p class="kicker">Start with the shape of the journey</p>
        <h1>Three roads from Rome.<br>Three different holidays.</h1>
        <p>All three begin and end in Rome. Compare them on the same scale before deciding whether to head east into the mountains, drive directly south, or take the slower hill-town route.</p>
      </div>
      <aside class="route-recommendation">
        <span>My recommendation</span>
        <strong>Head east first</strong>
        <p>It gives the strongest contrast: a cooler mountain opening, Adriatic seafood, wild coastline, rural Puglia and Matera — without wasting the first day on an ordinary transit hotel.</p>
      </aside>
    </section>

    <section class="route-lab-status">
      <div><strong>${totalVotes}/9</strong><span>route preference votes recorded</span></div>
      <div><strong>${escapeHtml(leader.title)}</strong><span>current group leader</span></div>
      <a href="${ROUTE_OPTIONS[0].googleUrl}" target="_blank" rel="noopener">Open recommended route in Google Maps ↗</a>
    </section>

    <section class="route-comparison-grid">
      ${ROUTE_OPTIONS.map(renderRouteOption).join('')}
    </section>

    <section class="route-conclusion panel">
      <div><p class="kicker">How I would choose</p><h2>East for variety. South for Paestum and Maratea. Hills for the slowest food-focused trip.</h2></div>
      <div class="route-choice-notes">
        <p><b>Choose East</b> when the priority is the most visually varied journey and the best overall match for coast, food, unique stays and pools.</p>
        <p><b>Choose South</b> when Greek temples, mozzarella farms and the Tyrrhenian scenery of Maratea are non-negotiable.</p>
        <p><b>Choose Hills</b> when the group wants elegant rural bases, churches, wine country and the least rushed atmosphere.</p>
      </div>
    </section>

    <section class="route-working-draft">
      <div><p class="kicker">Detailed planning</p><h2>The existing five-base itinerary is the East-first working draft.</h2><p>Accommodation comparisons and activities are already developed for that route. The other two routes remain fully voteable; once one wins, its exact bases and three accommodation choices per area can replace the working draft.</p></div>
      <button class="primary-btn" data-view="trip">Open East-first working draft</button>
    </section>
  </div>`;
}

function renderRouteOption(route) {
  const vote = routeVotesFor(route.id)[activeProfile];
  const isLeader = leadingRoute().id === route.id && routeScore(route) > 0;
  return `<article class="route-option-card ${route.id === 'east' ? 'recommended-route' : ''}">
    <header class="route-card-image">
      ${imageTag(route.image, route.title)}
      <span class="route-direction">${escapeHtml(route.direction)}</span>
      <span class="route-badge">${isLeader ? 'Group leader' : escapeHtml(route.badge)}</span>
    </header>
    <div class="route-card-body">
      <p class="kicker">${route.nights} nights</p>
      <h2>${escapeHtml(route.title)}</h2>
      <p class="route-summary">${escapeHtml(route.summary)}</p>

      <div id="route-map-${route.id}" class="route-mini-map" aria-label="Map preview for ${escapeHtml(route.title)}"></div>
      <a class="google-route-button" href="${route.googleUrl}" target="_blank" rel="noopener">Open this full route in Google Maps ↗</a>

      <div class="route-night-plan">${route.bases.map(([name,nights],index) => `<div><span>${index+1}</span><strong>${escapeHtml(name)}</strong><small>${nights} ${nights===1?'night':'nights'}</small></div>`).join('')}</div>

      <div class="route-score-grid">
        <div><span>Beauty</span>${scoreDots(route.scores.beauty)}</div>
        <div><span>Food</span>${scoreDots(route.scores.food)}</div>
        <div><span>Pool stays</span>${scoreDots(route.scores.pools)}</div>
        <div><span>Relaxed pace</span>${scoreDots(route.scores.relaxed)}</div>
      </div>

      <div class="route-callout"><b>Why choose it</b><p>${escapeHtml(route.reason)}</p></div>
      <div class="route-callout tradeoff"><b>Trade-off</b><p>${escapeHtml(route.tradeoff)}</p></div>

      <div class="route-feature-block"><b>Best areas for a pool stay</b><p>${escapeHtml(route.poolBases)}</p></div>
      <div class="route-chips">${route.stayCharacter.map(item => `<span>${escapeHtml(item)}</span>`).join('')}</div>

      <details class="route-details"><summary>Highlights and official links</summary><div class="route-highlight-list">${route.highlights.map(item => `<span>✦ ${escapeHtml(item)}</span>`).join('')}</div><div class="route-official-links">${route.links.map(([label,url]) => `<a href="${url}" target="_blank" rel="noopener">${escapeHtml(label)} ↗</a>`).join('')}</div></details>

      <div class="route-vote-block">
        <div class="vote-label">Your route preference <span>${vote ? routeVoteLabel(vote) : 'Not voted'}</span></div>
        <div class="route-rank-buttons">${['first','second','pass'].map(choice => `<button class="${vote===choice?'selected':''}" data-route-vote="${route.id}" data-choice="${choice}">${choice==='first'?'Favourite':choice==='second'?'Second choice':'Not for us'}</button>`).join('')}</div>
        ${routeGroupVotes(route.id)}
      </div>
    </div>
  </article>`;
}

function setRouteVote(routeId, choice) {
  state.routeVotes[routeId] = { ...(state.routeVotes[routeId] || {}) };
  if (state.routeVotes[routeId][activeProfile] === choice) {
    delete state.routeVotes[routeId][activeProfile];
  } else {
    if (choice === 'first' || choice === 'second') {
      ROUTE_OPTIONS.forEach(route => {
        if (state.routeVotes[route.id]?.[activeProfile] === choice) delete state.routeVotes[route.id][activeProfile];
      });
    }
    state.routeVotes[routeId][activeProfile] = choice;
  }
  saveState();
  showToast('Route preference saved');
  renderView('routes');
}

function clearRouteMaps() {
  routeMapInstances.forEach(map => map.remove());
  routeMapInstances = [];
}

function initRouteMaps() {
  if (typeof L === 'undefined') return;
  clearRouteMaps();
  ROUTE_OPTIONS.forEach((route, routeIndex) => {
    const element = document.getElementById(`route-map-${route.id}`);
    if (!element) return;
    const map = L.map(element, { zoomControl:false, attributionControl:false, scrollWheelZoom:false, dragging:true, tap:false });
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom:18 }).addTo(map);
    const coords = route.points.map(point => [point[1], point[2]]);
    const routeColours = ['#b6533e','#285b4c','#8d6b35'];
    L.polyline(coords, { color:routeColours[routeIndex], weight:4, opacity:.9, dashArray:'8 6' }).addTo(map);
    route.points.slice(0,-1).forEach((point,index) => {
      const marker = L.circleMarker([point[1],point[2]], { radius:index===0?8:6, weight:2, color:'#fffdf8', fillColor:index===0?'#173d34':routeColours[routeIndex], fillOpacity:1 }).addTo(map);
      marker.bindTooltip(`${index===0?'Start · ':''}${point[0]}`, { direction:'top' });
    });
    map.fitBounds(coords, { padding:[18,18] });
    routeMapInstances.push(map);
  });
}

const baseRenderView = renderView;
renderView = function enhancedRenderView(view) {
  if (view !== 'routes') {
    clearRouteMaps();
    return baseRenderView(view);
  }
  currentView = 'routes';
  document.querySelectorAll('[data-view]').forEach(button => button.classList.toggle('active', button.dataset.view === view));
  const root = byId('viewRoot');
  root.innerHTML = renderRoutesPage();
  root.focus({preventScroll:true});
  window.scrollTo({top:0, behavior:'smooth'});
  setTimeout(initRouteMaps, 60);
};

document.addEventListener('click', event => {
  const button = event.target.closest('[data-route-vote]');
  if (button) setRouteVote(button.dataset.routeVote, button.dataset.choice);
});
