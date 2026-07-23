/* Integrate the Route Lab into the existing Trip Board and Decision Centre. */

const originalTripBoardRenderer = renderTripBoard;
renderTripBoard = function integratedTripBoard() {
  const votesCast = ROUTE_OPTIONS.reduce((sum, route) => sum + Object.keys(routeVotesFor(route.id)).length, 0);
  const leader = votesCast ? leadingRoute() : null;
  const banner = `<section class="route-draft-banner">
    <div><p class="kicker">Working itinerary</p><h2>This is the East-first draft, not the final route.</h2><p>${leader ? `The current route-vote leader is <b>${escapeHtml(leader.title)}</b>.` : 'No route preferences have been recorded yet.'} Compare all three routes before treating these bases as fixed.</p></div>
    <button class="primary-btn" data-view="routes">Compare the three routes</button>
  </section>`;
  return originalTripBoardRenderer().replace('<div class="page">', `<div class="page">${banner}`);
};

const originalDecisionsRenderer = renderDecisionsPage;
renderDecisionsPage = function integratedDecisionsPage() {
  const votesCast = ROUTE_OPTIONS.reduce((sum, route) => sum + Object.keys(routeVotesFor(route.id)).length, 0);
  const leader = votesCast ? leadingRoute() : null;
  const routePanel = `<section class="route-decision-panel">
    <div class="route-decision-heading"><div><p class="kicker">Decision zero</p><h2>Which overall route should we take?</h2><p>${leader ? `<b>${escapeHtml(leader.title)}</b> is currently leading with a score of ${routeScore(leader)}.` : 'The group has not started ranking the three routes.'}</p></div><button class="primary-btn" data-view="routes">Open route comparison</button></div>
    <div class="route-decision-grid">${ROUTE_OPTIONS.map(route => `<article class="route-decision-card"><span>${escapeHtml(route.direction)}</span><h3>${escapeHtml(route.title)}</h3><div>${routeGroupVotes(route.id)}</div><strong>${routeScore(route)} points</strong></article>`).join('')}</div>
  </section>`;
  return originalDecisionsRenderer().replace('<div class="page">', `<div class="page">${routePanel}`);
};
