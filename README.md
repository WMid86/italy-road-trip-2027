# Italy Road Trip 2027

A private-by-PIN group trip-planning app for a July 2027 road trip starting and ending in Rome.

## Travellers

- W — administrator
- N — voter
- L — voter

All three travellers have an equal vote. W can also manage or remove suggestions.

## Provisional route

Rome → Assisi → Urbs Salvia → Ascoli Piceno → Costa dei Trabocchi → Saepinum → Gargano → Trani / Andria → Castel del Monte → Egnazia → Valle d’Itria → Matera → Rome

## Current prototype

The first version is a static GitHub Pages app with:

- four-digit PIN entrance
- W, N and L traveller profiles
- route alternatives
- attraction, accommodation and food cards
- five-level voting
- comments and traveller suggestions
- interactive map
- EUR, GBP and RMB price display
- local browser storage for the prototype

## Important security and storage note

The current prototype uses browser local storage, so votes made on different devices are not yet shared. The next backend step is to connect Supabase so votes, comments and suggestions are shared between W, N and L.

Because this is a public static repository, a client-side PIN is a casual privacy screen rather than strong security. The finished Supabase version will keep trip data behind a server-validated PIN.

## Publishing

Enable GitHub Pages in the repository settings and publish from the `main` branch root. The expected address will be:

`https://wmid86.github.io/italy-road-trip-2027/`
