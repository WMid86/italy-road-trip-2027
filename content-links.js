/* Real photographs and external planning links.
   Photographs are served from Wikimedia Commons and link back to their file pages. */

const commonsImage = fileName => `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(fileName)}?width=1400`;
const commonsPage = fileName => `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(fileName).replace(/%20/g, '_')}`;
const googleMap = query => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
const googleRoute = stops => `https://www.google.com/maps/dir/${stops.map(stop => encodeURIComponent(stop)).join('/')}`;
const bookingSearch = place => `https://www.booking.com/searchresults.html?ss=${encodeURIComponent(place)}`;

function enrich(id, data) {
  const item = findItem(id);
  if (item) Object.assign(item, data);
}

// Route concepts
enrich('route-history-coast', {
  image: commonsImage('Costa dei trabocchi.jpg'),
  imagePage: commonsPage('Costa dei trabocchi.jpg'),
  imageAlt: 'The Costa dei Trabocchi on the Adriatic coast',
  mapUrl: googleRoute(['Rome, Italy', 'Assisi, Italy', 'Ascoli Piceno, Italy', 'San Vito Chietino, Italy', 'Sepino, Italy', 'Vieste, Italy', 'Alberobello, Italy', 'Matera, Italy', 'Rome, Italy'])
});
enrich('route-food-scenery', {
  image: commonsImage('Panorama Locorotondo.jpg'),
  imagePage: commonsPage('Panorama Locorotondo.jpg'),
  imageAlt: 'Locorotondo and the Valle d’Itria countryside',
  mapUrl: googleRoute(['Rome, Italy', 'Assisi, Italy', 'Ascoli Piceno, Italy', 'Rocca San Giovanni, Italy', 'Vieste, Italy', 'Locorotondo, Italy', 'Matera, Italy', 'Rome, Italy'])
});
enrich('route-roman-focus', {
  image: commonsImage('Saepinum - Altilia (24611852921).jpg'),
  imagePage: commonsPage('Saepinum - Altilia (24611852921).jpg'),
  imageAlt: 'The Roman archaeological site of Saepinum',
  mapUrl: googleRoute(['Rome, Italy', 'Assisi, Italy', 'Urbisaglia, Italy', 'Sepino, Italy', 'Canne della Battaglia, Italy', 'Egnazia, Italy', 'Metaponto, Italy', 'Matera, Italy', 'Rome, Italy'])
});

