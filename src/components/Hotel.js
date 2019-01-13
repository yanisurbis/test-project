import React from 'react';
import styled from 'styled-components';
import { Flex, Box, Text } from 'rebass';
import slugify from '@sindresorhus/slugify';

import { getRandomImageUrl } from '../utils/getRandomImageUrl';

import { A } from './A';
import { Rating } from './Rating';

const Wrapper = styled.article`
  border: 1px solid ${p => p.theme.colors.grey1};
  display: flex;
  justify-content: space-between;
`;

export const Hotel = ({ hotel }) => {
  const { id, name, price, rate } = hotel;

  return (
    <Wrapper>
      <img src={getRandomImageUrl(hotel)} alt={name} width={250} height={200} />
      <Box flex={1} p={'1rem'}>
        <Text as={'h1'} mt={'0px'} mb={'8px'}>
          {name}
        </Text>
        <Rating rating={rate} />
      </Box>
      <Flex
        width={'200px'}
        alignItems={'center'}
        pt={'1rem'}
        pb={'2rem'}
        justifyContent={'space-between'}
        flexDirection={'column'}
      >
        <Text fontSize={4} fontWeight={'bold'}>
          ${price.single}
        </Text>
        <A to={`hotel/${id}/${slugify(name)}`}>View Deal</A>
      </Flex>
    </Wrapper>
  );
};
