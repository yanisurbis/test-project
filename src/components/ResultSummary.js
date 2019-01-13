import React from 'react';
import { Text } from 'rebass';

export const RusultSummary = ({ length }) => {
  if (length === 0) {
    return null;
  }

  return (
    <Text fontWeight={'bold'} mb={'1rem'}>
      {length} {length === 1 ? 'hotel' : 'hotels'} found:
    </Text>
  );
};
