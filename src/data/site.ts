/**
 * KOKO Chicken & Snacks — all site content in one place.
 * Edit here, everything else re-renders. No CMS.
 *
 * TODO (confirm with KOKO before launch):
 *  - Opening hours: sources disagree. Values below are the best available
 *    (Google listing + DoorDash/mainmenus). Verify against the shop.
 *  - Photos: every image in src/assets/ is a stock placeholder. Swap for
 *    KOKO's own food + interior photography.
 *  - Social links: none published yet. Add Instagram etc. to `social` below.
 *  - About copy: written from public info, no invented history. Confirm.
 *  - Delivery URLs: point to KOKO's real Uber Eats / DoorDash store pages.
 */

export const contact = {
  name: 'KOKO Chicken & Snacks',
  shortName: 'KOKO',
  tagline: 'Korean fried chicken, done properly.',
  street: '2644 Montrose Ave',
  city: 'Abbotsford, BC',
  postal: 'V2S 3T6',
  region: 'BC',
  country: 'CA',
  phoneDisplay: '(604) 746-1922',
  phoneHref: '+16047461922',
  neighbourhood: 'Downtown Abbotsford, at Montrose and George Ferguson',
  pricePerPerson: '$10 to $20 per person',
  mapEmbed:
    'https://www.google.com/maps?q=2644+Montrose+Ave,+Abbotsford,+BC+V2S+3T6&output=embed',
  mapLink:
    'https://www.google.com/maps/dir/?api=1&destination=2644+Montrose+Ave+Abbotsford+BC+V2S+3T6',
};

export const orderLinks = {
  // TODO: KOKO's real Uber Eats store URL. Until we have it, this points at the
  // verified DoorDash page so the preview has no dead links. Swap this one string.
  uberEats: 'https://www.doordash.com/store/koko-chicken-&-snacks-24506838/',
  doorDash: 'https://www.doordash.com/store/koko-chicken-&-snacks-24506838/',
};

export const social: { label: string; href: string }[] = [
  // TODO: add KOKO's real profiles, e.g.
  // { label: 'Instagram', href: 'https://instagram.com/...' },
];

/** TODO: confirm with KOKO. */
export const hours: { days: string; time: string }[] = [
  { days: 'Monday', time: '4:00 pm to 10:30 pm' },
  { days: 'Tuesday', time: '4:00 pm to 10:30 pm' },
  { days: 'Wednesday', time: '11:00 am to 10:30 pm' },
  { days: 'Thursday', time: '11:00 am to 10:30 pm' },
  { days: 'Friday', time: '11:00 am to 11:30 pm' },
  { days: 'Saturday', time: '11:00 am to 11:30 pm' },
  { days: 'Sunday', time: '11:00 am to 8:30 pm' },
];

export type MenuItem = { name: string; price: string; tag?: string };
export type MenuGroup = { name: string; note?: string; items: MenuItem[] };

export const menu: MenuGroup[] = [
  {
    name: 'Chicken',
    note: 'Bone-in or boneless. Double-fried, tossed to order.',
    items: [
      { name: 'Original', price: '16.49' },
      { name: 'Honey Soy Garlic', price: '18.49', tag: 'Most ordered' },
      { name: 'Sweet & Spicy', price: '18.49', tag: 'Spicy' },
      { name: 'Spicy', price: '18.49', tag: 'Spicy' },
      { name: 'Spicy Soy Garlic', price: '18.49', tag: 'Spicy' },
      { name: 'Green Onion', price: '18.99' },
      { name: 'Cheese Sprinkle', price: '18.49' },
      { name: 'Spicy Cheese Sprinkle', price: '18.49', tag: 'Spicy' },
      { name: 'Curry Sprinkle', price: '18.49' },
      { name: 'Half & Half', price: '33.99', tag: 'Two flavours, 5 pc each' },
    ],
  },
  {
    name: 'Rice Bowls & Combos',
    items: [
      { name: 'Crispy Chicken Rice Bowl', price: '18.99' },
      { name: 'Tofu Rice Bowl', price: '18.99', tag: 'Vegetarian' },
      { name: 'KOKO Combo', price: '16.99', tag: 'Fries or rice included' },
    ],
  },
  {
    name: 'Sides',
    items: [
      { name: 'Deep Fried Veggie Spring Rolls', price: '7.99', tag: 'Vegetarian' },
      { name: 'Deep Fried Veggie Dumplings (6)', price: '9.99', tag: 'Vegetarian' },
      { name: 'Deep Fried Shrimp (7)', price: '14.99' },
      { name: 'Fries', price: '4.99' },
      { name: 'Cheese Fries', price: '4.99' },
      { name: 'Spicy Cheese Fries', price: '4.99', tag: 'Spicy' },
      { name: 'Curry Sprinkle Fries', price: '4.99' },
      { name: 'Purple Rice', price: '2.99' },
      { name: 'Sweet Potato', price: '5.99' },
      { name: 'Coleslaw', price: '5.99' },
      { name: 'Macaroni Salad', price: '5.99' },
      { name: 'Potato Salad', price: '5.99' },
      { name: 'Pickled Radish', price: '2.49' },
      { name: 'Kimchi', price: '2.49' },
    ],
  },
  {
    name: 'Snacks & Dessert',
    items: [
      { name: 'Cheese Snow Corndog', price: '4.99' },
      { name: 'Snow Ice Pouches', price: '4.99', tag: 'Cookies & cream, coffee, milkshake' },
      { name: 'Ramune Soda', price: '4.99' },
      { name: 'Pop', price: '2.49' },
      { name: 'Red Bull', price: '4.49' },
      { name: 'Water', price: '2.49' },
    ],
    note: 'Beer and soju available in-store.',
  },
];

export type Favourite = {
  name: string;
  blurb: string;
  img: string; // key into the images map in Favourites.astro
};

export const favourites: Favourite[] = [
  {
    name: 'Honey Soy Garlic',
    blurb:
      'The one most people order. Crisp and garlicky with a faint sweetness, buried under fresh scallion.',
    img: 'honeySoyGarlic',
  },
  {
    name: 'Sweet & Spicy',
    blurb: 'Gochujang heat with a brown-sugar edge. Order extra napkins.',
    img: 'sweetSpicy',
  },
  {
    name: 'Cheese Snow Corndog',
    blurb: 'Mozzarella core, sugar-dusted crust, cheese pull included.',
    img: 'corndog',
  },
];

export const reviews: { quote: string; name: string; source: string }[] = [
  {
    quote: 'Chicken was as advertised: crispy. Plus purple rice, and deep-fried kale.',
    name: 'Pam D.',
    source: 'Google review',
  },
  {
    quote: 'Food is good, portions are great, service is awesome.',
    name: 'Spencer Rozell',
    source: 'Google review',
  },
];

/** Honest description from public info. No invented history. Confirm with KOKO. */
export const about: string[] = [
  'KOKO Chicken & Snacks is a small Korean fried-chicken counter in downtown Abbotsford, where Montrose meets George Ferguson.',
  'The menu stays short on purpose. Chicken is fried twice for maximum crunch, tossed in sauces made in-house, and served with the Korean snacks that go with it: purple rice, deep-fried kale, cheese corndogs, snow ice.',
  'Order at the counter and take it home, or get it delivered across the Fraser Valley.',
];

export const kokoWay: string[] = [
  'Double-fried till it shatters',
  'Ten sauces, tossed to order',
  'Purple rice and fried kale',
  'Corndogs, dumplings, snow ice',
];
