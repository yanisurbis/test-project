import React from 'react';
import styled from 'styled-components';
import { Box } from 'rebass';

const Label = styled(Box).attrs(() => ({
  as: 'label',
}))`
  display: block;
  position: relative;
  padding-left: 30px;
  font-size: ${p => p.theme.fontSizes[1]};
  color: black;
  cursor: pointer;
  user-select: none;
  line-height: 1.2;

  input {
    position: absolute;
    opacity: 0;
  }

  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 18px;
    width: 18px;
    margin-right: 18px;
    background-color: white;
    border: 1px solid ${p => p.theme.colors.grey1};
    transition: background 0.3s, border-color 0.3s;

    :after {
      content: '';
      position: absolute;
      display: none;
    }
  }

  input:checked ~ .checkmark {
    background-color: ${p => p.theme.colors.red1};
    border: 1px solid ${p => p.theme.colors.red1};
  }

  input:checked ~ .checkmark:after {
    display: block;
  }

  input:focus ~ .checkmark {
    box-shadow: 0 0 3px 3px ${p => p.theme.colors.red1};
  }

  .checkmark:after {
    left: 6px;
    top: 2px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
`;

export const Checkbox = ({ input, label, ...styleProps }) => {
  return (
    <Label {...styleProps}>
      <input
        className="checkmark"
        type="checkbox"
        {...input}
        checked={input.value === 'false' || !input.value ? false : true}
      />
      <span className="checkmark" />
      {label}
    </Label>
  );
};
