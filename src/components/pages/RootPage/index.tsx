import * as React from 'react';
import styled from 'styled-components';
import Carousel from '../../molecules/Carousel';

const LContainer = styled.div`
  font-size: 16px;
  line-height: 1.5;
  text-align: center;
`;

const LBody = styled.div`
  width: 840px;
  margin: 0 auto;
`;

const LPage = styled.div`
  background-color: gainsboro;
  font-size: 32px;
  font-weight: bold;
  height: 240px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RootPage: React.FC = () => {
  return (
    <LContainer>
      <h1>Carousel Sample</h1>
      <LBody>
        <Carousel itemWidth={640}>
          <LPage>1</LPage>
          <LPage>2</LPage>
          <LPage>3</LPage>
        </Carousel>
      </LBody>
    </LContainer>
  )
}

export default RootPage;