// Places and attractions
enrich('place-assisi-roman', {
  image: commonsImage('Assisi panorama.jpg'),
  imagePage: commonsPage('Assisi panorama.jpg'),
  imageAlt: 'Panoramic view of Assisi',
  officialUrl: 'https://www.visit-assisi.it/en/monuments/roman-buildings/roman-forum-and-archeological-collection/',
  mapUrl: googleMap('Roman Forum and Archaeological Museum Assisi Italy')
});
enrich('place-urbs-salvia', {
  image: commonsImage('Urbs Salvia - Anfiteatro romano.jpg'),
  imagePage: commonsPage('Urbs Salvia - Anfiteatro romano.jpg'),
  imageAlt: 'Roman amphitheatre at Urbs Salvia',
  officialUrl: 'https://www.italia.it/en/marche/urbisaglia',
  mapUrl: googleMap('Parco Archeologico di Urbs Salvia Urbisaglia Italy')
});
enrich('place-ascoli', {
  image: commonsImage('Piazza del Popolo (Ascoli Piceno).jpg'),
  imagePage: commonsPage('Piazza del Popolo (Ascoli Piceno).jpg'),
  imageAlt: 'Piazza del Popolo in Ascoli Piceno',
  officialUrl: 'https://eventi.turismo.marche.it/en-us/what-to-see/cities/Ascoli-Piceno%2C-the-city-of-Travertine/5713',
  mapUrl: googleMap('Piazza del Popolo Ascoli Piceno Italy')
});
enrich('place-trabocchi', {
  image: commonsImage('Costa dei trabocchi.jpg'),
  imagePage: commonsPage('Costa dei trabocchi.jpg'),
  imageAlt: 'A wooden trabocco above the Adriatic Sea',
  officialUrl: 'https://www.abruzzoturismo.it/it/costa-dei-trabocchi',
  mapUrl: googleMap('Costa dei Trabocchi Abruzzo Italy')
});
enrich('place-saepinum', {
  image: commonsImage('Saepinum - Altilia (24611852921).jpg'),
  imagePage: commonsPage('Saepinum - Altilia (24611852921).jpg'),
  imageAlt: 'Ruins of the Roman city of Saepinum',
  officialUrl: 'https://www.parcosepino.it/',
  mapUrl: googleMap('Area Archeologica di Saepinum Altilia Italy')
});
enrich('place-gargano', {
  image: commonsImage('Vieste - Panorama.jpeg'),
  imagePage: commonsPage('Vieste - Panorama.jpeg'),
  imageAlt: 'Panoramic view of Vieste on the Gargano coast',
  officialUrl: 'https://www.viesteturismo.com/',
  mapUrl: googleMap('Vieste Gargano Italy')
});
enrich('place-monte-santangelo', {
  image: commonsImage("Monte Sant'Angelo - Santuario di San Michele Arcangelo.jpg"),
  imagePage: commonsPage("Monte Sant'Angelo - Santuario di San Michele Arcangelo.jpg"),
  imageAlt: 'The Sanctuary of Saint Michael at Monte Sant’Angelo',
  officialUrl: 'https://montesantangelo.it/en/topics/turismo',
  mapUrl: googleMap("Santuario di San Michele Arcangelo Monte Sant'Angelo Italy")
});
enrich('place-canne', {
  image: commonsImage('Canne della Battaglia.jpg'),
  imagePage: commonsPage('Canne della Battaglia.jpg'),
  imageAlt: 'The archaeological area of Canne della Battaglia',
  officialUrl: 'https://museipuglia.cultura.gov.it/musei/museo-e-parco-archeologico-canne-della-battaglia/',
  mapUrl: googleMap('Parco Archeologico di Canne della Battaglia Italy')
});
enrich('place-castel-del-monte', {
  image: commonsImage('Castel Del Monte.jpg'),
  imagePage: commonsPage('Castel Del Monte.jpg'),
  imageAlt: 'Castel del Monte in Puglia',
  officialUrl: 'https://cultura.gov.it/luogo/castel-del-monte?page=1',
  mapUrl: googleMap('Castel del Monte Andria Italy')
});
enrich('place-trani', {
  image: commonsImage('Trani - Cattedrale di Trani -.jpg'),
  imagePage: commonsPage('Trani - Cattedrale di Trani -.jpg'),
  imageAlt: 'Trani Cathedral beside the Adriatic Sea',
  officialUrl: 'https://www.italia.it/en/puglia/trani-cathedral',
  mapUrl: googleMap('Cattedrale di Trani Italy')
});
enrich('place-egnazia', {
  image: commonsImage('Archaeological Site at Egnazia.jpg'),
  imagePage: commonsPage('Archaeological Site at Egnazia.jpg'),
  imageAlt: 'The archaeological site of Egnazia',
  officialUrl: 'https://museipuglia.cultura.gov.it/musei-puglia/museo-archeologico-nazionale-e-parco-archeologico-di-egnazia/',
  mapUrl: googleMap('Museo e Parco Archeologico di Egnazia Fasano Italy')
});
enrich('place-valle-ditria', {
  image: commonsImage('Panorama Locorotondo.jpg'),
  imagePage: commonsPage('Panorama Locorotondo.jpg'),
  imageAlt: 'Locorotondo overlooking the Valle d’Itria',
  officialUrl: 'https://visit.puglia.it/en/valle-d-itria',
  mapUrl: googleMap("Valle d'Itria Puglia Italy")
});
enrich('place-ostuni', {
  image: commonsImage('Panorama Ostuni.jpg'),
  imagePage: commonsPage('Panorama Ostuni.jpg'),
  imageAlt: 'Panoramic view of Ostuni, the White City',
  officialUrl: 'https://www.comune.ostuni.br.it/argomento/turismo/',
  mapUrl: googleMap('Ostuni historic centre Italy')
});
enrich('place-matera', {
  image: commonsImage('Panorama of the two Sassi of Matera.jpg'),
  imagePage: commonsPage('Panorama of the two Sassi of Matera.jpg'),
  imageAlt: 'Panoramic view over the Sassi of Matera',
  officialUrl: 'https://www.materaturismo.it/en/',
  mapUrl: googleMap('Sassi di Matera Italy')
});

