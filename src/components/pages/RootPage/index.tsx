import * as React from 'react';
import styled from 'styled-components';

const LContainer = styled.div`
  font-size: 16px;
  color: red;
  line-height: 1.5;
`;

const RootPage: React.FC = () => {
  return <LContainer>Hello World!</LContainer>
}

export default RootPage;
