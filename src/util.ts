import img1 from './assets/avatars/daniel.jpg';
import img2 from './assets/products/image-aqua.png';
import img3 from './assets/products/image-rose.png';
import img33 from './assets/avatars/kristy.png';

import img4 from './assets/products/image-steel.png';
import img44 from './assets/avatars/veronika.jpg';

import img5 from './assets/products/image-yellow.png';
import img55 from './assets/avatars/molly.png';

import { Products } from './types';

export const generateVoteCount = () => {
  return Math.floor(Math.random() * 50 + 15);
};

export const sortData = (array: Products[]) => {
  const data = array.sort((a, b) => b.votes - a.votes);
  return data;
};

export const productsData: Products[] = [
  {
    description: 'On-demand sand castle construction expertise.',
    id: 1,
    productImageUrl: img2,
    submitterAvatarUrl: img1,
    title: 'Yellow Pail',
    url: '#',
    votes: generateVoteCount(),
  },
  {
    description: 'Earn points when your favorite politicians pass legislation.',
    id: 2,
    productImageUrl: img3,
    submitterAvatarUrl: img33,
    title: 'Supermajority: The Fantasy Congress League',
    url: '#',
    votes: generateVoteCount(),
  },
  {
    description: 'We already have your measurements and shipping address.',
    id: 3,
    productImageUrl: img4,
    submitterAvatarUrl: img44,
    title: 'Tinfoild: Tailored tinfoil hats',
    url: '#',
    votes: generateVoteCount(),
  },
  {
    description: 'High-minded or absent-minded? You decide.',
    id: 4,
    productImageUrl: img5,
    submitterAvatarUrl: img55,
    title: 'Haught or Naught',
    url: '#',
    votes: generateVoteCount(),
  },
];
