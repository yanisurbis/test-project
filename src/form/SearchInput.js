import React from 'react';
import styled from 'styled-components';
import search from '../search.svg';

const Wrapper = styled.div`
  position: relative;
  img {
    position: absolute;
    left: 5px;
    top: 5px;
  }
`;

const SInput = styled.input`
  border: 1px solid ${p => p.theme.colors.grey1};
  padding: 0.5rem 0.75rem 0.5rem 30px;
  font-size: ${p => p.theme.fontSizes[1]};

  :focus {
    outline: 0;
    box-shadow: 0 0 3px 3px ${p => p.theme.colors.red1};
  }
`;

export const SearchInput = ({ input }) => {
  return (
    <Wrapper>
      <img src={search} alt="" width={23} height={23} />
      <SInput {...input} />
    </Wrapper>
  );
};
