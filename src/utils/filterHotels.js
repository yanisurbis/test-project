import { propEq, filter, propSatisfies, includes } from 'ramda';

import { CONST_FILTERS as F } from '../const/filters';

const hasFreeBreakfast = filter(propEq('hasFreeBreakfast', 'true'));
const hasFreeParking = filter(propEq('hasFreeParking', 'true'));
const hasFreeInternet = filter(propEq('hasFreeInternet', 'true'));
const hasFreeCancellation = filter(propEq('hasFreeCancellation', 'true'));
const hasFreeShuttle = filter(propEq('hasFreeShuttle', 'true'));
const hasPool = filter(propEq('hasPool', 'true'));

const nameIncludesQuery = query =>
  filter(
    propSatisfies(
      name => includes(query.toLowerCase(), name.toLowerCase()),
      'name',
    ),
  );

const filterWithRatingGE = rating =>
  filter(
    propSatisfies(
      hotelRating => parseInt(hotelRating) >= parseInt(rating),
      'rate',
    ),
  );

export const filterHotels = (spec = {}, hotels) => {
  const hasTrueProp = p => spec[p] === 'true';

  let res = hotels;

  res = hasTrueProp(F.FREE_BREAKFAST) ? hasFreeBreakfast(res) : res;

  res = hasTrueProp(F.FREE_PARKING) ? hasFreeParking(res) : res;
  res = hasTrueProp(F.FREE_INTERNET) ? hasFreeInternet(res) : res;
  res = hasTrueProp(F.FREE_CANCELLATION) ? hasFreeCancellation(res) : res;
  res = hasTrueProp(F.FREE_SHUTTLE) ? hasFreeShuttle(res) : res;
  res = hasTrueProp(F.HAS_POOL) ? hasPool(res) : res;

  res = spec[F.QUERY] ? nameIncludesQuery(spec[F.QUERY])(res) : res;

  res = spec[F.RATING] ? filterWithRatingGE(spec[F.RATING])(res) : res;

  return res;
};
