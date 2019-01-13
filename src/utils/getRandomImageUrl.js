import slugify from '@sindresorhus/slugify';

export const getRandomImageUrl = hotel => {
  return `${hotel.img}&sig=${slugify(hotel.name)}`;
};
