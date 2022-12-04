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
    productImageUrl: 'images/products/image-aqua.png',
    submitterAvatarUrl: 'images/avatars/daniel.jpg',
    title: 'Yellow Pail',
    url: '#',
    votes: generateVoteCount(),
  },
  {
    description: 'Earn points when your favorite politicians pass legislation.',
    id: 2,
    productImageUrl: 'images/products/image-rose.png',
    submitterAvatarUrl: 'images/avatars/kristy.png',
    title: 'Supermajority: The Fantasy Congress League',
    url: '#',
    votes: generateVoteCount(),
  },
  {
    description: 'We already have your measurements and shipping address.',
    id: 3,
    productImageUrl: 'images/products/image-steel.png',
    submitterAvatarUrl: 'images/avatars/veronika.jpg',
    title: 'Tinfoild: Tailored tinfoil hats',
    url: '#',
    votes: generateVoteCount(),
  },
  {
    description: 'High-minded or absent-minded? You decide.',
    id: 4,
    productImageUrl: 'images/products/image-yellow.png',
    submitterAvatarUrl: 'images/avatars/molly.png',
    title: 'Haught or Naught',
    url: '#',
    votes: generateVoteCount(),
  },
];
