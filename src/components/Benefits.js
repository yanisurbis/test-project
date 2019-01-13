import React from 'react';
import { Text } from 'rebass';
import styled from 'styled-components';

const SUl = styled.ul`
  & > li {
    margin-bottom: 0.4rem;
  }
`;

const SLi = styled.li`
  display: ${p => (p.isAvailible ? 'list-item' : 'none')};
`;

const isAvailible = hotel => path => hotel[path] === 'true';

export const Benefits = ({ hotel }) => {
  const isA = isAvailible(hotel);

  return (
    <section>
      <Text fontWeight={'bold'}>Benefits:</Text>
      <SUl>
        <SLi isAvailible={isA('hasFreeBreakfast')}>free breakfast</SLi>
        <SLi isAvailible={isA('hasFreeParking')}>free parking</SLi>
        <SLi isAvailible={isA('hasFreeInternet')}>free internet</SLi>
        <SLi isAvailible={isA('hasFreeCancellation')}>free cancellation</SLi>
        <SLi isAvailible={isA('hasFreeShuttle')}>free shuttle</SLi>
        <SLi isAvailible={isA('hasPool')}>has pool</SLi>
      </SUl>
    </section>
  );
};
