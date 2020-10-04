import React from 'react';

import CardSummary from '../CardSummary';

import { Container, Wrapper } from './styles';

const Layout: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <CardSummary />
      </Wrapper>
    </Container>
  );
};

export default Layout;
