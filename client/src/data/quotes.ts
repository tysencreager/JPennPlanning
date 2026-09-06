/**
 * "The World According to Jessica" — fragments of philosophy, things she says,
 * quotes she loves. Editorial, clean, a little chaotic.
 *
 * TODO: Jessica is sending her own list of quotes and "me" things — swap these
 * in when they arrive. Everything below is pulled from her vision doc and our
 * conversation so nothing here is invented.
 */
export interface Fragment {
  text: string;
  kind: 'jessica' | 'loved' | 'aside';
  attribution?: string;
}

export const fragments: Fragment[] = [
  {
    text: 'Tell me who you are without telling me who you belong to or what your titles are.',
    kind: 'jessica',
  },
  { text: 'We are all constellations.', kind: 'jessica' },
  {
    text: "I don't believe people are broken and need to be fixed. I believe people already contain all of the stars they need.",
    kind: 'jessica',
  },
  { text: 'Connection changes everything.', kind: 'jessica' },
  {
    text: "We're not meant to navigate this life alone.",
    kind: 'jessica',
  },
  {
    text: 'Grandmother Willow is my spirit animal.',
    kind: 'aside',
  },
  {
    text: 'Coffee over tea. Always. (Ask me about the tea parties.)',
    kind: 'aside',
  },
  {
    text: 'Individual stars are beautiful. Connect them, and suddenly there’s a story.',
    kind: 'jessica',
  },
  {
    text: "My role isn't to become your North Star. It's to help you remember how brightly it shines.",
    kind: 'jessica',
  },
  {
    text: 'I can speak on suicide awareness in the morning and paint wine glasses over tacos that night. Both are connection.',
    kind: 'aside',
  },
  {
    text: 'Your constellation isn’t broken. One star is simply asking to be seen.',
    kind: 'jessica',
  },
  {
    text: 'Celestial, but grounded. Earth + sky.',
    kind: 'aside',
  },
];
