/**
 * The Affinity Astron Assessment — "What's missing from your constellation?"
 *
 * Four stars: SELF, PEOPLE, COMMUNITY, PURPOSE. Four questions each, scored
 * 1–4. Lowest total = the Dimmest Star (primary result). Highest = Brightest.
 * Copy is Jessica's, verbatim from her vision document.
 */
export type StarId = 'self' | 'people' | 'community' | 'purpose';

export interface Option {
  text: string;
  points: 1 | 2 | 3 | 4;
}

export interface Question {
  id: number;
  star: StarId;
  text: string;
  options: Option[];
}

export interface StarMeta {
  id: StarId;
  name: string;
  subtitle: string;
  glyph: string;
}

export const stars: StarMeta[] = [
  { id: 'self', name: 'Self', subtitle: 'Connection to yourself', glyph: '✦' },
  { id: 'people', name: 'People', subtitle: 'Connection within close relationships', glyph: '✦' },
  { id: 'community', name: 'Community', subtitle: 'Connection to belonging and finding your people', glyph: '✦' },
  { id: 'purpose', name: 'Purpose', subtitle: 'Connection to passion, creativity, dreams, and meaning', glyph: '✦' },
];

const opts = (a: string, b: string, c: string, d: string): Option[] => [
  { text: a, points: 4 },
  { text: b, points: 3 },
  { text: c, points: 2 },
  { text: d, points: 1 },
];

