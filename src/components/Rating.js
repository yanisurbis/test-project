import React from 'react';
import styled from 'styled-components';
import { Box } from 'rebass';
import { ReactComponent as StarSVG } from '../star.svg';

const Star = ({ isActive, ...rest }) => <StarSVG {...rest} />;

const SStar = styled(Star)`
  color: ${p => p.theme.colors.black1};
  fill: ${p => (p.isActive ? p.theme.colors.black1 : 'white')};
  stroke-width: 1;
  margin-right: 0.15rem;
`;

export const Rating = ({ rating }) => {
  rating = parseInt(rating);

  return (
    <Box mb={'1rem'}>
      {[0, 0, 0, 0, 0].map((elm, idx) => {
        return (
          <SStar
            key={idx}
            isActive={idx === 0 ? true : idx <= rating - 1}
            width={20}
            height={20}
          />
        );
      })}
    </Box>
  );
};
