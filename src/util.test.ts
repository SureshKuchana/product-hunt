import { sortData } from './util';

describe('test util functions', () => {
  it('test sort the array of the objects', () => {
    const data = [
      {
        description: 'On-demand sand castle construction expertise.',
        id: 1,
        productImageUrl: 'images/products/image-aqua.png',
        submitterAvatarUrl: 'images/avatars/daniel.jpg',
        title: 'Yellow Pail',
        url: '#',
        votes: 50,
      },
      {
        description: 'On-demand sand castle construction expertise.',
        id: 2,
        productImageUrl: 'images/products/image-aqua.png',
        submitterAvatarUrl: 'images/avatars/daniel.jpg',
        title: 'Yellow Pail',
        url: '#',
        votes: 49,
      },
      {
        description: 'On-demand sand castle construction expertise.',
        id: 3,
        productImageUrl: 'images/products/image-aqua.png',
        submitterAvatarUrl: 'images/avatars/daniel.jpg',
        title: 'Yellow Pail',
        url: '#',
        votes: 48,
      },
    ];
    const votes = data.map((a) => a.votes);
    const sortedData = sortData(data).map((b) => b.votes);
    expect(sortedData).toEqual(votes);
  });
});
