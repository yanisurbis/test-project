import React from 'react';
import styled from 'styled-components';
import { Box, Text, Image, Flex } from 'rebass';
import { ReactComponent as Compass } from '../compass.svg';
import { ReactComponent as Dollar } from '../dollar-sign.svg';

import { getRandomImageUrl } from '../utils/getRandomImageUrl';
import { getHotels } from '../utils/getHotels';

import { ContentWrapper } from '../components/ContentWrapper';
import { Rating } from '../components/Rating';
import { Map } from '../components/Map';
import { Table } from '../components/Table';
import { Benefits } from '../components/Benefits';

const Wrapper = styled(ContentWrapper)`
  display: flex;
`;

export const Hotel = ({ hotelId }) => {
  const hotel = getHotels().find(h => h.id === parseInt(hotelId));

  const { name, description, rate, address, price, location } = hotel;

  return (
    <Wrapper as={'main'}>
      <Box width={'250px'}>
        <Image
          src={getRandomImageUrl(hotel)}
          alt={name}
          width={'250px'}
          height={'200px'}
          flex={1}
          mb={'2rem'}
        />
        <Map {...location} />
      </Box>
      <Box px={'2rem'}>
        <Text mt={'0px'} mb={'1rem'} as={'h1'}>
          {name}
        </Text>
        <Rating rating={rate} />
        <Flex alignItems={'center'} mb={'1rem'}>
          <Dollar />
          <Table ml={'0.5rem'}>
            <thead>
              <tr>
                <th>Single</th>
                <th>Dual</th>
                <th>Tween</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>${price.single}</td>
                <td>${price.double}</td>
                <td>${price.twin}</td>
              </tr>
            </tbody>
          </Table>
        </Flex>
        <Flex alignItems={'center'} mb={'1rem'}>
          <Compass />
          <Text ml={'0.5rem'}>{address}</Text>
        </Flex>
        <Text mb={'1rem'} width={'500px'} lineHeight={'1.7'}>
          {description}
        </Text>
        <Benefits hotel={hotel} />
      </Box>
    </Wrapper>
  );
};