// Accommodation areas
enrich('stay-assisi', {
  image: commonsImage('Panorama from Assisi 001.jpg'),
  imagePage: commonsPage('Panorama from Assisi 001.jpg'),
  imageAlt: 'Umbrian countryside viewed from Assisi',
  bookingUrl: 'https://www.agriturismi.it/en/assisi?piscina=on',
  mapUrl: googleMap('agriturismo with pool near Assisi Italy')
});
enrich('stay-marche', {
  image: commonsImage('Ascoli Piceno - Piazza del Popolo - panoramio.jpg'),
  imagePage: commonsPage('Ascoli Piceno - Piazza del Popolo - panoramio.jpg'),
  imageAlt: 'Ascoli Piceno and the southern Marche',
  bookingUrl: 'https://en.agriturismo.it/farmhouse/marches/ascoli_piceno',
  mapUrl: googleMap('agriturismo with pool near Ascoli Piceno Italy')
});
enrich('stay-trabocchi', {
  image: commonsImage('Costa dei trabocchi.jpg'),
  imagePage: commonsPage('Costa dei trabocchi.jpg'),
  imageAlt: 'The Costa dei Trabocchi',
  bookingUrl: bookingSearch('Rocca San Giovanni, Abruzzo, Italy'),
  mapUrl: googleMap('agriturismo pool Rocca San Giovanni Fossacesia Italy')
});
enrich('stay-gargano', {
  image: commonsImage('Vieste - Panorama.jpeg'),
  imagePage: commonsPage('Vieste - Panorama.jpeg'),
  imageAlt: 'Vieste and the Gargano coast',
  bookingUrl: 'https://www.agriturismi.it/en/vieste?piscina=on',
  mapUrl: googleMap('agriturismo with pool Vieste Mattinata Italy')
});
enrich('stay-trani', {
  image: commonsImage('Trani - Cattedrale di Trani -.jpg'),
  imagePage: commonsPage('Trani - Cattedrale di Trani -.jpg'),
  imageAlt: 'The Trani waterfront',
  bookingUrl: bookingSearch('Trani, Puglia, Italy'),
  mapUrl: googleMap('masseria with pool near Trani Andria Italy')
});
enrich('stay-valle', {
  image: commonsImage('Trulli panorama.jpg'),
  imagePage: commonsPage('Trulli panorama.jpg'),
  imageAlt: 'Trulli in the countryside around Alberobello',
  bookingUrl: bookingSearch('Cisternino, Puglia, Italy'),
  mapUrl: googleMap("masseria trullo with pool Valle d'Itria Italy")
});
enrich('stay-matera', {
  image: commonsImage('Matera panorama.jpg'),
  imagePage: commonsPage('Matera panorama.jpg'),
  imageAlt: 'Matera and its historic cave districts',
  bookingUrl: bookingSearch('Matera, Basilicata, Italy'),
  mapUrl: googleMap('country hotel with pool near Matera Italy')
});

// Food experiences
enrich('food-umbrian', {
  image: commonsImage('Stringozzi.jpg'),
  imagePage: commonsPage('Stringozzi.jpg'),
  imageAlt: 'Traditional stringozzi or strangozzi pasta',
  officialUrl: 'https://www.italia.it/en/umbria/things-to-do/products-typical-dishes-umbri',
  mapUrl: googleMap('strangozzi restaurant Assisi Italy')
});
enrich('food-olive-ascolane', {
  image: commonsImage("Olive all'ascolana.jpg"),
  imagePage: commonsPage("Olive all'ascolana.jpg"),
  imageAlt: 'Fried olive all’ascolana',
  officialUrl: 'https://www.italia.it/en/marche/things-to-do/marche-food-products-and-dishes-the-guide',
  mapUrl: googleMap("olive all'ascolana Ascoli Piceno restaurant")
});
enrich('food-trabocco', {
  image: commonsImage('Costa dei trabocchi.jpg'),
  imagePage: commonsPage('Costa dei trabocchi.jpg'),
  imageAlt: 'A traditional trabocco restaurant setting',
  officialUrl: 'https://www.abruzzoturismo.it/it/costa-dei-trabocchi',
  mapUrl: googleMap('trabocco restaurant San Vito Chietino Italy')
});
enrich('food-arrosticini', {
  image: commonsImage('Arrosticini.jpg'),
  imagePage: commonsPage('Arrosticini.jpg'),
  imageAlt: 'Abruzzese arrosticini cooking over charcoal',
  officialUrl: 'https://www.italia.it/en/abruzzo/things-to-do/typical-food-and-dishes-in-abruzzo-italy',
  mapUrl: googleMap('arrosticini restaurant Abruzzo Italy')
});
enrich('food-burrata', {
  image: commonsImage('Burrata cheese.jpg'),
  imagePage: commonsPage('Burrata cheese.jpg'),
  imageAlt: 'Fresh burrata cheese',
  officialUrl: 'https://www.italia.it/en/puglia/things-to-do/typical-food-and-dishes-in-puglia-italy',
  mapUrl: googleMap('burrata cheese dairy Andria Puglia Italy')
});
enrich('food-bombette', {
  image: commonsImage('Bombette deliziose.jpg'),
  imagePage: commonsPage('Bombette deliziose.jpg'),
  imageAlt: 'Puglian bombette meat rolls',
  officialUrl: 'https://www.lacucinaitaliana.com/italian-food/italian-dishes/homemade-bombette-an-authentic-recipe-from-puglia',
  mapUrl: googleMap('fornello pronto bombette Cisternino Italy')
});
enrich('food-orecchiette', {
  image: commonsImage('Orecchiette al Pomodoro.jpg'),
  imagePage: commonsPage('Orecchiette al Pomodoro.jpg'),
  imageAlt: 'Orecchiette pasta with tomato',
  officialUrl: 'https://www.italia.it/en/puglia/things-to-do/typical-food-and-dishes-in-puglia-italy',
  mapUrl: googleMap('orecchiette restaurant Puglia Italy')
});
enrich('food-focaccia', {
  image: commonsImage('Focaccia Barese.jpg'),
  imagePage: commonsPage('Focaccia Barese.jpg'),
  imageAlt: 'Traditional focaccia barese',
  officialUrl: 'https://www.italia.it/en/puglia/things-to-do/typical-food-and-dishes-in-puglia-italy',
  mapUrl: googleMap('best focaccia barese Bari Italy')
});
enrich('food-matera-bread', {
  image: commonsImage('Pane di Matera.jpg'),
  imagePage: commonsPage('Pane di Matera.jpg'),
  imageAlt: 'Traditional Pane di Matera bread',
  officialUrl: 'https://www.materaturismo.it/en/',
  mapUrl: googleMap('Pane di Matera bakery Matera Italy')
});

