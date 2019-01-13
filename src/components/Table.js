import styled from 'styled-components';
import { Box } from 'rebass';

export const Table = styled(Box).attrs(p => ({
  as: 'table',
}))`
  & th {
    width: 80px;
    text-align: left;
  }
  & td {
    text-align: left;
  }
`;
