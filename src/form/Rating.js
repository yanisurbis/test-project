import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Star } from '../star.svg';

const Button = styled.button`
  & > svg {
    color: ${p => (p.isActive ? p.theme.colors.blue1 : p.theme.colors.grey1)};
    fill: ${p => (p.isActive ? p.theme.colors.blue1 : 'white')};
    stroke-width: 1;
  }
  padding: 0;
  position: relative;
  background: transparent;
  border: none;
  cursor: pointer;
  &:before {
    position: absolute;
    content: '${p => p.text}';
    width: 40px;
    height: 41px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${p => p.theme.fontSizes[0]};
    color: ${p => (p.isActive ? 'white' : 'black')};
    font-weight: bold;
  }
  
  :focus {
    outline: 0;
    box-shadow: 0 0 3px 3px ${p => p.theme.colors.blue1};
  }                 
`;

export const Rating = ({ input }) => {
  const value = input.value || 1;

  return (
    <div>
      {[0, 0, 0, 0, 0].map((elm, idx) => {
        return (
          <Button
            key={idx}
            type={'button'}
            text={idx === 0 ? '0+' : idx + 1}
            isActive={idx === 0 ? true : idx <= value - 1}
            onClick={() => input.onChange(idx === 0 ? 0 : idx + 1)}
          >
            <Star width={40} height={40} />
          </Button>
        );
      })}
    </div>
  );
};
