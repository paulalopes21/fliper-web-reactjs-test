import React from 'react';

import { Container } from './styles';

interface Props {
  error: any
}

const Error: React.FC<Props> = ({ error }) => {
  return (
    <Container>
      <h1>Ocorreu um erro!</h1>
      <p>{error?.message}</p>

    </Container>
  );
};

export default Error;
