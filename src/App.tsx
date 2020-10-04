import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';

import api from './services/api';

import GlobalStyles from "./styles/GlobalStyles";
import Layout from "./components/Layout";

function App() {
  return (
    <>
      <ApolloProvider client={api}>
        <Layout />
        <GlobalStyles />
      </ApolloProvider>
    </>
  );
}

export default App;