function resourceLinks(item, includePhoto = false) {
  const links = [];
  if (item.officialUrl) links.push(`<a class="resource-link" href="${escapeHtml(item.officialUrl)}" target="_blank" rel="noopener noreferrer">Official information ↗</a>`);
  if (item.mapUrl) links.push(`<a class="resource-link" href="${escapeHtml(item.mapUrl)}" target="_blank" rel="noopener noreferrer">Open in Maps ↗</a>`);
  if (item.bookingUrl) links.push(`<a class="resource-link booking-link" href="${escapeHtml(item.bookingUrl)}" target="_blank" rel="noopener noreferrer">Search accommodation ↗</a>`);
  if (includePhoto && item.imagePage) links.push(`<a class="resource-link photo-link" href="${escapeHtml(item.imagePage)}" target="_blank" rel="noopener noreferrer">Photo source and licence ↗</a>`);
  return links.length ? `<div class="resource-links">${links.join('')}</div>` : '';
}

cardTemplate = function(item) {
  const avg = averageVote(item.id);
  const count = Object.keys(getVotes(item.id)).length;
  const routeStops = item.stops ? `<div class="route-stops">${item.stops.map(stop => `<span>${escapeHtml(stop)}</span>`).join('')}</div>` : '';
  const price = item.eur ? formatPrice(item.eur) : '';
  const photo = item.image
    ? `<a class="card-photo-link" href="${escapeHtml(item.imagePage || item.image)}" target="_blank" rel="noopener noreferrer" aria-label="View photo source for ${escapeHtml(item.title)}"><img class="actual-photo" src="${escapeHtml(item.image)}" alt="${escapeHtml(item.imageAlt || item.title)}" loading="lazy" referrerpolicy="no-referrer" onerror="this.remove()"></a>`
    : `<span class="big-icon" aria-hidden="true">${item.icon || '📍'}</span>`;
  return `<article class="option-card">
    <div class="card-image ${item.image ? 'has-photo' : ''}">
      ${photo}
      <span class="tag">${escapeHtml(item.category)}</span>
    </div>
    <div class="card-body">
      <h3>${escapeHtml(item.title)}</h3>
      <p>${escapeHtml(item.description)}</p>
      ${routeStops}${price}
      <div class="card-meta">${(item.meta || []).map(value => `<span>${escapeHtml(value)}</span>`).join('')}</div>
      ${resourceLinks(item)}
      <div class="card-actions">
        <button class="text-button" data-open-item="${item.id}">Vote and discuss</button>
        <div class="vote-summary"><strong>${avg ? avg.toFixed(1) : '–'}</strong><span>${count}/3 votes</span></div>
      </div>
    </div>
  </article>`;
};

openItem = function(id) {
  const item = findItem(id);
  if (!item) return;
  const votes = getVotes(item.id);
  const comments = state.comments[item.id] || [];
  const photo = item.image ? `<figure class="dialog-photo"><img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.imageAlt || item.title)}" referrerpolicy="no-referrer"><figcaption>Real destination photograph. Source and licence are linked below.</figcaption></figure>` : '';
  document.getElementById('dialogContent').innerHTML = `<div class="dialog-inner">
    ${photo}
    <p class="eyebrow">${escapeHtml(item.category)}</p>
    <h2>${escapeHtml(item.title)}</h2>
    <p>${escapeHtml(item.details || item.description).replace(/\n/g, '<br>')}</p>
    ${item.eur ? formatPrice(item.eur) : ''}
    ${resourceLinks(item, true)}
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
};
