/** Flip to true when there's real progress to show (re-enables the section + nav link). */
export const SHOW_PROGRESS = false;

export const THEATER = {
  name: 'The Glen Theatre',
  town: 'Glen Rock, Pennsylvania',
  address: '37 Manchester Street',
  tagline: 'The lights are coming back on.'
}

export const HISTORY = [
  {
    year: '1913',
    title: 'The Splendid Little Opera House',
    text: 'The Glen Rock Musical Association, founded in 1872, bought the land in July 1912. Architect Joseph Dise designed the Glen Rock Auditorium, a 500-seat opera house, theater and band hall finished in late 1913. It became home base for Roland F. Seitz, the “Parade March King” whose marches rivaled Sousa’s.'
  },
  {
    year: '1913',
    title: 'Air-Conditioned by a Creek',
    text: 'The building sits directly over a natural stream that feeds Codorus Creek. Dise put it to work: a giant hamster-wheel style fan in the basement pushed naturally chilled air up through floor vents, long before modern air conditioning.'
  },
  {
    year: '1932',
    title: 'The Movies Move In',
    text: 'Chalmers Sechrist leased the hall to show films. By 1935 he and his wife Lottie owned it and renamed it the Glen Theatre. Kids paid about 17 cents and adults 35. Silent films with live piano, Movietone newsreels, cartoons and Westerns shared the stage with high school plays, operettas like HMS Pinafore, and graduations.'
  },
  {
    year: '1967',
    title: 'Passed Between Families',
    text: 'The Sechrists sold to the Bortner family in 1967, who sold to the Strausbaugh family in 1975. The Glen kept its weekend shows and its place as the last operating community movie theater in York County outside of York City.'
  },
  {
    year: '2017',
    title: 'The Last Reel',
    text: 'The Glen could not afford the jump from 35mm film to digital projection. The final movie shown, fittingly, was the animated film Sing, in January 2017.'
  },
  {
    year: '2023',
    title: 'A Brief Revival',
    text: 'Local resident Abigail Lipka bought the building in August 2023 to make it a community center, and organized volunteer clean-up days. The plan did not move forward, and the property returned to the market.'
  },
  {
    year: 'Now',
    title: 'A Second Act',
    text: 'Bryan Parnell wants to buy the Glen and bring it back, with a community invited to help raise the curtain again.'
  }
]

export const FACTS = [
  { value: '1913', label: 'Year built' },
  { value: '500', label: 'Original seats' },
  { value: '7,200', label: 'Square feet' },
  { value: '1', label: 'Stream under the floor' }
]

export const CONDITION = [
  'Significant water leaks',
  'Lead-containing paint',
  'Rot throughout',
  'Upper walls pulling away from the frame'
]

export const HISTORY_PHOTO = {
  src: '/images/history-1.webp',
  alt: 'Black and white photograph of the theater facade'
};

export const BEFORE = [
  { src: '/images/old-1.webp', alt: 'The theater facade today', label: 'The facade' },
  { src: '/images/old-2.webp', alt: 'The auditorium and stage in their current state', label: 'The auditorium & stage' },
  { src: '/images/old-3.webp', alt: 'The seats and crumbling walls in their current state', label: 'The seats & walls' },
  { src: '/images/old-4.webp', alt: 'The backside of the building, with visible leak damage and vines growing up the side', label: 'The backside' }
]

export const AFTER: {
  before: string;
  after: string;
  label: string;
  beforePos?: string;
  afterPos?: string;
  beforeShift?: number;
}[] = [
  { before: '/images/before-1.webp', after: '/images/after-1.webp', label: 'The facade' },
  // Alignment knobs for features like the railings: beforeShift moves the before
  // photo in px (with a compensating zoom); beforePos/afterPos slide the crop
  // window for images that are cropped by the 4:3 frame.
  { before: '/images/before-2.webp', after: '/images/after-2.webp', label: 'The auditorium', beforeShift: 30 },
  { before: '/images/before-3.webp', after: '/images/after-3.webp', label: 'The lobby' },
  { before: '/images/before-4.webp', after: '/images/after-4.webp', label: 'The basement' }
]

export const BRYAN = {
  photo: '/images/bryan.webp',
  linkedin: 'https://www.linkedin.com/in/bryan-parnell-b47642bb'
}

export const PROGRESS = [
  { src: '/images/progress-1.webp', date: 'Month 2026', title: 'Doors unlocked', text: 'Replace with a progress update.' },
  { src: '/images/progress-2.webp', date: 'Month 2026', title: 'Clearing the auditorium', text: 'Replace with a progress update.' },
  { src: '/images/progress-3.webp', date: 'Month 2026', title: 'First look at the marquee', text: 'Replace with a progress update.' }
]

export const EVENTS = [
  { date: 'OCT', day: '00', title: 'Open house & tours', note: 'Walk the building with Bryan' },
  { date: 'NOV', day: '00', title: 'Volunteer work day', note: 'Gloves and coffee provided' },
  { date: 'DEC', day: '00', title: 'Fundraiser screening', note: 'A classic film, one night only' }
]
