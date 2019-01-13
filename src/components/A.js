import styled from 'styled-components';
import { Link } from '@reach/router';

export const A = styled(Link)`
  text-decoration: none;
  padding: 0.5rem 1rem;
  color: white;
  background-color: ${p => p.theme.colors.red1};

  :hover {
    text-decoration: underline;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 3px 3px red;
  }

  :active {
    color: rgba(255, 255, 255, 0.8);
  }
`;
