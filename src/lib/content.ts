/** Flip to true when there's real progress to show (re-enables the section + nav link). */
export const SHOW_PROGRESS = false;

export const THEATER = {
  name: 'The Glen Theatre',
  town: 'Glen Rock, Pennsylvania',
  address: '37 Manchester Street',
  tagline: 'A new act begins.'
}

export const HISTORY = [
  {
    year: '1872–1912',
    title: 'The Splendid Little Opera House',
    text: 'The Glen Rock Musical Association, founded in 1872, bought the land in July 1912. Architect Joseph Dise was hired to design the Glen Rock Auditorium—a 500-seat opera house, theater, and band hall. It served as the home base for Roland F. Seitz, the famous “Parade Music Prince,” whose compositions rivaled those of John Philip Sousa. The stage hosted famous local pieces like the Glen Rock March, Pomposa, Salutation, and March Grandioso—works that are still performed by regional community bands today and featured by major university marching bands across the country.'
  },
  {
    year: '1913',
    title: 'First Pictures Before the Grand Opening',
    text: 'Even before construction of the Auditorium was completed, silent film serials began screening at the venue in 1913. In June of that year, the Musical Association purchased the local photoplay parlor, acquiring the projector operated by Lewis Yost to begin bringing moving pictures to the community.'
  },
  {
    year: '1932',
    title: 'The Movies Move In',
    text: 'Chalmers Sechrist leased the hall in 1932 to show movies on a regular schedule. By 1935, he and his wife, Lottie, purchased the building and officially renamed it the Glen Theatre. Kids paid about 17¢ and adults 35¢ for admission. Silent films with live piano, Movietone newsreels, cartoons, and Westerns shared the stage with high school plays, operettas like H.M.S. Pinafore, and community graduations.'
  },
  {
    year: '1967–1975',
    title: 'Passed Between Families',
    text: 'The Sechrists sold the theater to the Bortner family in 1967, who later sold it to the Strausbaugh family in 1975. Through it all, the Glen kept its weekend shows running, cementing its legacy as the last operating community movie theater in York County outside of York City.'
  },
  {
    year: '2017',
    title: 'The Last Reel',
    text: 'Unable to afford the costly industry transition from 35mm film to digital projection, the theater was forced to close its doors. The final movie shown on its screen, fittingly, was the animated film Sing in January 2017.'
  },
  {
    year: '2023',
    title: 'Laying the Groundwork',
    text: 'Local resident Abigail Lipka bought the building in August 2023 to rekindle interest in the historic venue. She made meaningful progress on the structure, organizing volunteer clean-up days and rallying community support before deciding to pass the torch and return the property to the market.'
  },
  {
    year: 'Present Day',
    title: 'A Second Act',
    text: 'Bryan Parnell is seeking to purchase the Glen Theatre and bring it back to life as a vibrant venue for movies, live entertainment, and musical performances—inviting the community to join together and help raise the curtain once again.'
  }
]

export const FACTS = [
  { value: '1913', label: 'Year built' },
  { value: '500', label: 'Original seats' },
  { value: '7,200', label: 'Square feet' },
  { value: '1', label: 'Stream under the floor' }
]

export const CONDITION = [
  'Leaking original roof (1913)',
  'Peeling and chipped paint, cracked plaster',
  'Deteriorated seats',
  'Damaged doors and windows'
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
  { date: 'NOV', day: '00', title: 'Community work day', note: 'Gloves and coffee provided' },
  { date: 'DEC', day: '00', title: 'Fundraiser screening', note: 'A classic film, one night only' }
]