export const questions: Question[] = [
  // ✦ SELF
  {
    id: 1,
    star: 'self',
    text: 'When you have time completely to yourself, how comfortable are you being intentional about what YOU want?',
    options: opts(
      'Very comfortable – I usually know exactly what I need.',
      "Pretty comfortable – I'm getting better at checking in with myself.",
      'Not very comfortable – I tend to default to what needs to be done.',
      "Honestly, I often don't know what I want anymore.",
    ),
  },
  {
    id: 2,
    star: 'self',
    text: 'How often do you make decisions based on what feels right for YOU, even when someone else might not understand?',
    options: opts(
      'Almost always.',
      'Often, although I sometimes second-guess myself.',
      "Occasionally – other people's expectations influence me a lot.",
      'Rarely – I usually prioritize what others need or expect.',
    ),
  },
  {
    id: 3,
    star: 'self',
    text: 'When you make a mistake, how does your inner voice usually respond?',
    options: opts(
      'With curiosity and compassion.',
      "I'm usually able to give myself some grace.",
      'I tend to be pretty hard on myself.',
      'I can be my own harshest critic.',
    ),
  },
  {
    id: 4,
    star: 'self',
    text: 'How well do you know the person you are outside of your roles (parent, partner, employee, friend, etc.)?',
    options: opts(
      'Very well – I have a strong sense of who I am.',
      "Fairly well – although I'm still figuring some things out.",
      'Not very well – my roles often feel more defined than I do.',
      "Honestly, I'm not sure who I am without those roles.",
    ),
  },
  // ✦ PEOPLE
  {
    id: 5,
    star: 'people',
    text: "When you're struggling, how comfortable are you letting someone you trust know what's really going on?",
    options: opts(
      'Very comfortable – I let people see the real stuff.',
      'Usually comfortable, although I sometimes hold back.',
      "I tend to minimize or hide what I'm feeling.",
      'I almost always handle things on my own.',
    ),
  },
  {
    id: 6,
    star: 'people',
    text: 'How comfortable are you asking the people you love for what you actually need?',
    options: opts(
      'Very comfortable – I can communicate my needs clearly.',
      "I can do it, although it's sometimes difficult.",
      'I struggle to ask for what I need.',
      'I usually expect people to figure it out without me asking.',
    ),
  },
  {
    id: 7,
    star: 'people',
    text: 'How well do the people closest to you know the REAL you?',
    options: opts(
      'They know me deeply – including the messy parts.',
      'They know me pretty well, although there are things I keep private.',
      'They mostly know the version of me I show people.',
      "I'm not sure anyone really knows me.",
    ),
  },
  {
    id: 8,
    star: 'people',
    text: 'When something feels wrong in an important relationship, how likely are you to address it?',
    options: opts(
      'I talk about it openly and honestly.',
      "I'll address it, although I may need some time first.",
      'I tend to avoid difficult conversations.',
      'I usually withdraw, shut down, or pretend everything is fine.',
    ),
  },
  // ✦ COMMUNITY
  {
    id: 9,
    star: 'community',
    text: 'How often do you experience the feeling of “These are my people”?',
    options: opts(
      'Often – I have a strong sense of belonging.',
      'Sometimes – I have some people I really connect with.',
      "Rarely – I know people, but don't often feel truly connected.",
      "Almost never – I frequently feel like I'm on the outside looking in.",
    ),
  },
  {
    id: 10,
    star: 'community',
    text: 'If you wanted to make a new friend right now, how confident would you feel doing it?',
    options: opts(
      "Very confident – I'd know where to start.",
      "Somewhat confident – I'd figure it out.",
      "I'd have a hard time knowing how to begin.",
      "I'd probably wait for someone else to make the first move.",
    ),
  },
  {
    id: 11,
    star: 'community',
    text: 'How often do you intentionally create opportunities to spend meaningful time with other people?',
    options: opts(
      'Regularly – connection is something I make space for.',
      "Occasionally – when life isn't too busy.",
      'Rarely – I usually have too much going on.',
      "Almost never – I can't remember the last time I intentionally made space for it.",
    ),
  },
  {
    id: 12,
    star: 'community',
    text: 'Think about your current social circle. How supported do you feel?',
    options: opts(
      'I have people I can call when I need them.',
      'I have a few people, although I could use more connection.',
      "I know people, but don't feel like I have much support.",
      "I often feel like I'm navigating life alone.",
    ),
  },
  // ✦ PURPOSE
  {
    id: 13,
    star: 'purpose',
    text: 'How often do you do something simply because it makes YOU happy?',
    options: opts(
      'Regularly – I make room for things that light me up.',
      'Occasionally – I try to make time for myself.',
      'Rarely – most of my time goes toward responsibilities.',
      "I honestly can't remember the last time I did something just for me.",
    ),
  },
  {
    id: 14,
    star: 'purpose',
    text: 'How connected do you currently feel to your passions, hobbies, or creativity?',
    options: opts(
      "Very connected – they're an active part of my life.",
      "Somewhat connected – I have interests, but don't always make time for them.",
      "Disconnected – I've let many of those things fall away.",
      "I'm not even sure what my passions are anymore.",
    ),
  },
  {
    id: 15,
    star: 'purpose',
    text: "If time, money, and other people's opinions weren't factors, how clearly could you picture the life you'd want?",
    options: opts(
      "Very clearly – I know exactly what I'd pursue.",
      'Fairly clearly – I have some ideas.',
      "Not very clearly – I know something needs to change, but I'm unsure what.",
      'I genuinely have no idea.',
    ),
  },
  {
    id: 16,
    star: 'purpose',
    text: 'Which statement best describes how your life feels right now?',
    options: opts(
      "I'm actively building a life that feels meaningful to me.",
      "I'm moving in the right direction, even if I haven't figured it all out.",
      "I'm doing what I'm supposed to do, but something feels missing.",
      "I'm so focused on getting through life that I haven't had much space to think about what I actually want.",
    ),
  },
];

export interface StarResult {
  id: StarId;
  title: string; // "Your Dimmest Star: Self"
  headline: string; // "Come home to yourself."
  body: string[];
  experiment: {
    name: string;
    steps: string[]; // paragraphs
    closing: string;
  };
}

