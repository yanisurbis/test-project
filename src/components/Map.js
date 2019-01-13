import React from 'react';

export const Map = ({ lat, lon }) => {
  return (
    <iframe
      width="250"
      height="200"
      frameBorder="0"
      scrolling="no"
      marginHeight="0"
      marginWidth="0"
      src={`https://maps.google.com/maps?q=${lat},${lon}&output=embed`}
      title={'google maps'}
    />
  );
};