export const results: Record<StarId, StarResult> = {
  self: {
    id: 'self',
    title: 'Your Dimmest Star: Self',
    headline: 'Come home to yourself.',
    body: [
      "You may be so accustomed to being what everyone else needs that you've lost touch with what YOU need.",
      "Your next step isn't becoming a better version of yourself, it's getting reacquainted with the person who's already there.",
    ],
    experiment: {
      name: 'The 20-Minute Yes',
      steps: [
        'For one day, give yourself 20 minutes where nobody else gets a vote.',
        'Ask yourself: "If I didn\'t have to be useful, productive, available, or responsible right now… what would I want?"',
        'Then do that thing.',
        'It can be ridiculously small: Sit outside. Take a bath. Drive somewhere with music on. Read three pages. Make something. Lie on the floor.',
      ],
      closing: "The experiment isn't what you choose. It's simply practicing listening to yourself.",
    },
  },
  people: {
    id: 'people',
    title: 'Your Dimmest Star: People',
    headline: 'Let yourself be known.',
    body: [
      'You may not need more relationships. You may need deeper ones.',
      'Connection requires more than being around people; it requires allowing yourself to be seen.',
    ],
    experiment: {
      name: 'The Unedited Truth',
      steps: [
        'Choose one person you trust.',
        'Tell them something you would normally keep to yourself. Not a giant trauma dump. Just something real.',
        'Try: "Can I tell you something I\'ve been thinking about lately that I haven\'t really said out loud?"',
        "Then let them respond. Don't minimize it. Don't immediately make a joke. Don't turn the conversation back toward them.",
      ],
      closing: "Just let yourself be known. That's the experiment.",
    },
  },
  community: {
    id: 'community',
    title: 'Your Dimmest Star: Community',
    headline: 'Find your people.',
    body: [
      'You can be surrounded by people and still feel alone.',
      'You may not need a bigger social circle. You may need spaces where you can show up as your whole self and feel like you belong.',
    ],
    experiment: {
      name: 'The Invitation',
      steps: [
        'Instead of waiting for someone else to make plans, make one. Invite someone to do something specific.',
        'Not: "We should hang out sometime!"',
        'Instead: "I\'m going for a walk Saturday morning. Want to come?" Or: "I\'m trying a new coffee shop Thursday. Come with me." Or: "I want to have a girls\' night. Are you free Friday?"',
      ],
      closing: 'Connection needs an opportunity. Create one.',
    },
  },
  purpose: {
    id: 'purpose',
    title: 'Your Dimmest Star: Purpose',
    headline: 'Remember what lights you up.',
    body: [
      "Your life may be full. That doesn't necessarily mean YOU are full.",
      "There may be a part of you that's been waiting for permission to be curious, creative, passionate, or simply excited again.",
    ],
    experiment: {
      name: 'The 20-Minute Permission Slip',
      steps: [
        'Set a timer for 20 minutes.',
        "Do something that makes you curious – not something productive, not something that benefits your family, not something you can monetize.",
        'Something that makes you think: "Ooh. I want to try that." Paint. Write. Garden. Dance. Research something weird. Take photographs. Start a ridiculous project.',
        'When the timer ends, ask: "Did I feel more like myself while I was doing that?"',
      ],
      closing: 'If yes? Follow the spark.',
    },
  },
};

export interface Scores {
  self: number;
  people: number;
  community: number;
  purpose: number;
}

export const MIN_SCORE = 4;
export const MAX_SCORE = 16;

export function scoreAnswers(answers: Record<number, number>): Scores {
  const s: Scores = { self: 0, people: 0, community: 0, purpose: 0 };
  for (const q of questions) {
    const idx = answers[q.id];
    if (idx === undefined) continue;
    s[q.star] += q.options[idx].points;
  }
  return s;
}

export function dimmestStar(s: Scores): StarId {
  // Version 1: lowest score wins; ties resolve in constellation order.
  return (Object.keys(s) as StarId[]).reduce((min, k) => (s[k] < s[min] ? k : min), 'self');
}

export function brightestStar(s: Scores): StarId {
  return (Object.keys(s) as StarId[]).reduce((max, k) => (s[k] > s[max] ? k : max), 'self');
}

/** Map raw scores to a 0..1 brightness for the constellation visual. */
export function brightnessMap(s: Scores): Record<StarId, number> {
  const out = {} as Record<StarId, number>;
  const dim = dimmestStar(s);
  for (const k of Object.keys(s) as StarId[]) {
    const t = (s[k] - MIN_SCORE) / (MAX_SCORE - MIN_SCORE);
    // keep everything visibly lit except the dimmest star, which is clearly dimmer
    out[k] = k === dim ? 0.22 : 0.6 + 0.4 * t;
  }
  return out;
}
